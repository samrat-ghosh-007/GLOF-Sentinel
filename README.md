# 🌊 GLOF Sentinel Backend (MVP)

A backend service for Glacial Lake Outburst Flood (GLOF) Early Warning & Monitoring, built with Node.js, Express, and MongoDB.
This MVP collects lake data, integrates weather APIs, assesses risks, and exposes RESTful APIs for frontend applications.
It also alerts registered users and NGOs (from CSV database) based on their location when risk levels are high.

---

## 📌 Features 
-✅ RESTful API for lake monitoring and alerts

-✅ MongoDB models for lakes and users

-✅ NGO Alerting System → NGOs from CSV are matched by location and warned of potential GLOF threats

-✅ Periodic update of weather & lake data (via cron jobs)

-✅ Risk assessment logic (based on temperature, pressure)

-✅ Authentication with JWT (Register, Login)

-✅ Role-based access (Admin/User)

-✅ CSV-based initial dataset of Indian glacial lakes


---

## 🛠 Tech Stack
-Node.js + Express.js (Backend framework)

-MongoDB Atlas (Database)

-Mongoose (ODM)

-JWT Authentication

-Node-Cron (Scheduled updates)

-Axios (External API calls)

-CSV Parser (for NGO and lake dataset handling)

---

## 📂 Project Structure

```graphql
Updated Glof-Backend/
 ├── config/        # DB & environment setup
 ├── controllers/   # API logic
 ├── middleware/    # Auth middleware
 ├── models/        # MongoDB schemas
 ├── routes/        # API routes
 ├── services/      # External API handlers + NGO alert service
 ├── data/          # lakes.csv, ngos.csv (initial datasets)
 ├── seed/          # creating db collection from csv file
 ├── .env           # Environmental Variables
 ├── .gitignore     # files/folders which were not pushed 
 ├── server.js      # Entry point
 ├── package-lock.json
 ├── package.json
 └── README.md
```

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/samrat-ghosh-007/GLOF-Sentinel.git
cd GLOF-Sentinel
cd Updated Glof-Backend
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Configure environment variables
Create a .env file

Fill in the values in `.env` with your actual credentials.
`.env.example:`
```ini
MONGO_URI=your-mongodb-connection-uri
JWT_SECRET=your-jwt-secret-key
ALERT_EMAIL=your-email-address-for-alerts
ALERT_EMAIL_PASS=app-specific-password
OPENWEATHER_API_KEY=your-openweather-api-key
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

| Method | Endpoint              | Description                      | Auth Required  |
|--------|-----------------------|----------------------------------|----------------|
| POST   | `/api/auth/register`  | Register a User                  | No             |
| POST   | `/api/auth/login`     | Login & get Token                | No             |


### Lake Management

| Method | Endpoint              | Description                      | Auth Required  |
|--------|-----------------------|----------------------------------|----------------|
| GET    | `/api/lakes`          | Get all lake                     | Yes            |

### Alert Routes

| Method | Endpoint              | Description                         | Auth Required  | Role  |
|--------|-----------------------|-------------------------------------|----------------|-------|
| GET    | `/api/alerts`         | Get all alerts                      | No             | ----- |


---

## 🚀 Current Status
✅ Backend MVP completed – API working on Postman

🛠 Frontend integration in progress – coming in next milestone

---


