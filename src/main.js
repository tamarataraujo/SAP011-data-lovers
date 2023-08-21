import {searchData} from './data.js';
import data from './data/pokemon/pokemon.js';


const pkmnDataList = data.pokemon; //pega o banco de dados

const pkmCards = document.getElementById("pokemonList"); //pega o espaço onde os cards serão cridos no


// PARA PRINTAR O CONTEUDO 

function updatePokemonList(filteredPokemons) {
  filteredPokemons.forEach((pokemon) => {
    
    
    pkmCards.innerHTML += `  
            <div class="flip-container">        
              <div class="flipper">
                <div class="div-cards front">
                  <img src="${pokemon.img}" alt="Pokemon image"></img>
                  <p class="name"> Nome: ${pokemon.name}  </p>
                  <p class="type"> Tipo: ${pokemon.type} </p>
                </div>

                <div  class="div-cards back"> 
                  <p class="pokemonRarity"> Raridade: ${pokemon.pokemonRarity} </p>
                  <p class="specialAttack"> Resistencia: ${pokemon.resistant} </p>
                </div>
              </div>
            </div>
            `;
  });

}

updatePokemonList(pkmnDataList);



// Filtrar por nome

const searchInput = document.getElementById('inputPokemon')
searchInput.addEventListener('keyup',(event) => {
  const valueInput = event.target.value.toLowerCase()
  const listFilter = searchData (valueInput,data.pokemon)
  updatePokemonList(listFilter)
})

















