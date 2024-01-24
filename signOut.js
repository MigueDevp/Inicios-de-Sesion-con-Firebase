import { ManageAccount } from './firebaseconect.js';

document.getElementById("cerrarSesionOut").addEventListener("submit", (event) => {
    event.preventDefault();
    
    const account = new ManageAccount();
    console.log("Cerrando la sesion");
    account.signOut();
  });

  

