import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDWuVoTTgp_Rzux_7BKHdAQF2O4fro98FE",
  authDomain: "web40-112bd.firebaseapp.com",
  databaseURL: "https://web40-112bd-default-rtdb.firebaseio.com",
  projectId: "web40-112bd",
  storageBucket: "web40-112bd.appspot.com",
  messagingSenderId: "116849249632",
  appId: "1:116849249632:web:d15faed4f559372cd46205",
  measurementId: "G-3H02G609EQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export class ManageAccount {
    register(email, password) {
        console.log("Registrando usuario...", email, password); 
        createUserWithEmailAndPassword(auth, email, password)
          .then((_) => {
            window.location.href = "login.html";
            console.log(email, password);
            alert("Registro exitoso. Serás redirigido a la página de inicio de sesión.");
          })
          .catch((error) => {
            console.error(error.message);
            alert("Error al registrar: " + error.message);
          });
      }

  authenticate(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((_) => {
        window.location.href = "lobby.html";
        // Mostrar alerta de inicio de sesión exitoso
        alert("Has iniciado sesión correctamente. Serás redirigido a la página principal.");
      })
      .catch((error) => {
        console.error(error.message);
                // Mostrar alerta de error de inicio de sesión
                alert("Error al iniciar sesión: " + error.message);
      });
  }

  signOut() {
    signOut(auth)
      .then((_) => {
        window.location.href = "login.html";
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  
}



