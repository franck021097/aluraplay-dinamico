
    const url = "http://localhost:3001/videos";
    const videosContenedor = document.querySelector(".videos__container");


    fetch(url)
.then(response => response.json())
.then((data) => {
    data.forEach(element => {
        videosContenedor.innerHTML += `<li class="videos__item">
        <iframe width="100%" height="72%" src="${element.url}"
            title="${element.titulo}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <div class="descripcion-video">
            <img src="${element.imagem}" alt="logo canal alura">
            <h3>${element.titulo}</h3>
            <p>${element.descripcion}</p>
        </div>
    </li>`;
    });
})
.catch(error => console.log(error));