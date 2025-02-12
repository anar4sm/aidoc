# AI-Powered Healthcare Assistant (MERN + AI)

An AI-driven healthcare web app that helps users with **symptom checking, X-ray analysis, medical report insights, doctor recommendations, and online consultations.**

## 📌 Features
- **User Authentication** (JWT/Firebase)
- **Symptom Checker** (AI-based disease prediction)
- **X-ray Analysis** (AI-powered medical imaging)
- **Medical Report Analysis** (OCR + AI insights)
- **AI Health Chatbot** (GPT-based assistance)
- **Doctor Recommendation System** (AI-based doctor ranking)
- **Online Consultation** (Real-time chat & video calls with WebRTC/Twilio)
- **Voice-to-Text for Doctors** (Speech-to-text integration for medical notes)

---

## 🔧 Tech Stack & Tools
### **Frontend (React.js)**
- Framework: React.js (Next.js optional)
- Styling: Tailwind CSS, Material-UI
- State Management: Redux / Context API
- Forms & Validation: React Hook Form, Yup
- API Requests: Axios
- Authentication: Firebase Auth / JWT
- Video Calls: WebRTC / Twilio

### **Backend (Node.js + Express.js)**
- Server Framework: Express.js
- Authentication: JWT (JSON Web Token)
- AI Model Hosting: FastAPI / Flask (for Python-based AI models)
- Doctor Recommendation Engine: TensorFlow.js / Scikit-Learn
- Database: MongoDB (Mongoose ORM)
- Real-time Chat & Video: Socket.io / Twilio

### **AI & Machine Learning**
- Symptom Checker: TensorFlow.js / OpenAI's Med-PaLM 2
- Medical Report Analysis: OCR (Tesseract.js) + NLP (BioBERT)
- X-Ray Analysis: CheXNet, VinDr-CXR, DeepChest
- Doctor Recommendation: AI-based ranking system (SVM / Random Forest)
- Voice-to-Text: Whisper AI (OpenAI)

### **Cloud & Deployment**
- Frontend Hosting: Vercel / Netlify
- Backend Hosting: Render / AWS EC2 / DigitalOcean
- Database Hosting: MongoDB Atlas
- AI Model Deployment: Hugging Face Spaces / Google Cloud AI
- Storage for Reports/X-Rays: Firebase Storage / AWS S3

---

## 📂 Folder Structure
```
📦 ai-healthcare-assistant  
├── 📂 client (Frontend - React.js)  
│   ├── 📂 public  
│   ├── 📂 src  
│   │   ├── 📂 assets (Images, icons, styles)  
│   │   ├── 📂 components (Reusable UI components)  
│   │   ├── 📂 pages (Main pages - Home, Dashboard, etc.)  
│   │   ├── 📂 features (Redux/Context API state slices)  
│   │   ├── 📂 services (API calls with Axios)  
│   │   ├── 📂 hooks (Custom React hooks)  
│   │   ├── 📂 utils (Helper functions)  
│   │   ├── 📂 config (App configuration, constants)  
│   │   ├── 📜 App.js  
│   │   ├── 📜 index.js  
│   ├── 📜 package.json  
│   ├── 📜 tailwind.config.js  
│   ├── 📜 .env (Environment variables)  
│   ├── 📜 .gitignore  
│  
├── 📂 server (Backend - Node.js + Express.js)  
│   ├── 📂 config (Database & server configurations)  
│   ├── 📂 models (Mongoose schemas)  
│   ├── 📂 routes (Express routes for APIs)  
│   ├── 📂 controllers (Business logic for APIs)  
│   ├── 📂 middleware (Auth, error handling, etc.)  
│   ├── 📂 services (AI model integration, utilities)  
│   ├── 📂 utils (Helper functions)  
│   ├── 📜 index.js (Main Express app entry point)  
│   ├── 📜 package.json  
│   ├── 📜 .env  
│   ├── 📜 .gitignore  
│  
├── 📂 ai_models (AI & ML Models - Python)  
│   ├── 📂 symptom_checker (TensorFlow.js / Med-PaLM 2)  
│   ├── 📂 xray_analysis (CheXNet / VinDr-CXR)  
│   ├── 📂 report_analysis (OCR + BioBERT)  
│   ├── 📂 doctor_recommendation (Scikit-Learn)  
│   ├── 📂 speech_to_text (Whisper AI)  
│   ├── 📜 requirements.txt (Python dependencies)  
│  
├── 📂 database (MongoDB sample data, backups)  
│  
├── 📂 docs (Project documentation, API specs, user guides)  
│  
├── 📜 README.md (Project overview & setup instructions)  
├── 📜 .gitignore (Ignore unnecessary files)  

```

---

## 🚀 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/ai-healthcare-assistant.git
cd ai-healthcare-assistant
```

### **2️⃣ Install Frontend Dependencies**
```sh
cd client
npm install
```

### **3️⃣ Install Backend Dependencies**
```sh
cd ../server
npm install
```

### **4️⃣ Set Up Environment Variables**
Create a `.env` file inside `server/` and add:
```sh
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### **5️⃣ Run the Backend**
```sh
cd server
npm run dev
```
> The server should start on **http://localhost:5000**

### **6️⃣ Run the Frontend**
```sh
cd ../client
npm start
```
> The React app should open at **http://localhost:3000**

---

## 🌍 Deployment
### **Frontend Deployment (Vercel/Netlify)**
```sh
cd client
npm run build
```
Upload the `build/` folder to **Vercel** or **Netlify**.

### **Backend Deployment (Render/AWS/DigitalOcean)**
Use **Render** (recommended) or deploy to **AWS EC2 / DigitalOcean**.

```sh
git push origin main
```
Check the hosting platform for automatic deployment.

---

## 📌 Future Enhancements
✅ **Wearable Device Integration** – Sync health data from smartwatches
✅ **Medication Reminder System** – AI-powered prescription tracking
✅ **EHR System** – Secure patient medical history storage

---

## 🤝 Contributing
Contributions are welcome! Please **fork** the repository and submit a **pull request**.

---

## 📞 Support
For questions or support, contact:
📧 Email: your-email@example.com
📌 GitHub Issues: [Open an Issue](https://github.com/your-username/ai-healthcare-assistant/issues)

