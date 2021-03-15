// Consulta de API Character
getText();

async function getText() {
    const url = 'https://rickandmortyapi.com/api/character/';
    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            let info = data.results;
            return info.map(function(personaje) {
                if (personaje.status == 'Alive') {
                    statusChar = `<span class="badge bg-success">${personaje.status}</span>`;
                } else {
                    statusChar = `<span class="badge bg-danger">${personaje.status}</span>`;
                }
                const html = `
                <div class="col">
                    <div class="card card-hover">
                        <img src="${personaje.image}" class="card-img-top" style="object-fit: cover;" alt="${personaje.name}">
                        <div class="card-body">
                            <h5 class="card-title">${personaje.name} ${statusChar}</h5>
                            <p class="card-text">
                            <ul>
                            <li><strong class="text-info">Especie:</strong> ${personaje.species}</li>
                            <li><strong class="text-info">Genero:</strong> ${personaje.gender}</li>
                            </ul>
                            </p>
                                <a href="single-character.html?id=${personaje.id}" class="btn btn-primary btn-block">Ver más <i class="fas fa-long-arrow-alt-right"></i></a>
                        </div>
                    </div>
                </div>
                `;
                content.innerHTML += html;
            })
        })
        .catch(function(error) {
            console.log(error);
        });
}