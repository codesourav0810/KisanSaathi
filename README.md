# KisanSaathi 🌱

KisanSaathi is a farmer-focused agricultural marketplace designed to help farmers list their crops, connect with buyers, and manage their agricultural listings through a simple and responsive interface.

The project is being developed as a full-stack application with a React frontend and a backend API.

## 🚧 Project Status

**Currently in development**

The frontend has been developed with the main farmer-facing pages and dashboard UI. Backend integration and database functionality will be added in the next stage.

## ✨ Features

### Farmer

* Farmer registration and login
* Responsive farmer dashboard
* View crop listings
* Add new crop listings
* View active and sold crops
* Crop quantity and asking price management
* Quality grade selection
* Crop photo upload and cover photo selection
* Listing summary and expected payout
* Responsive sidebar navigation
* Mobile-friendly interface

### Authentication

* Login and registration pages
* Role-based login structure for:

  * Farmer
  * Buyer
  * FPO
  * Admin

> Authentication is currently implemented with temporary frontend/dummy data and will be connected to the backend later.

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* React Router
* Tailwind CSS
* Lucide React

### Backend

Backend development is planned and will be integrated with the frontend through REST APIs.

### Database

Database integration will be added during backend development.

## 📁 Project Structure

```text
KisanSaathi/
│
├── src/
│   ├── components/
│   │   ├── farmer/
│   │   │   ├── FarmerHeader.jsx
│   │   │   ├── FarmerLayout.jsx
│   │   │   └── FarmerSidebar.jsx
│   │   │
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── Farmer/
│   │   │   ├── FarmerDashboard.jsx
│   │   │   ├── MyCrops.jsx
│   │   │   └── AddCrop.jsx
│   │   │
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── public/
├── package.json
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/codesourav0810/KisanSaathi.git
```

### 2. Navigate to the frontend

```bash
cd KisanSaathi/kisansathi-frontend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will then be available at the local development URL shown in the terminal.

## 👨‍🌾 Current Farmer Flow

```text
Login
  ↓
Farmer Dashboard
  ↓
My Crops
  ↓
Add New Crop
  ↓
Enter Crop Details
  ↓
Select Quality Grade
  ↓
Upload Photos
  ↓
Review Listing
  ↓
Create Listing
```

Currently, crop listings use temporary frontend data. The Create Listing action will later send the listing information to the backend API and store it in the database.

## 🔌 Planned Backend Integration

The frontend will eventually communicate with the backend through APIs such as:

```text
POST /api/crops
GET  /api/crops/my-listings
PUT  /api/crops/:id
DELETE /api/crops/:id
```

The exact API structure will be finalized during backend development.

## 📌 Future Plans

* Backend API integration
* Database integration
* Real authentication and authorization
* Persistent crop listings
* Buyer dashboard
* FPO dashboard
* Admin dashboard
* Crop marketplace
* Buyer-farmer communication
* Order management
* Notifications
* Market/mandi information
* Deployment

## 📄 License

This project is currently being developed as a project for learning and development purposes.
