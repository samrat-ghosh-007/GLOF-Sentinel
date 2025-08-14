# 🌊 GLOF Early Warning System – Backend

This is the backend for the **Glacial Lake Outburst Flood (GLOF) Early Warning System**, built for the **Zeros Arena Hackathon**.

It handles **data storage**, **alert logic**, and **API endpoints** for the system.  

Frontend integration will be added in the next development phase.  

---

## 📌 Features (Current Progress – Backend MVP)
- 🌐 REST API with Express.js  
- 🗄 MongoDB for data storage (Atlas supported)  
- 🔑 JWT-based authentication  
- 📧 Email alerts to registered contacts when risk is detected  
- 🔍 API endpoints for testing with Postman  
- 📦 Environment variables for secure configuration  

---

## 🛠 Tech Stack
- **Node.js** – Runtime environment  
- **Express.js** – Web framework  
- **MongoDB Atlas** – Cloud database  
- **Mongoose** – ODM for MongoDB  
- **Nodemailer** – For sending alert emails  
- **JWT** – Authentication  

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/samrat-ghosh-007/GLOF-Sentinel.git
cd GLOF-Sentinel
cd Glof-Backend
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Configure environment variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Fill in the values in `.env` with your actual credentials.
`.env.example:`
```ini
MONGO_URI=your-mongodb-connection-uri
JWT_SECRET=your-jwt-secret-key
ALERT_EMAIL=your-email-address-for-alerts
ALERT_EMAIL_PASS=app-specific-password
```
### 4️⃣ Run the backend locally
```bash
npm run dev
```
Backend will start on:
```arduino
http://localhost:5000
```

---

## 📡 API Documentation (MVP)

### Auth Routes

| Method | Endpoint              | Description                      | Auth Required  | Role |
|--------|-----------------------|----------------------------------|----------------|------|
| POST   | `/api/auth/register`  | Register a User                  | No             | ---- |
| POST   | `/api/auth/login`     | Login & get Token                | No             | ---- |
| DELETE | `/api/auth/verify`    | Verify JWT token & get user info | Yes            | Any  |

### Lake Management

| Method | Endpoint              | Description                      | Auth Required  | Role  |
|--------|-----------------------|----------------------------------|----------------|-------|
| GET    | `/api/lakes`          | Get all lake                     | Yes            | Any   |
| GET    | `/api/lakes/:id`      | Get lake by ID                   | Yes            | Any   |
| POST   | `/api/lakes`          | Create a new lake                | Yes            | Admin |
| PATCH  | `/api/lakes/:id`      | Update lake details              | Yes            | Admin |
| DELETE | `/api/lakes/:id`      | Delete lake                      | Yes            | Admin |

### Alert Routes

| Method | Endpoint              | Description                         | Auth Required  | Role  |
|--------|-----------------------|-------------------------------------|----------------|-------|
| GET    | `/api/alerts`         | Get all alerts                      | No             | ----- |
| POST   | `/api/alerts/tick`    | Simulate lake data & trigger alerts | Yes            | Admin |

---

## 📂 Project Structure
```bash
Glof-Backend/
│── config/    
│── controller/
│── middleware/
│── models/
│── routes/
│── utils/
│── .env
│── .env.example
│── .gitignore
│── app.js
│── package-lock.json
│── package.json
│── server.js
└── README.md
```

---

## 🚀 Current Status
✅ Backend MVP completed – API working on Postman

🛠 Frontend integration in progress – coming in next milestone

---


