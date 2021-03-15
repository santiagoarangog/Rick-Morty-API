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
            const htmlNav = `<ol class="py-1 my-2 breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">${data.name}</li>
                            </ol>`;
            document.querySelector('#breadcrumb').innerHTML += htmlNav;
            document.querySelector(".product-name").append(data.name);
            const htmlProduc = `
                    <div class="product-gallery-preview-item active" id="first"><img src="${data.image}" style="object-fit: cover;" alt="Product preview"></div>
                    <div class="product-gallery-preview-item" id="second"><img src="assets/static/images/7456f078134b703579cbcdc7d5b328dc.jpg" style="object-fit: cover;" alt="Product preview"></div>
                    <div class="product-gallery-preview-item" id="three"><img src="assets/static/images/logo.png" style="object-fit: cover;" alt="Product preview"></div>
                    <div class="product-gallery-preview-item" id="four"><img src="assets/static/images/cubes-bg.jpg" style="object-fit: cover;" alt="Product preview"></div>
                `;
            document.querySelector(".product-gallery-preview").innerHTML += htmlProduc;
            const thumbnail = ` 
                    <a class="product-gallery-thumblist-item bg-size-cover active" href="#first" style="background-image: url(${data.image});object-fit: cover;"></a>
                    <a class="product-gallery-thumblist-item bg-size-cover" href="#second" style="background-image: url(assets/static/images/7456f078134b703579cbcdc7d5b328dc.jpg); object-fit: cover;"></a>
                    <a class="product-gallery-thumblist-item bg-size-cover" href="#three" style="background-image: url(assets/static/images/logo.png); object-fit: cover;"></a>
                    <a class="product-gallery-thumblist-item bg-size-cover" href="#four" style="background-image: url(assets/static/images/cubes-bg.jpg); object-fit: cover;"></a>
                `;
            document.querySelector(".product-gallery-thumblist").innerHTML += thumbnail;
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
            initialize();
        })
        .catch(function(error) {
            console.log(error);
        });
}


function initialize() {
    var o = document.querySelectorAll(".product-gallery");
    if (o.length)
        for (var e = 0; e < o.length; e++) ! function(a) {
            for (var r = o[a].querySelectorAll(".product-gallery-thumblist-item"), n = o[a].querySelectorAll(".product-gallery-preview-item"), e = 0; e < r.length; e++) r[e].addEventListener("click", t);

            function t(e) {
                e.preventDefault();
                for (var t = 0; t < r.length; t++) n[t].classList.remove("active"), r[t].classList.remove("active");
                this.classList.add("active"), o[a].querySelector(this.getAttribute("href")).classList.add("active")
            }
        }(e)
};