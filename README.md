# IMS (Inventory Management System)

> Developed and delivered by **Nerdshouse Technologies LLP**

---

## About

IMS is a React + Firebase based inventory and reorder planning application used to manage warehouses, SKUs, stock movement history, purchase orders, member access, and planning calculations for stock-out and replenishment timelines.

## Tech Stack

| Layer        | Technology                                  |
|--------------|---------------------------------------------|
| Frontend     | React, Vite, Tailwind CSS                  |
| Backend      | Node.js, Express                            |
| Database     | Firebase Firestore                          |
| Hosting      | Vercel (frontend), Node runtime (backend)   |
| Other        | Firebase Authentication, Firebase Admin SDK |

## Getting Started

### Prerequisites

- Node.js 20+ and npm 10+
- Firebase project with Firestore and Authentication enabled
- Service account JSON key for backend/admin scripts

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd <project-folder>

# Install dependencies
npm install
cd backend && npm install && cd ..
cd frontend && npm install && cd ..

# Set up environment
cp .env.example .env
# Fill in required values in .env
```

### Running Locally

```bash
# frontend app
npm run dev

# backend api (separate terminal)
cd backend && npm run dev
```

### Building for Production

```bash
# root frontend build
npm run build

# optional standalone frontend build
cd frontend && npm run build
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_API_URL` | Frontend API base URL | Yes |
| `VITE_DEV_API_PROXY_TARGET` | Dev proxy target for `/api` in Vite | No |
| `VITE_FIREBASE_API_KEY` | Firebase web API key | Yes |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase auth domain | Yes |
| `VITE_FIREBASE_PROJECT_ID` | Firebase project ID | Yes |
| `VITE_FIREBASE_APP_ID` | Firebase web app ID | Yes |
| `PORT` | Backend API port | Yes |
| `CORS_ORIGIN` | Allowed frontend origin for CORS | Yes |
| `FIREBASE_SERVICE_ACCOUNT_PATH` | Path to Firebase service-account JSON | Yes |

## Project Structure

```text
.
├── src/                     # Main frontend application (active)
├── backend/src/             # Express API routes, auth middleware, Firestore init
├── scripts/                 # One-time data seeding scripts
├── api/                     # Serverless-style members API helper
├── frontend/                # Additional frontend workspace (legacy/parallel)
├── firestore.rules          # Firestore security rules
├── firestore.indexes.json   # Firestore index definitions
├── vercel.json              # SPA rewrite rules for deployment
└── firebase.json            # Firebase rules/index mapping
```

## Deployment

- **Vercel**: `vercel.json` rewrites all routes to `index.html` for SPA routing.
- **Firebase Firestore**:
  - Deploy rules: `firebase deploy --only firestore:rules`
  - Deploy indexes: `firebase deploy --only firestore:indexes`
- **Backend**: deploy `backend/` to your Node host and provide required env vars from `.env.example`.

## Third-Party Services

| Service | Purpose | Setup Required |
|---------|---------|----------------|
| Firebase Authentication | User sign-in and access gating | Yes |
| Firebase Firestore | Inventory, SKU, PO, and history data | Yes |
| Vercel | Frontend hosting/deployment | Optional (if using Vercel) |

---

## Developed By

**Nerdshouse Technologies LLP**  
🌐 [nerdshouse.com](https://nerdshouse.com)  
📧 axit@nerdshouse.com

---

*© 2026 WhiteRock (Royal Enterprise). All rights reserved. Developed by Nerdshouse Technologies LLP.*
