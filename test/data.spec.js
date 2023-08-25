import { sortData, filterNames, filterByType, computerType} from '../src/data.js';


const bulbasaur =   {
  "num": "001",
  "name": "bulbasaur",
  "type": [
    "grass",
    "poison"
  ],
}
const ivysaur = {
  "num": "002",
  "name": "ivysaur",
  "type": [
    "grass",
    "poison"
  ],
}
const charmander ={
  "num": "004",
  "name": "charmander",
  "type": [
    "fire"
  ],
}
const charmeleon = {
  "num": "005",
  "name": "charmeleon",
  "type": [
    "fire"
  ],
}
const weedle = {
  "num": "013",
  "name": "weedle",
  "type": [
    "bug",
    "poison"
  ],
}
const pokemonTest = [bulbasaur,ivysaur,charmander,charmeleon,weedle]




// teste do cálculo agregado
describe('aggregate calculation', () => {
  test('is a function', () => {
    expect(typeof computerType).toBe('function');
  });

  it('returns percentage of filtered array', () => {
    const filterByType = [bulbasaur]
    expect(computerType(filterByType, 10)).toBe('10.00');
  });
});


// test search name
describe('search name', () => {
  test('is a function', () => {
    expect(typeof filterNames).toBe('function');
  });

  it('returns the characters that have the letter entered', () => {
    const valueInput1 = "bu";
    const valueInput2 = "iv";

    expect(filterNames(valueInput1, pokemonTest)).toEqual([bulbasaur]);
    expect(filterNames(valueInput2, pokemonTest)).toEqual([ivysaur]);
  });
});



// Test filtro tipo
describe('Search characters by type', () => {
  test('is a function', () => {
    expect(typeof filterByType).toBe('function');
  });

  it('return the characters of the selected type', () => {
    const value1 = "grass";
    const value2 = "fire";

    expect(filterByType(value1, pokemonTest)).toStrictEqual([bulbasaur, ivysaur]);
    expect(filterByType(value2, pokemonTest)).toEqual([charmander, charmeleon]);
  });
});



// test ordenaçao alfabética
describe('Sort character list', () => {
  test('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('returns order a-z and z-a', () => {
    const valueAZ = "a-z";
    const valueZA = "z-a";

    expect(sortData(valueAZ, pokemonTest)).toEqual([bulbasaur, charmander, charmeleon, ivysaur, weedle]);
    expect(sortData(valueZA, pokemonTest)).toEqual([weedle,ivysaur,charmeleon,charmander,bulbasaur]);
  });
});
