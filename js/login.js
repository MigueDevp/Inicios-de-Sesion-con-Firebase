
import { ManageAccount } from './firebaseconect.js';

document.getElementById("formulario-sesion").addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
    console.log(email,password);
  const account = new ManageAccount();
  account.authenticate(email, password);
  console.log("autenticando...")
  
});

console.log('Formulario de Inicio de Sesión');