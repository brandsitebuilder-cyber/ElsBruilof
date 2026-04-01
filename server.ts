import express from "express";
import { google } from "googleapis";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV !== "production") {
  try {
    const dotenv = await import("dotenv");
    dotenv.config();
  } catch (e) {
    console.warn("dotenv not found, skipping config");
  }
}

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
      sheetId: !!process.env.GOOGLE_SHEET_ID,
      email: !!process.env.GOOGLE_CLIENT_EMAIL,
      key: !!process.env.GOOGLE_PRIVATE_KEY
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
    url: req.url,
    method: req.method
  });
});

// Google Sheets Auth
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n") : undefined,
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

// API routes
app.post(["/api/rsvp", "/api/rsvp/"], async (req, res) => {
  const { name, cellphone, dietary, message } = req.body;

  if (!name || !cellphone) {
    return res.status(400).json({ error: "Name and Cellphone are required." });
  }

  // Strip spaces from user input for comparison
  const cleanCellphone = cellphone.toString().replace(/\s/g, "");

  try {
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    if (!spreadsheetId) {
      throw new Error("GOOGLE_SHEET_ID is not configured.");
    }

    // 1. Check for duplicates in Column B
    const range = "Sheet1!B:B"; // Assuming Sheet1 and Column B is cellphone
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = response.data.values || [];
    // Compare cleaned versions to ensure a perfect match
    const isDuplicate = rows.some((row) => {
      const sheetValue = row[0] ? row[0].toString().replace(/\s/g, "") : "";
      return sheetValue === cleanCellphone;
    });

    if (isDuplicate) {
      return res.status(400).json({ error: "Oops! You have already RSVP'd with this number." });
    }

    // 2. Append data
    const timestamp = new Date().toISOString();
    const values = [[name, cellphone, dietary, message, timestamp]];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    });

    res.status(200).json({ message: "Thank you for your RSVP!" });
  } catch (error: any) {
    console.error("Google Sheets Error:", error);
    res.status(500).json({ error: "Something went wrong. Please try again later." });
  }
});

// Catch-all for other API routes to return 404 JSON
app.all("/api/*", (req, res) => {
  res.status(404).json({ error: `API route not found: ${req.method} ${req.url}` });
});

// Vite middleware setup
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
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
