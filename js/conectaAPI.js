import getData from '../api/getData';

async function listaVideos(){
    try{
        // const conexion = await fetch("http://localhost:3001/videos"
        const conexion = getData.handler();
        console.log(conexion);
        /*,{
        method:"GET",
        headers:{
        "Content-type":"application/json",
        "Permissions-Policy": "geolocation=(self `http://localhost:3001/videos`)"
        }
    }*/

        if(conexion.ok){
            const conexionConvertida=await conexion.json();
            console.log(conexionConvertida);
            return conexionConvertida;
        }else{
            throw conexion;
        }


        //res.setHeader('Permissions-Policy', 'ch-ua-form-factor');
        // let valorRetorno;
        // conexion.ok ? valorRetorno=conexionConvertida : valorRetorno=conexion;

        // console.log("la concexion dice: ");
        // console.log(conexion);
        // return valorRetorno;
    }catch(error){
        return error;
    }
        
    
}

async function enviarVideo(titulo,descripcion,url,imagen){
        const conexion= await fetch("http://localhost:3001/videos",{
        method:"POST",
        headers:{
            'Content-type':'application/json; charset=utf-8',
        },
        body:JSON.stringify({
            titulo: titulo,
            descripcion: `${descripcion} mil visualizaciones`,
            url: url,
            imagen: imagen
        })
        })

        if (!conexion.ok) throw ("Falló la conexión.");

        const conexionConvertida=await conexion.json();
        return conexionConvertida;
}

async function buscarVideos(palabraClave){
    try{
        const conexion = await fetch(`http://localhost:3001/videos?q=${palabraClave}`);

        if (!conexion.ok) throw conexion;
        const conexionConvertida=await conexion.json();
        return conexionConvertida;
    }catch(error){
        return error;
    }

}

export const conectaAPI={
    listaVideos,enviarVideo,buscarVideos
}