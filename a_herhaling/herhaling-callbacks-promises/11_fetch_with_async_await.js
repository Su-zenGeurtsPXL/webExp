const fetch = require('node-fetch');
async function fetchPokemonName(id) {                                           // <== Geef aan dat het een async functie is
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);      // <== wacht op het resultaat van de fetch
    if (!response.ok) {                                                         // <== ga nu verder (bevorderd leesbaarheid)
        let status = response.status
        throw new Error(`error status code ${status}`);
    }
    let pokemon = await response.json();            // <== Fetch: er dient nog een object gemaakt te worden van het response: response.json()
    return pokemon.name;
}
for (let i = 0; i < 10; i++) {
    fetchPokemonName(i)
        .then((name) => { console.log(name) })
        .catch((error) => { console.log(error.message) })
}