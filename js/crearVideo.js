import { conectaAPI } from "./conectaAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearVideo(evento){

    evento.preventDefault();
    
    const titulo = document.querySelector("[data-titulo]").value;
    const url = document.querySelector("[data-url]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    const descripcion = Math.floor(Math.random()*(9000)+1000);
    await conectaAPI.enviarVideo(titulo,descripcion,url,imagen);

    window.location.href ="../pages/envio-concluido.html";
    
}


formulario.addEventListener("submit", evento => crearVideo(evento));