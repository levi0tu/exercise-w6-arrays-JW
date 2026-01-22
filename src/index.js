const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey"
];
const countThem = () => {
  let size = pokemons.length;
  document.getElementById("app").textContent = `I have ${pokemons.length} pokemons!`;
  // print out, in a sentence, how many pokemons I have.
  // like: "I have x pokemons!"
};
countThem();

const orderThem = () => {
  let sorted = pokemons.sort();
  document.getElementById("app").textContent = `${sorted}`;
  // order the pokemons alphabetically
};
const flipThem = () => {
  let reversed = pokemons.reverse();
  document.getElementById("app").textContent = `${reversed}`;
  // reverse the order of the pokemons
};
orderThem();
flipThem();

const makeThemBig = () => {
  let uppercased = pokemons.map(pokemon => pokemon.toUpperCase());
  document.getElementById("app2").textContent = `${uppercased}`;
  // print the pokemons in UPPERCASE letters
};

makeThemBig();

const onlyTheBs = () => {
  let letters = pokemons.filter(pokemon => pokemon.startsWith(`B`));
  document.getElementById("app3").textContent = `${letters}`;
  // only print the pokemons that starts with B
};
onlyTheBs();

const notTheCs = () => {
  // remove all pokemons that starts with C
};

const nameAndIdThanks = () => {
  // print out name and index of all pokemons
  // like: number x - Squirtle
};

const catchPokemon = name => {
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
};

const didICatchIt = name => {
  // check the pokemons to see if a specific pokemon is in the array
};

const addInThirdPlace = () => {
  // add the pokemon "Clefairy" in the third place of the array
  // print the list so you see its there.
};

// ***BONUS***
const theLongestName = () => {
  // find the pokemon with the longest name
};
