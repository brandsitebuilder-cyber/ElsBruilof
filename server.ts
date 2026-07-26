import express from "express";
import { google } from "googleapis";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Logger middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Health check route
app.get("/api/health", (req, res) => {
  res.json({ 
    status: "ok", 
    env: {
      sheetId: process.env.GOOGLE_SHEET_ID || "1bxb4-dZ-l4eh95BOgopABS540pSOd2pksmGz2kiz4o0",
      hasEmail: !!process.env.GOOGLE_CLIENT_EMAIL,
      serviceAccountEmail: process.env.GOOGLE_CLIENT_EMAIL || "Not configured",
      hasKey: !!process.env.GOOGLE_PRIVATE_KEY
    }
  });
});

// Debug route to verify server is reachable
app.get("/api/debug", (req, res) => {
  res.json({
    message: "Server is reachable!",
    time: new Date().toISOString(),
    node_env: process.env.NODE_ENV,
    port: PORT,
    serviceAccountEmail: process.env.GOOGLE_CLIENT_EMAIL || "Not configured",
    sheetId: process.env.GOOGLE_SHEET_ID || "1bxb4-dZ-l4eh95BOgopABS540pSOd2pksmGz2kiz4o0"
  });
});

// Test route for Google Sheets
app.get("/api/test-sheets", async (req, res) => {
  try {
    const sheets = getSheetsClient();
    const spreadsheetId = process.env.GOOGLE_SHEET_ID || "1bxb4-dZ-l4eh95BOgopABS540pSOd2pksmGz2kiz4o0";
    
    const response = await sheets.spreadsheets.get({
      spreadsheetId,
    });
    
    res.json({
      success: true,
      title: response.data.properties?.title,
      sheets: response.data.sheets?.map((s: any) => s.properties?.title),
      serviceAccountEmail: process.env.GOOGLE_CLIENT_EMAIL
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message,
      code: error.code,
      details: error.response?.data,
      serviceAccountEmail: process.env.GOOGLE_CLIENT_EMAIL || "Not configured"
    });
  }
});

// Helper to get Google Sheets client
function getSheetsClient() {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;
  const sheetId = process.env.GOOGLE_SHEET_ID || "1bxb4-dZ-l4eh95BOgopABS540pSOd2pksmGz2kiz4o0";

  if (!clientEmail || !privateKey) {
    const missing = [];
    if (!clientEmail) missing.push("GOOGLE_CLIENT_EMAIL");
    if (!privateKey) missing.push("GOOGLE_PRIVATE_KEY");
    throw new Error(`Google Sheets credentials missing on server: ${missing.join(", ")}. Please set environment secrets.`);
  }

  // Handle private key formatting
  const formattedKey = privateKey.replace(/\\n/g, "\n").replace(/^"(.*)"$/, "$1");

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: formattedKey,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

// API routes
app.post(["/api/rsvp", "/api/rsvp/"], async (req, res) => {
  const { name, partnerName, cellphone, email, mainCourse, dietary, message } = req.body;

  if (!name || !cellphone) {
    return res.status(400).json({ error: "Naam en Selfoonnommer is verpligtend." });
  }

  // Strip spaces from user input for comparison
  const cleanCellphone = cellphone.toString().replace(/\s/g, "");

  try {
    const sheets = getSheetsClient();
    const spreadsheetId = process.env.GOOGLE_SHEET_ID || "1bxb4-dZ-l4eh95BOgopABS540pSOd2pksmGz2kiz4o0";

    // 1. Check for duplicates in Column B or Column C (A:C targets the first tab regardless of its name)
    let rows: any[] = [];
    try {
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: "A:C",
      });
      rows = response.data.values || [];
    } catch (getErr: any) {
      console.warn("Could not read existing rows for duplicate check, proceeding with append:", getErr?.message);
    }

    const isDuplicate = rows.some((row) => {
      const colB = row[1] ? row[1].toString().replace(/\s/g, "") : "";
      const colC = row[2] ? row[2].toString().replace(/\s/g, "") : "";
      return colB === cleanCellphone || colC === cleanCellphone;
    });

    if (isDuplicate) {
      return res.status(400).json({ error: "Dit lyk of jy reeds met hierdie nommer RSVP'd het!" });
    }

    // 2. If sheet is brand new/empty, include column headers
    const timestamp = new Date().toISOString();
    const values: string[][] = [];
    
    if (rows.length === 0) {
      values.push(["Naam & Van", "Maat se Naam", "Selfoonnommer", "E-pos", "Hoofgereg", "Dieetvereistes", "Boodskap", "Datum Stempel"]);
    }
    
    values.push([name, partnerName || "", cellphone, email || "", mainCourse || "", dietary || "", message || "", timestamp]);

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "A:H",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    });

    console.log(`[RSVP Success] Appended entry for ${name} (${cellphone})`);
    res.status(200).json({ message: "Dankie vir u RSVP!" });
  } catch (error: any) {
    console.error("Google Sheets Error:", error?.message || error);
    const details = error?.message || "Unknown error";
    let userMsg = "Iets het foutgegaan met die stoor van u RSVP. Probeer asseblief later weer.";
    
    if (details.includes("missing") || details.includes("credentials")) {
      userMsg = "Bedienerkonfigurasie vir Google Sheets ontbreek (GOOGLE_CLIENT_EMAIL / GOOGLE_PRIVATE_KEY).";
    } else if (details.includes("403") || details.includes("permission") || details.includes("Permission denied")) {
      userMsg = "Geen redigeer-regte op die Google Sheet nie. Maak seker die diensrekening het 'Editor' toegang.";
    }

    res.status(500).json({ 
      error: userMsg,
      details: details
    });
  }
});

// Catch-all for other API routes to return 404 JSON
app.all("/api/*", (req, res) => {
  res.status(404).json({ error: `API route not found: ${req.method} ${req.url}` });
});

// Vite middleware setup
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    try {
      const dotenv = await import("dotenv");
      dotenv.config();
    } catch {
      // dotenv is optional if env variables are already set
    }
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve from the dist folder
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

// Export the app for Vercel
export default app;

// Only start the server if we're not running as a Vercel function
if (!process.env.VERCEL) {
  startServer();
}
