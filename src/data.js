function searchData(inputValue, list) {
  const newSearch = list.filter(pokemon =>
    pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return newSearch;
}











export {
  searchData,

};