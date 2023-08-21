function searchData(inputValue, list) {
  const newSearch = list.filter(pokemon =>
    pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    // eslint-disable-next-line no-irregular-whitespace
    return newSearch;
}























export {
  searchData,

};