# Vercel Deployment Notes

**Status:** WORKING
**Features:** React Frontend (Vite) + Express Backend (Serverless) + Google Sheets API (RSVP)

This file documents the exact configuration required to make this application work successfully on Vercel. Do not alter these core configurations if deploying to Vercel.

## 1. Vercel Configuration (`vercel.json`)
We use standard rewrites to direct API traffic to the serverless function and all other traffic to the React SPA.
```json
{
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "/api/index.ts"
    },
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## 2. Serverless Entry Point (`api/index.ts`)
Vercel requires a specific entry point in the `/api` directory. It must import using the `.js` extension even though the source is `.ts`.
```typescript
import app from "../server.js";

export default app;
```

## 3. Backend Server (`server.ts`)
Critical rules for the Express server to work as a Vercel Serverless Function:
* **NO Top-Level Await:** Do not use `await` at the top level of the file (e.g., for loading `dotenv`). It will cause a `FUNCTION_INVOCATION_FAILED` (500) error on boot.
* **Lazy Initialization:** External connections (like Google Sheets) should be initialized *inside* the route handlers, not at the top level.
* **Export the App:** The file must end with `export default app;`.
* **Conditional Start:** The server must only call `app.listen()` if it is NOT running in Vercel.
```typescript
// Export the app for Vercel
export default app;

// Only start the server if we're not running as a Vercel function
if (!process.env.VERCEL) {
  startServer();
}
```

## 4. Local Development (`package.json`)
Because we removed `dotenv` from the code to satisfy Vercel, local development must load environment variables via the Node CLI.
```json
"scripts": {
  "dev": "tsx --env-file=.env server.ts"
}
```

## 5. Frontend API Calls
Frontend fetches must use relative paths so they work locally and on Vercel seamlessly.
```typescript
// Correct
fetch('/api/rsvp', { ... })

// Incorrect (Will break on Vercel)
fetch('http://localhost:3000/api/rsvp', { ... })
```

## Environment Variables Required in Vercel
* `GOOGLE_CLIENT_EMAIL`
* `GOOGLE_PRIVATE_KEY` (Can be pasted exactly as it appears in the JSON file)
* `GOOGLE_SHEET_ID`
Trigger redeploy Tue Apr 28 12:54:09 AM SAST 2026
