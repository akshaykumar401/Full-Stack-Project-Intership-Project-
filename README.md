# Full-Stack Internship Project

A modern, full-stack web application featuring a robust backend API and a responsive, dynamic frontend interface. This project is built as an internship task, demonstrating best practices in web development, authentication, and state management.

## 🚀 Tech Stack

### Frontend
- **React.js (v19)** - Modern UI library
- **Vite** - Next-generation frontend tooling for fast builds
- **Tailwind CSS (v4)** - Utility-first styling framework
- **Redux Toolkit** - Predictable state container
- **React Router DOM** - Declarative routing
- **Axios** - Promise-based HTTP client
- **Remix Icon** - High-quality icon set

### Backend
- **Node.js & Express.js** - Fast, unopinionated web framework
- **TypeScript** - Strongly typed programming language
- **MongoDB & Mongoose** - NoSQL database and ODM
- **JWT (JSON Web Tokens)** - Secure authentication
- **Cookie Parser & CORS** - Middleware for handling cookies and cross-origin requests

## ✨ Features
- **Modern User Interface:** Highly responsive and beautifully designed UI using Tailwind CSS.
- **Form Submissions:** Contact forms that interact with the RESTful API to store user data.
- **Admin Authentication:** Secure JWT-based login for administrators.
- **Admin Dashboard:** A protected route where admins can view all submitted messages and manage data.
- **Global Error Handling:** Structured API error responses and user-friendly UI notifications (toasts).
- **Redux State Management:** Centralized state handling for authentication and forms.

## 📁 Project Structure

```
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── db/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   ├── index.ts
│   │   ├── constants.ts
│   │   └── app.ts   
│   ├── .env
│   ├── .env.example
│   ├── package-lock.json
│   ├── .gitignore
│   ├── tsconfig.json      
│   └── package.json
│
├── Frontend/
│   ├── src/
│   │   ├── app/          
│   │   ├── assets/  
│   │   │    └── images/
│   │   ├── components/  
│   │   │    ├── authForms/
│   │   │    └── layouts/
│   │   ├── features/      
│   │   ├── pages/ 
│   │   ├── styles/        
│   │   ├── App.tsx        
│   │   └── main.tsx       
│   ├── .gitignore
│   ├── index.html
│   ├── package-lock.json
│   ├── tsconfig.json 
│   ├── vite.config.ts
│   └── package.json
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB instance (Local or Atlas)

### 1. Clone the repository
```bash
git clone https://github.com/akshaykumar401/Full-Stack-Project-Intership-Project-.git
cd Full-Stack-Project-Intership-Project-
```

### 2. Setup the Backend
```bash
cd Backend
npm install
```
Create a `.env` file in the `Backend` directory and add the following variables:
```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
CORS_ORIGIN=http://localhost:5173
ACCESS_TOKEN_SECRET=your_jwt_secret
ACCESS_TOKEN_EXPIRY=1d
USER_NAME=admin1,admin2
PASSWORD=adminpassword1,adminpassword2
```
Run the backend server:
```bash
npm run dev
```

### 3. Setup the Frontend
```bash
cd ../Frontend
npm install
```
Run the frontend development server:
```bash
npm run dev
```

## 🌐 API Endpoints

### Contact
- `POST /api/v1/contact/contact` - Submit a new contact form message

### Admin
- `POST /api/v1/admin/login` - Admin login (returns JWT token in cookies)
- `POST /api/v1/admin/logout` - Admin logout (clears cookies)
- `GET /api/v1/admin/contact-messages` - Fetch all contact messages (Protected)
- `GET /api/v1/admin/current-user` - Get the currently authenticated admin user (Protected)

## 📄 License
This project is licensed under the ISC License.
