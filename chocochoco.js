import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

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
const firestore = getFirestore(app);
const Formulario_de_registro = document.getElementById("Formulario_de_registro");

Formulario_de_registro.addEventListener("submit", async function (event) {
  event.preventDefault();

  const correoInstitucional = document.getElementById("correoInstitucional").value;
  const contraseña = document.getElementById("contraseña").value;
  const edad = document.getElementById("edad").value;
  const curso = document.getElementById("curso").value;
  const nombre = document.getElementById("nombre").value;

  console.log("Datos del formulario:", { correoInstitucional, contraseña, edad, curso, nombre });

  try {
    const docRef = await addDoc(collection(firestore, "Registro"), {
      Correo: correoInstitucional,
      Contraseña: contraseña,
      Edad: edad,
      Curso: curso,
      Nombre: nombre
    });
    console.log("Documento escrito con ID: ", docRef.id);
    alert("Registro exitoso");
    Formulario_de_registro.reset();
  } catch (error) {
    console.error("Error al agregar datos", error);
  }
});

