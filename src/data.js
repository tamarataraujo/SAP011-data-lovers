
// função que procurar por nome


export const callPokemon = (inputValue, list) => {
  const filteredByName = list.filter((pokemon) => {
    return pokemon.name.include(inputValue)
  }) 
  return filteredByName
}


// função que filtra por tipo




export const filterByType = (inputType, list) => {
  const filteredPokemons = list.filter((pokemon) => {
    return pokemon.type.includes(inputType)
  })
  return filteredPokemons;
}
