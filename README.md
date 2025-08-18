# 🌍 GLOF Sentinel – Early Warning System for Glacial Lake Outburst Floods

## 📖 Overview

GLOF Sentinel is a fullstack application designed to monitor glacial lakes, detect early flood risks, and alert registered users and NGOs in real-time.
It integrates weather APIs, geospatial lake datasets, and alerting mechanisms to provide early warnings for communities at risk.

---

## 🚀 Features

🔹 Real-time Monitoring – Fetches temperature & pressure data for lakes from OpenWeather API.

🔹 Risk Detection – Triggers alerts based on configurable thresholds.

🔹 User & NGO Alerts – Sends alerts to registered users and NGOs via email / CSV-based location matching.

🔹 Authentication – JWT-based secure login/signup for users.

🔹 Scalable Backend – Node.js + Express + MongoDB Atlas.

🔹 Frontend – React + Vite + Tailwind for a clean, responsive UI.

---

## 🛠️ Tech Stack

### Frontend

React (Vite)

Tailwind CSS

Axios

### Backend

Node.js + Express.js

MongoDB Atlas (Mongoose ORM)

JWT Authentication

CSV Parser for NGO datasets

OpenWeather API for weather updates

Node-cron for scheduled updates

### Deployment

Render (Backend)

Vercel (Frontend)

---

## 📂 Project Structure
```csharp
GLOF-Sentinel/
│── Updated Glof-Backend/        
│   ├── config/     
│   ├── controllers/     
│   ├── data/   
|   ├── middleware/
|   ├── models/
|   ├── routes/
|   ├── seed/
|   ├── services/
|   ├── .gitgnore
|   ├── package-lock.json
|   ├── package.json
│   └── server.js   # Entry point
│
│── Glof-Frontend/       
│   ├── src/
│   ├── public/
|   ├── .gitignore
|   ├── eslint.config.js
|   ├── data/
|   ├── index.html
|   ├── package-lock.json
|   ├── package.json
│   └── vite.config.js
│
│── README.md
```

---

## ⚡ Getting Started
### 🔧 Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file and add Environemental Variable, then run: 
```bash
npm run dev
```

### 🎨 Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

Frontend runs at `http://localhost:5173`
Backend runs at  `http://localhost:5000`

---

## 🔑 Environment Variables
Backend `.env` file should include:
```ini
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_secret_key
OPENWEATHER_API_KEY=your_api_key
ALERT_EMAIL=your-email-address-for-alerts
ALERT_EMAIL_PASS=app-specific-password
```

---

## 📡 API Endpoints (Backend)
### Auth

`POST /api/auth/register` → Register new user

`POST /api/auth/login` → Login & get token

### Lakes

`GET /api/lakes` → Get all monitored lakes

Alerts

`GET /api/alerts` → See all risk alerts

---

## 📊 Future Enhancements

🌐 Map-based visualization of lakes & risks

📱 Mobile-friendly app for communities

🔔 SMS/WhatsApp alert integration

🧠 AI-based flood prediction model

---

## 👨‍💻 Contributors

**Samrat Ghosh** – Backend Developer

**Sucharita Kumar** – Frontend Developer

