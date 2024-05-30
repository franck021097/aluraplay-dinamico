import { conectaAPI } from "./conectaAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearVideo(evento){

    evento.preventDefault();
    
    const titulo = document.querySelector("[data-titulo]").value;
    const url = document.querySelector("[data-url]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    const descripcion = Math.floor(Math.random()*(9000)+1000);

    try{
        await conectaAPI.enviarVideo(titulo,descripcion,url,imagen);
        window.location.href ="../pages/envio-concluido.html";
    }catch(e){
        console.log(e);
        // formulario.replaceChildren();
        // formulario.classList.add("error__container");
        alert(`Error: ${e}`);
        // formulario.innerHTML = `<h2 class="message_error">Ups, algo salió mal. <br><br> Error: ${e}</h2>`;
    }
}


formulario.addEventListener("submit", evento => crearVideo(evento));