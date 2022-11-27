const axios = require('axios').default;
const express = require('express');
const app = express();
const port = 3000;

async function fetchPokemonName(id) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = response.data;
    return pokemon.name;
}

app.get('/pokemon', async function (req, res, next) {
    try {
        const { id } = req.query;
        const name = await fetchPokemonName(id);
        res.send(name);
    } catch (error) {
        return next(error);
    }
});

app.get('/oops1', function(req,res,next){
    setTimeout(() => {
      next(new Error("oops 1"))
    }, "1000")
});

app.get('/oops2', function(req,res,next){
    setTimeout(() => {
      throw new Error("oops 1");
    }, "1000")
});

app.get('/oops3', async function(req,res,next){
    setTimeout(() => {
      throw new Error("oops 1");
    }, "1000")
});


app.use(function(err, req, res, next){
    res.send(err.message);
    next();
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
