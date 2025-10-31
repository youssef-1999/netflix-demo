# 🎥 Netflix Clone (React + Vite + Firebase)

A fully responsive **Netflix Clone** built using **React**, **Vite**, **Firebase**, and **Bootstrap** — featuring authentication, movie browsing, and responsive UI inspired by Netflix.

---

## 🚀 Live Demo

👉 [View the Demo](https://netflix-demo.vercel.app)  
*(Hosted on Vercel)*

---



## 🧠 Features

✅ User Authentication (Firebase)  
✅ Browse Popular Movies & TV Shows  
✅ Responsive UI with Bootstrap  
✅ Movie Banners & Dynamic Backgrounds  
✅ Watch Trailer Links  
✅ React Router for Navigation  
✅ Toast Notifications  
=
---

## 🛠️ Tech Stack

| Technology | Description |
|-------------|-------------|
| ⚛️ **React 19** | Frontend framework |
| ⚡ **Vite** | Development & build tool |
| 🔥 **Firebase 12** | Authentication & Hosting |
| 💅 **Bootstrap 5** | Responsive layout |
| 🎨 **React Icons** | UI icons |
| 🪶 **React Router v7** | Client-side routing |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/youssef-1999/netflix-demo.git
cd netflix-demo
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Configure Firebase
Create a Firebase project in Firebase Console

Enable Email/Password Authentication

Copy your Firebase config and paste it into your project’s firebase.js file.

Example:

js
Copy code
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

export const app = initializeApp(firebaseConfig);
4️⃣ Run the project locally
bash
Copy code
npm run dev
App runs at 👉 http://localhost:5173

5️⃣ Build for production
bash
Copy code
npm run build
🧩 Folder Structure
bash
Copy code
src/
 ├── assets/           # Images, banners
 ├── Components/       # Reusable components (Navbar, Footer, etc.)
 ├── Pages/            # Main pages (Home, Login, Browse)
 ├── firebase.js       # Firebase configuration
 ├── App.jsx           # Root app
 └── main.jsx          # Entry point
🌐 Deployment
This project is deployed on Vercel.

To deploy manually:

bash
Copy code
npm run build
vercel deploy
🧑‍💻 Author
Youssef Abdelbaky
💼 Portfolio
🐙 GitHub
✉️ LinkedIn

🪄 License
This project is licensed under the MIT License — feel free to use and modify.

⭐ If you like this project, don’t forget to star the repo!

css
Copy code

---

Would you like me to add a **GIF preview** (like a short demo animation) at the top of the README too?  
I can show you exactly how to embed it from your `assets` folder or from a link (Vercel-hosted).
