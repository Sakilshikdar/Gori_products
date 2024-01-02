
const getparanum = () => {
  const param = new URLSearchParams(window.location.search).get("card_id");
  fetch(`https://fakestoreapi.com/products/${param}`)
    .then((res) => res.json())
    .then((data) => {
      displayDectorDetails(data);
    });




  const displayDectorDetails = (product) => {
    const parent = document.getElementById("doctor-details");
    const div = document.createElement("div");
    div.classList.add("doc-details-container");
    div.innerHTML = `
    <div class="card shadow h-100">
                  <div class="ratio ratio-16x9">
                    <img
                      src=${product.image}
                      class=""
                      loading="lazy"
                      alt="..."
                    />
                  </div>
                  <div class="card-body p-3 p-xl-5">
                    <h3 class="card-title h5">Title: ${product.title}</h3>
                    <h3 class="card-title h5">Price: ${product.price}</h3>
                    <h3 class="card-title h5">Category: ${product.category}</h3>
                    <p class="card-text">Description: 
                      ${product.description.slice(0, 140)}
                    </p>
                    <a href="#" class="btn btn-primary">Buy</a>
                  </div>
                </div>
        `;
    parent.appendChild(div)
  }

};


getparanum();
displayDectorDetails()