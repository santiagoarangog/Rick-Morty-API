// Consulta de API Character
getEpisodes();

async function getEpisodes() {
    let query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var id = vars[i].split("=");
    }
    const url = `https://rickandmortyapi.com/api/episode/${id[1]}`;
    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            let info = data.characters;
            return info.map(function(episodeInfo) {
                const urlCharacther = episodeInfo;
                fetch(urlCharacther)
                    .then((resp) => resp.json())
                    .then(function(data) {
                        let html = `
                        <div class="col">
                            <div class="card card-hover">
                                <img src="${data.image}" class="card-img-top" style="object-fit: cover;" alt="${data.name}">
                                <div class="card-body">
                                    <h5 class="card-title">${data.name}</h5>
                                    <p class="card-text">
                                    <ul>
                                    <li><strong class="text-info">Especie:</strong> ${data.species}</li>
                                    <li><strong class="text-info">Genero:</strong> ${data.gender}</li>
                                    </ul>
                                    </p>
                                        <a href="single-character.html?id=${data.id}" class="btn btn-primary btn-block">Ver más <i class="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                        `;
                        contentCharactherForEpisode.innerHTML += html;
                    })
            })
        })
        .catch(function(error) {
            console.log(error);
        });
}