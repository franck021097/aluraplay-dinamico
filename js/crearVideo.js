import { conectaAPI } from "./conectaAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearVideo(evento){

    evento.preventDefault();
    
    const titulo = document.querySelector("[data-titulo]").value;
    const url = document.querySelector("[data-url]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    const descripcion = Math.floor(Math.random()*(9000)+1000);
    const respuesta = await conectaAPI.enviarVideo(titulo,descripcion,url,imagen);

    try{
        
        if(respuesta.ok){
            window.location.href ="../pages/envio-concluido.html";
        }else{
            throw respuesta;
        }
    }catch(e){
        console.log(e.status);
        formulario.innerHTML = `<h2 class="message_error">Ups, algo salió mal. <br><br> Error: ${e}</h2>`;
    }
}


formulario.addEventListener("submit", evento => crearVideo(evento));