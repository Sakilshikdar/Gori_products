const loadServices = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => displayService(data))
    .catch((err) => console.log(err));
};

const displayService = (products) => {
  //   console.log(services);
  products.forEach((product) => {
    const parent = document.getElementById("service-container");
    const div = document.createElement("div");
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
                    <a href="docDetails.html?card_id=${product.id}" class="btn btn-primary">Details</a>
                  </div>
                </div>
        `;
    parent.appendChild(div);
  });
};



const loadProducts = (search) => {
  document.getElementById("doctors").innerHTML = "";
  document.getElementById("spinner").style.display = "block";
  fetch(
    `https://fakestoreapi.com/products/category/${search}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.length > 0) {
        document.getElementById("spinner").style.display = "none";
        document.getElementById("nodata").style.display = "none";
        displyProductcat(data);
      } else {
        document.getElementById("doctors").innerHTML = "";
        document.getElementById("spinner").style.display = "none";
        document.getElementById("nodata").style.display = "block";
      }
    });
};

const displyProductcat = (products) => {
  products?.forEach((product) => {
    console.log(product);
    const parent = document.getElementById("doctors");
    const div = document.createElement("div");
    div.classList.add("doc-card");
    div.innerHTML = `
         <div class="card shadow h-100">
                  <div class="ratio ratio-16x9">
                    <img
                      src=${product.image}
                      class="card-img"
                      loading="lazy"
                      alt="..."
                    />
                  </div>
                  <div class="card-body p-3 p-xl-5">
                    <h3 class="card-title h5">${product.title}</h3>
                    <h3 class="card-title h5">${product.price}</h3>
                    <h3 class="card-title h5">${product.category}</h3>
                    <p class="card-text">
                      ${product.description.slice(0, 140)}
                    </p>
                    <a href="docDetails.html?card_id=${product.id}" class="btn btn-primary">Details</a>
                  </div>
                </div>
          `;

    parent.appendChild(div);
  });
};


const loadCat = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => {
        const parent = document.getElementById("drop-deg");
        const li = document.createElement("li");
        li.classList.add("dropdown-item");
        li.innerText = item;
        parent.appendChild(li);
        loadProducts('jewelery');
      });
    });
};



const handleSearch = () => {
  const value = document.getElementById("search").value;
  loadProducts(value);
};



//   Calling Functions

loadServices();
loadCat();
handleSearch();