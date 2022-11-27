const fetch = require('node-fetch');

function fetchPokemonName(id) {
    let promise = new Promise((resolve, reject) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw `error status code ${response.status}`;
                }
            })
            .then((pokemon) => { resolve(pokemon.name); })          // Promise chaining in plaats van async/await
            .catch((error) => { reject(error); })
    });
    return promise;
}
for (let i = 0; i < 10; i++) {
    fetchPokemonName(i)
        .then((name) => { console.log(name) })
        .catch((error) => { console.log(error) })
}