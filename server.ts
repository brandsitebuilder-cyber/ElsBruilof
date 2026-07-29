import express from "express";
import { google } from "googleapis";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Helper function to send RSVP notification email
async function sendRsvpEmailNotification(data: {
  name: string;
  partnerName?: string;
  cellphone: string;
  email?: string;
  mainCourse?: string;
  dietary?: string;
}) {
  const recipients = ["ane.havenga@gmail.com"];
  
  // Prefer explicit Gmail credentials over service account env variables
  let user = process.env.GMAIL_USER;
  if (!user && process.env.SMTP_USER && !process.env.SMTP_USER.includes("gserviceaccount.com")) {
    user = process.env.SMTP_USER;
  }
  if (!user) {
    user = process.env.GMAIL_USER || process.env.SMTP_USER;
  }

  let rawPass = process.env.GMAIL_APP_PASSWORD;
  if (!rawPass && process.env.SMTP_PASS && !process.env.SMTP_PASS.includes("BEGIN PRIVATE KEY")) {
    rawPass = process.env.SMTP_PASS;
  }
  if (!rawPass) {
    rawPass = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS;
  }

  const cleanPass = rawPass ? rawPass.replace(/\s+/g, "") : "";
  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);

  const emailBodyHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
      <h2 style="color: #2d3748; border-bottom: 2px solid #edf2f7; padding-bottom: 12px; margin-top: 0;">Nuwe RSVP Ontvang 💍</h2>
      <p style="color: #4a5568; font-size: 15px;">Hallo,</p>
      <p style="color: #4a5568; font-size: 15px;">Daar is 'n nuwe RSVP ingedien op die trou-webtuiste:</p>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 18px; margin-bottom: 18px;">
        <tr style="background-color: #f7fafc;"><td style="padding: 10px 12px; font-weight: bold; color: #2d3748; width: 40%; border-bottom: 1px solid #edf2f7;">Naam & Van:</td><td style="padding: 10px 12px; color: #2d3748; border-bottom: 1px solid #edf2f7;">${data.name}</td></tr>
        <tr><td style="padding: 10px 12px; font-weight: bold; color: #2d3748; border-bottom: 1px solid #edf2f7;">Maat se Naam:</td><td style="padding: 10px 12px; color: #2d3748; border-bottom: 1px solid #edf2f7;">${data.partnerName || 'Geen'}</td></tr>
        <tr style="background-color: #f7fafc;"><td style="padding: 10px 12px; font-weight: bold; color: #2d3748; border-bottom: 1px solid #edf2f7;">Selfoonnommer:</td><td style="padding: 10px 12px; color: #2d3748; border-bottom: 1px solid #edf2f7;">${data.cellphone}</td></tr>
        <tr><td style="padding: 10px 12px; font-weight: bold; color: #2d3748; border-bottom: 1px solid #edf2f7;">E-pos:</td><td style="padding: 10px 12px; color: #2d3748; border-bottom: 1px solid #edf2f7;">${data.email || 'Nie verskaf nie'}</td></tr>
        <tr style="background-color: #f7fafc;"><td style="padding: 10px 12px; font-weight: bold; color: #2d3748; border-bottom: 1px solid #edf2f7;">Hoofgereg Keuse:</td><td style="padding: 10px 12px; color: #2d3748; border-bottom: 1px solid #edf2f7;">${data.mainCourse || 'Geen keuse gespesifiseer nie'}</td></tr>
        <tr><td style="padding: 10px 12px; font-weight: bold; color: #2d3748;">Dieetvereistes:</td><td style="padding: 10px 12px; color: #2d3748;">${data.dietary || 'Geen'}</td></tr>
      </table>
      
      <p style="margin-top: 24px; font-size: 13px; color: #718096; border-top: 1px solid #edf2f7; padding-top: 12px;">Hierdie inligting is ook outomaties in die Google Sheet gestoor.</p>
    </div>
  `;

  if (user && cleanPass) {
    try {
      const transporter = smtpHost.includes("gmail")
        ? nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: user,
              pass: cleanPass,
            },
          })
        : nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465,
            auth: {
              user: user,
              pass: cleanPass,
            },
          });

      await transporter.sendMail({
        from: `"Lourens & Ané Troue" <${user}>`,
        to: recipients,
        subject: `Nuwe RSVP: ${data.name}`,
        html: emailBodyHtml,
      });

      console.log(`[RSVP Email] Successfully sent notification email to ${recipients.join(", ")}`);
    } catch (err: any) {
      console.error("[RSVP Email Error] Failed to send email via SMTP:", err?.message || err);
    }
  } else {
    console.log(`[RSVP Email Info] SMTP credentials not configured in environment.`);
    console.log(`[RSVP Email Details] Notification intended for ${recipients.join(", ")}:`, data);
  }
}

// Helper function to get target Google Sheet ID (overrides legacy sheet IDs)
function getSpreadsheetId(): string {
  const envId = process.env.GOOGLE_SHEET_ID;
  const legacyIds = [
    "1ab6Vxegpp9OluuudsixHLjJ8x0ScoCh1BcYWbfco0l8",
    "1bxb4-dZ-l4eh95BOgopABS540pSOd2pksmGz2kiz4o0"
  ];
  const targetId = "1-fLmwp_g9g4DlA3MdhRWgWCoGYY2vzNp6GTKVAknkFg";
  if (!envId || legacyIds.includes(envId)) {
    return targetId;
  }
  return envId;
}

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
      sheetId: getSpreadsheetId(),
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
    sheetId: getSpreadsheetId()
  });
});

// Test route for Google Sheets
app.get("/api/test-sheets", async (req, res) => {
  try {
    const sheets = getSheetsClient();
    const spreadsheetId = getSpreadsheetId();
    
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

// Export endpoint: returns full sheet data as JSON (token-protected)
app.get("/api/export-sheet", async (req, res) => {
  const token = req.query.token as string;
  if (token !== "elsbruilof-backup-2026") {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    const sheets = getSheetsClient();
    const spreadsheetId = getSpreadsheetId();
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "A:H",
    });
    const rows = response.data.values || [];
    res.json({ success: true, rows, exportedAt: new Date().toISOString() });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Helper to get Google Sheets client
function getSheetsClient() {
  let clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  if (clientEmail === "elsbruilof@gserviceaccount.com") {
    clientEmail = "elsbruilof-gserviceaccount-com@gen-lang-client-0770019064.iam.gserviceaccount.com";
  }
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;
  const sheetId = getSpreadsheetId();

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
  const { name, partnerName, cellphone, email, mainCourse, dietary } = req.body;

  if (!name || !cellphone) {
    return res.status(400).json({ error: "Naam en Selfoonnommer is verpligtend." });
  }

  // Normalize cellphone for duplicate checking (remove spaces and non-digits)
  const cleanCellphone = cellphone.toString().replace(/\D/g, "");
  const normalizedDigits = cleanCellphone.replace(/^0+/, "");

  try {
    const sheets = getSheetsClient();
    const spreadsheetId = getSpreadsheetId();

    // 1. Check for duplicates in Column A:D and read header row
    let rows: any[] = [];
    try {
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: "A1:Z",
      });
      rows = response.data.values || [];
    } catch (getErr: any) {
      console.warn("Could not read existing rows for duplicate check, proceeding with append:", getErr?.message);
    }

    const isDuplicate = rows.some((row) => {
      if (!row || !row[2]) return false;
      const cellVal = row[2].toString().replace(/\D/g, "").replace(/^0+/, "");
      return cellVal.length > 0 && normalizedDigits.length > 0 && cellVal === normalizedDigits;
    });

    if (isDuplicate) {
      return res.status(400).json({ error: "Dit lyk of jy reeds met hierdie nommer RSVP'd het!" });
    }

    // 2. Format row values (prepend ' to cellphone so Google Sheets treats it as text and keeps leading zero)
    const formattedPhone = cellphone.toString().trim().startsWith("'") ? cellphone : `'${cellphone.toString().trim()}`;
    const timestamp = new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" });
    const values: string[][] = [];

    // Check if the header row (Row 1) currently includes a "Boodskap" column
    const headerRow = rows[0] || [];
    const hasBoodskapHeader = headerRow.some((h: any) => h && h.toString().toLowerCase().includes("boodskap"));

    if (rows.length === 0) {
      values.push(["Naam & Van", "Maat se Naam", "Selfoonnommer", "E-pos", "Hoofgereg", "Dieetvereistes", "Datum Stempel"]);
      values.push([name, partnerName || "", formattedPhone, email || "", mainCourse || "", dietary || "", timestamp]);
    } else if (hasBoodskapHeader) {
      // If the sheet still has "Boodskap" in row 1, keep blank for Boodskap so Datum Stempel aligns under Column H
      values.push([name, partnerName || "", formattedPhone, email || "", mainCourse || "", dietary || "", "", timestamp]);
    } else {
      // Clean sheet without "Boodskap" column
      values.push([name, partnerName || "", formattedPhone, email || "", mainCourse || "", dietary || "", timestamp]);
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "A:H",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    });

    console.log(`[RSVP Success] Appended entry for ${name} (${cellphone})`);
    
    // Send email notification (awaited — must complete before response on Vercel serverless)
    try {
      await sendRsvpEmailNotification({
        name,
        partnerName,
        cellphone,
        email,
        mainCourse,
        dietary,
      });
    } catch (emailErr) {
      console.error("[RSVP Email Error] Async email dispatch error:", emailErr);
    }

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
