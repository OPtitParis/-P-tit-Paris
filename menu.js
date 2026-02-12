const plats = [
    {
        nom: "Lahmacun classique",
        prix: "4€",
        description: "Viande hachée de bœuf, poivron, oignon, tomate, salade et citron."
    },
    {
        nom: "Pidé viande hachée",
        prix: "11€",
        description: "Pidé garni de viande hachée de bœuf et légumes."
    },
    {
        nom: "Pidé végétarien",
        prix: "10€",
        description: "Pidé aux légumes frais et fromage."
    },
    {
        nom: "Pidé fromage",
        prix: "12€",
        description: "Fromage fondant sur pâte maison."
    },
    {
        nom: "Pidé sucuk",
        prix: "12€",
        description: "Mozzarella, sucuk (saucisson turc) et œuf."
    },
    {
        nom: "Pidé agneau",
        prix: "12€",
        description: "Agneau tendre et épices orientales."
    }
];

const cocktails = [
    {
        nom: "Mojito",
        prix: "7€",
        description: "Rhum, menthe fraîche, citron vert, sucre et eau pétillante."
    },
    {
        nom: "Cuba Libre",
        prix: "6,5€",
        description: "Rhum, cola et citron vert."
    },
    {
        nom: "Gin Tonic",
        prix: "6,5€",
        description: "Gin premium et tonic."
    },
    {
        nom: "Spritz",
        prix: "7,5€",
        description: "Apérol, prosecco et eau pétillante."
    },
    {
        nom: "Margarita",
        prix: "6,5€",
        description: "Tequila, triple sec et citron vert."
    }
];

function afficherMenu(liste, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    liste.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>${item.nom}</h3>
            <p class="price">${item.prix}</p>
        `;

        card.onclick = () => {
            localStorage.setItem("produit", JSON.stringify(item));
            window.location.href = "produit.html";
        };

        container.appendChild(card);
    });

}
