const pokemonName = document.getElementById("pokemon-name");
const pokemonID = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const spriteImage = document.getElementById("sprite");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

const searchPokemon = async () => {
  try {
    const pokemonNameOrId = searchInput.value.toLowerCase();
    const response = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`
    );
    const data = await response.json();

    pokemonName.innerHTML = data.name;
    pokemonID.innerHTML = data.id;
    weight.innerHTML = `Weight: ${data.weight}`;
    height.innerHTML = `Height: ${data.height}`;
    spriteImage.src = data.sprites.front_default;
    types.innerHTML = data.types
      .map(
        (obj) => `<span class="type ${obj.type.name}">${obj.type.name}</span>`
      )
      .join("");
    hp.innerHTML = data.stats[0].base_stat;
    attack.innerHTML = data.stats[1].base_stat;
    defense.innerHTML = data.stats[2].base_stat;
    specialAttack.innerHTML = data.stats[3].base_stat;
    specialDefense.innerHTML = data.stats[4].base_stat;
    speed.innerHTML = data.stats[5].base_stat;
  } catch (error) {
    alert("Pokémon not found");
  }
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchPokemon();
});
