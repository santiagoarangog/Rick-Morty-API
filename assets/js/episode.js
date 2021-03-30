// Consulta de API Character
getEpisodes();

async function getEpisodes() {
    const url = 'https://rickandmortyapi.com/api/episode';
    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            let info = data.results;
            return info.map(function(episodeInfo) {
                let html = `
                <div class="col">
                    <div class="card card-hover">
                        <img src="assets/static/images/episodes.jpg" class="card-img-top" style="object-fit: cover;" alt="${episodeInfo.name}">
                        <div class="card-body">
                            <h5 class="card-title">${episodeInfo.name}</h5>
                            <p class="card-text">
                            <ul>
                            <li><strong class="text-info">Episodio:</strong> ${episodeInfo.episode}</li>
                            <li><strong class="text-info">Fecha creacion:</strong> ${episodeInfo.air_date}</li>
                            </ul>
                            </p>
                                <a href="characther-episode.html?id=${episodeInfo.id}" class="btn btn-primary btn-block">Ver más <i class="fas fa-long-arrow-alt-right"></i></a>
                        </div>
                    </div>
                </div>
                `;
                contentEpisodes.innerHTML += html;
            })
        })
        .catch(function(error) {
            console.log(error);
        });
}