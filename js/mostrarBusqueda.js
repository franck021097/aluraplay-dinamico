import { conectaAPI } from "./conectaAPI.js";
import construyeCard from "./mostrarVideos.js";

const lista = document.querySelector("[data-lista]");


async function listaVideosBusqueda(evento){

    // evita que pa pagina se recargue
    evento.preventDefault();


    let palabraClave = document.querySelector(".buscar__input").value;
    const listaAPI = await conectaAPI.buscarVideos(palabraClave);
    lista.replaceChildren();
    // console.log(listaAPI);
    try{
        if(listaAPI.length == 0){
            lista.classList.add("texto__response__container");
            lista.innerHTML = `<h2 class="message_error">No hay coincidencias con: "${palabraClave}"</h2>`;
        }else if(listaAPI.length > 0){
            lista.classList.remove("texto__response__container");
            listaAPI.forEach(element => lista.appendChild(construyeCard(element.titulo,element.descripcion,element.url,element.imagen)));
            
        }else{
            throw listaAPI;
        } 
        
    }catch(error){
        // console.log("error.status");
        // console.log(error.status);
        lista.classList.add("error__container");
        lista.innerHTML = `<h2 class="message_error">Ups, algo salió mal. <br><br> Error: ${error.status}</h2>`;
    }
}


const botonBuscar = document.querySelector(".buscar__boton");

botonBuscar.addEventListener("click",evento => {
    listaVideosBusqueda(evento)
});