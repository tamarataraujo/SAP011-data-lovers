export const filterNames = (data, searchedName) => {
  return data.filter(
    (pokemon) =>
      pokemon.name.toUpperCase().includes(searchedName.toUpperCase()) //permite que a pesquisa seja feita em letra maiuscula tbm
  );
};



// para filtrar de A-Z

export const sortData = (data, sortBy, sortOrder) => {
  const dataCopy = [...data]
  const sorted = dataCopy.sort(function (a, b) {
    return a[sortBy].localeCompare(b[sortBy])
  })
  if (sortOrder === "a-z") {
    return sorted
  }
  else {
    return sorted.reverse()
  }
}


//funcao para filtrar por tipo

export const filterByType = (typeInput, list) => {
  const filteredPokemons = list.filter((pokemon) => {
    return pokemon.type.includes(typeInput)
  })
  return filteredPokemons;
}

export function computerType (filteredPokemons, totalPokemons) {
  return ((filteredPokemons.length / totalPokemons)*100).toFixed(2)
}
