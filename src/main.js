import {sortData, filterNames} from "./data.js";
import data from './data/pokemon/pokemon.js';



const pkmnDataList = data.pokemon; //pega o banco de dados

const pkmCards = document.getElementById("pokemonList"); //pega o espaço onde os cards serão cridos no


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
                  <p class="pokemonRarity"> Rarity: ${pokemon.pokemonRarity} </p>
                  <p class="specialAttack"> Resistance: ${pokemon.resistant} </p>
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
});


// filtrar de a-z
const alfabeticOrder = document.getElementById("order-by");
alfabeticOrder.addEventListener("change", function () {
  const orderValue = alfabeticOrder.value;
  updatePokemonList(sortData(data.pokemon, "name", orderValue));
  
});
