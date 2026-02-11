const produit = JSON.parse(localStorage.getItem("produit"));
const zone = document.getElementById("produit");

if (produit) {
    zone.innerHTML = `
        <div class="card">
            <h2>${produit.nom}</h2>
            <p class="price">${produit.prix}</p>
            <p>${produit.description}</p>
        </div>
    `;
}