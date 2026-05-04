# Veritas AI - Misinformation Analyzer

A full-stack app that analyzes text, URLs, and uploaded files for potential misinformation.

- **Frontend:** React + Vite + Tailwind CSS
- **Backend:** Node.js + Express
- **AI provider:** OpenRouter-compatible API key
- **Storage:** MongoDB (optional; supports in-memory mode)

## Features

- Analyze plain text content
- Analyze article/webpage URLs
- Upload `.txt` and `.pdf` files for analysis
- Verdict output with confidence score and reasons
- Suspicious words and suggested sources in results
- Recent analysis history feed from backend

## Project Structure

```text
VeritasAI/
  src/                    # React frontend
  server/
    src/                  # Express backend
    .env                  # Backend environment variables
  package.json            # Frontend scripts (also proxies backend start script)
```

## Prerequisites

- Node.js 18+ (recommended)
- npm 9+
- MongoDB (optional if `SKIP_DB=true`)

## Installation

From the project root:

```powershell
cd "C:\Users\cktha\OneDrive\Desktop\VeritasAI (2)\VeritasAI"
npm install
cd server
npm install
```

## Environment Setup

Backend env file is at `server/.env`.

Expected variables:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/misinformation_analyzer
OPENROUTER_API_KEY=your_openrouter_api_key
CORS_ORIGIN=http://localhost:5173
SKIP_DB=true
```

Notes:

- Set `SKIP_DB=true` to run without MongoDB (history kept in memory only).
- Set `SKIP_DB=false` and provide a valid `MONGODB_URI` for persistent history.

## Run the App

Open **two terminals**.

### Terminal 1 - Frontend

From root:

```powershell
cd "C:\Users\cktha\OneDrive\Desktop\VeritasAI (2)\VeritasAI"
npm run dev
```

Frontend runs on `http://localhost:5173` (default Vite port).

### Terminal 2 - Backend

Option A (from root):

```powershell
cd "C:\Users\cktha\OneDrive\Desktop\VeritasAI (2)\VeritasAI"
npm run dev:server
```

Option B (from `server` folder):

```powershell
cd "C:\Users\cktha\OneDrive\Desktop\VeritasAI (2)\VeritasAI\server"
npm run dev
```

Backend runs on `http://localhost:5000`.

## Available Scripts

### Root (`package.json`)

- `npm run dev` - start frontend (Vite)
- `npm run dev:server` - start backend from root (`--prefix server`)
- `npm run build` - build frontend for production
- `npm run preview` - preview built frontend

### Server (`server/package.json`)

- `npm run dev` - start backend
- `npm run dev:watch` - start backend with Node watch mode
- `npm start` - start backend

## API Endpoints

Base URL: `http://localhost:5000`

- `GET /` - API info
- `GET /health` - health check
- `POST /analyze` - analyze text
- `POST /analyze-url` - analyze URL content
- `POST /upload` - upload file (multipart field name: `file`)
- `GET /history` - fetch recent analysis history

## Common Issues

### `npm error Missing script: "dev:server"`

You are likely in the wrong folder. `dev:server` exists only in the root `package.json`.

Use:

```powershell
cd "C:\Users\cktha\OneDrive\Desktop\VeritasAI (2)\VeritasAI"
npm run dev:server
```

If you are already inside `server`, use:

```powershell
npm run dev
```

### CORS errors in browser

- Make sure backend `CORS_ORIGIN` matches your frontend URL (usually `http://localhost:5173`).

### MongoDB connection errors

- Run MongoDB locally, or set `SKIP_DB=true` for in-memory mode.

## Security Note

Do not commit real API keys in source control. If a key was exposed, rotate it in your provider dashboard and replace it in `server/.env`.
