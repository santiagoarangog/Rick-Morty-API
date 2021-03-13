getCharacters();

function getCharacters() {
    let query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var id = vars[i].split("=");
    }
    const url = `https://rickandmortyapi.com/api/character/${id[1]}`;
    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            let info = data.results;
            console.log(data);
            const htmlNav = `<ol class="py-1 my-2 breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">${data.name}</li>
                            </ol>`;
            breadcrumb.innerHTML += htmlNav;
            const html = `
                        <h1 class="mb-3 pb-4">${data.name}</h1>
                        <!-- Product gallery-->
                        <div class="product-gallery">
                            <div class="product-gallery-preview order-sm-2">
                                <div class="product-gallery-preview-item active" id="first"><img src="${data.image}" style="object-fit: cover;" alt="Product preview"></div>
                            </div>
                            <div class="product-gallery-thumblist order-sm-1" style='border-color:#0a66cc;'>
                                <a class="product-gallery-thumblist-item active" href="#first"><img src="${data.image}" style="object-fit: cover;" alt="Product thumb"></a>
                            </div>
                        </div>
                `;
            infoCharacter.innerHTML += html;
            const oterInfo = `<a class="d-inline-block text-decoration-none" href="#reviews" data-scroll>
                                <div class="py-4">
                                    <del class="text-muted me-2">$-- / --</del><span class="h4 mb-0">$-- / --</span>
                                </div>
                                <div class="fs-sm pb-1 mb-2"><span class="fw-medium text-heading">Choose color - </span><span class="ms-1" id="colorOptionText">Gray</span></div>
                                <div class="d-inline-block bg-light rounded px-3 mb-4">
                                    <div class="form-check form-option form-option-color form-check-inline mt-2">
                                        <input class="form-check-input" type="radio" name="color" id="gray" value="Gray" data-label="colorOptionText" checked>
                                        <label class="form-option-label rounded-circle" for="gray"><span class="form-option-color-indicator rounded-circle" style="background-color: #707175;"></span></label>
                                    </div>
                                    <div class="form-check form-option form-option-color form-check-inline mt-2">
                                        <input class="form-check-input" type="radio" name="color" id="blue" value="Blue" data-label="colorOptionText">
                                        <label class="form-option-label rounded-circle" for="blue"><span class="form-option-color-indicator rounded-circle" style="background-color: #0a66cc;"></span></label>
                                    </div>
                                    <div class="form-check form-option form-option-color form-check-inline mt-2">
                                        <input class="form-check-input" type="radio" name="color" id="brown" value="Brown" data-label="colorOptionText">
                                        <label class="form-option-label rounded-circle" for="brown"><span class="form-option-color-indicator rounded-circle" style="background-color: #987875;"></span></label>
                                    </div>
                                    <div class="form-check form-option form-option-color form-check-inline mt-2">
                                        <input class="form-check-input" type="radio" name="color" id="white" value="White" data-label="colorOptionText">
                                        <label class="form-option-label rounded-circle" for="white"><span class="form-option-color-indicator rounded-circle" style="background-color: #e8e6e2;"></span></label>
                                    </div>
                                    <div class="form-check form-option form-option-color form-check-inline mt-2">
                                        <input class="form-check-input" type="radio" name="color" id="purple" value="Purple" data-label="colorOptionText">
                                        <label class="form-option-label rounded-circle" for="purple"><span class="form-option-color-indicator rounded-circle" style="background-color: #846ba6;"></span></label>
                                    </div>
                                </div>
                                <div class="d-flex mt-4 mb-3">
                                    <input class="form-control me-3" type="number" style="width: 5rem;" min="1" value="1">
                                    <button class="btn btn-primary d-block w-100" type="button">Add to Cart</button>
                                </div>
                                <button class="btn btn-outline-secondary d-block w-100 mb-grid-gutter" type="button"><i class="far fa-heart"></i> Add to Wishlist</button>
                                <p class="fs-sm mb-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p><a class="fancy-link fs-sm"
                                    href="#more-info" data-scroll>Read more</a>
                                <hr class="my-4">
                                <ul class="list-unstyled fs-sm">
                                    <li><span class="text-heading fw-medium me-2">SKU:</span>${data.id} - ${data.name}</li>
                                    <li><span class="text-heading fw-medium me-2">Category:</span><a class="text-body text-decoration-none" href="#">${data.species}</a></li>
                                </ul>
                        </div>`;
            oterInfoCharacter.innerHTML += oterInfo;
        })
        .catch(function(error) {
            console.log(error);
        });
}