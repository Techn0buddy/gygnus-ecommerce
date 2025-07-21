# 💎 Gygnus Jewelry E-Commerce

An elegant, full-stack e-commerce web application for showcasing and selling jewelry products. Built with **React + Vite + Tailwind CSS** for the frontend and **Node.js + Express + MongoDB** for the backend.

---

## 📁 Monorepo Structure

gygnus-ecommerce/
├── gygnus-backend/ # Express.js backend with MongoDB
├── gygnus-frontend/ # React + Vite + Tailwind frontend
├── README.md

---

## 🚀 Features

### 🛍️ E-Commerce Essentials
- Browse all jewelry products
- Product detail page with image, price, and description
- Responsive design for all devices

### 🤖 Jewelry Assistant (AI Chatbot)
- Built-in GPT-powered assistant for helping customers explore styles, designs, and recommendations
- Chat is collapsible for non-intrusive UX

### 🔧 Admin & Developer Tools
- Sample product seeding via MongoDB
- Fully structured backend API

### 🌐 Deployment Ready
- Backend deployed on **Render**
- Frontend deployed on **Vercel**

---

## ⚙️ Tech Stack

| Layer        | Technology                          |
|--------------|-------------------------------------|
| Frontend     | React, Vite, Tailwind CSS           |
| Backend      | Node.js, Express.js, MongoDB, Mongoose |
| AI Chatbot   | OpenAI API (GPT-3.5)                |
| Deployment   | Render (backend), Vercel (frontend) |

---

## 🔧 Setup Instructions (Local)

### 1️⃣ Clone the Repo
```bash
git clone https://github.com/Techn0buddy/gygnus-ecommerce.git
cd gygnus-ecommerce
```
### 2️⃣ Backend Setup
```bash
cd gygnus-backend
npm install
```

Create a .env file:

```env
MONGO_URI=your_mongo_uri
OPENAI_API_KEY=your_openai_key
PORT=5000
```

Start server:

```bash
node server.js
```

### 3️⃣ Frontend Setup
```bash
cd ../gygnus-frontend
npm install
```

Create .env for Vite:

```env
VITE_API_BASE_URL=http://localhost:5000
```
Start frontend:

```bash
npm run dev
```
---
## 🌍 Live Links
- 🔗 Frontend: https://gygnus-frontend.vercel.app

- 🔗 Backend API: https://gygnus-backend.onrender.com

## 🧪 Sample API Endpoints
- GET /api/products → List all products

- GET /api/products/:id → Get product by ID

- POST /api/chat → GPT-based chat assistant

## 🧠 AI Chat Demo Prompt
- "Suggest some jewelry options for a wedding look"

--- 

## 👤 Author
- Techn0buddy
    - 💼 GitHub: @Techn0buddy
---

## 📄 License
This project is licensed under the MIT License.