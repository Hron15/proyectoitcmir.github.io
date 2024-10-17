import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-storage.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyAL9kYWhktwpOLrAIryfKOU3dVZWl-VWkE",
  authDomain: "proyecto-mir-db203.firebaseapp.com",
  projectId: "proyecto-mir-db203",
  storageBucket: "proyecto-mir-db203.appspot.com",
  messagingSenderId: "1013415756822",
  appId: "1:1013415756822:web:6ff4fcf3d9dc0eb7afe137",
  measurementId: "G-GVSMEZW4FK"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { db, storage, analytics, auth };

console.log("Conexión a Firebase establecida correctamente.");
