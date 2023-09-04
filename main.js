import {sortData, filterNames, filterByType, computerType} from "./data.js";
import data from './data/pokemon/pokemon.js';



const pkmnDataList = data.pokemon; //pega o banco de dados

const pkmCards = document.getElementById("pokemonList"); //pega o espaço onde os cards serão cridos no

const htmlStatistic = document.getElementById("statistics");

// PARA PRINTAR O CONTEUDO

function updatePokemonList(filteredPokemons) {
  pkmCards.innerHTML='';
  filteredPokemons.forEach((pokemon) => {     // da para usar tanto o .map / forEach


    pkmCards.innerHTML += `
            <div class="flip-container">
              <div class="flipper">
                <div class="div-cards front">
                  <img class="pokemonImage" src="${pokemon.img}" alt="Pokemon image"></img>
                <div class="name-type">
                  <p class="name"> ${pokemon.name.toUpperCase()} </p>
                  <p class="type"> Type: ${pokemon.type} </p>
                </div>
                </div>

                <div  class="div-cards back">
                <div class="rarity-resistance">
                <p class="pokemonRarity"> Rarity: ${pokemon.pokemonRarity} </p>
                  <p class="resistance"> Resistance: ${pokemon.resistant} </p>
                </div>
                </div>
              </div>
            </div>
            `;
  });

}

updatePokemonList(pkmnDataList);



// Filtrar por nome

const searchPersonagem = document.getElementById("inputPokemon");
searchPersonagem.addEventListener("input", (event) => {
  const nomePersonagem = event.target.value;
  const buscarPersonagem = filterNames(data.pokemon, nomePersonagem);
  updatePokemonList(buscarPersonagem);
  htmlStatistic.innerHTML = `Here you are gonna find 251 Pokemons`

});


// filtrar de a-z
const alfabeticOrder = document.getElementById("order-by");
alfabeticOrder.addEventListener("change", function () {
  const orderValue = alfabeticOrder.value;
  updatePokemonList(sortData(data.pokemon, "name", orderValue));

  htmlStatistic.innerHTML = `Here you are gonna find 251 Pokemons`
});
// filtrar por tipos

const typeInput = document.getElementById("filter-types");
typeInput.addEventListener("change", () => {
  const selectedType = typeInput.value.toLowerCase();
  const filteredPokemons = filterByType(selectedType, data.pokemon);
  updatePokemonList(filteredPokemons)

  // estatistica
  const typePorcentage = computerType(filteredPokemons, data.pokemon.length);
  htmlStatistic.innerHTML = `
    There are ${filteredPokemons.length} Pokémon of the selected Type, which is equivalent to ${typePorcentage}%
    of all the 251 Pokémon.
  `;


})




