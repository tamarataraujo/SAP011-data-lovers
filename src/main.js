import {callPokemon} from './data.js';
import data from './data/pokemon/pokemon.js';


const pkmnDataList = data.pokemon; //pega o banco de dados

const pkmCards = document.getElementById("pokemonList"); //pega o espaço onde os cards serão cridos no





// PARA PRINTAR O CONTEUDO 

function updatePokemonList(filteredPokemons) {
  filteredPokemons.forEach((pokemon) => {
    const card = document.createElement("div");
    
    card.innerHTML = `
        
            <div class="container-card">
            <img src="${pokemon.img}" alt="Foto pokemon"></img>
            <p> Nome: ${pokemon.name}  </p>
            <p> Tipo: ${pokemon.type} </p>
            </div>
            `;
  
    pkmCards.appendChild(card);
  });

}

updatePokemonList(pkmnDataList);





















