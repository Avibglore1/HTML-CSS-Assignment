const button = document.getElementById("generate");
const container = document.getElementById("pokeman-container");

button.addEventListener("click", generatePokemon)

async function generatePokemon(){
    const count = document.getElementById("count").value;
    const type = document.getElementById("type").value;

    container.innerHTML="";

    for(let i=1;i<=count;i++){
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await res.json();
        createCard(data);
    }
}

function createCard(pokeman){
    const card = document.createElement("div");
    card.classList.add("card");

    const name = pokeman.name;
    const imageLink = pokeman.sprites.front_default;

    card.innerHTML = `
    <img src="${imageLink}" alt="${name}">
    <h3>${name.toUpperCase()}</h3>
    `
    container.appendChild(card);
}