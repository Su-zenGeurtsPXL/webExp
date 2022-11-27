module.exports = function (text) {
    return {
        print: function () {
            console.log(text); // text wordt bewaard in closure
        },
        printUppercase: function () {
            console.log(text.toUpperCase());
        }
    }
};

/*
module.exports = geëxporteerde vanuit de module
krijgt hier als waarde een function
in de function wordt een object met velden print en printUppercase gemaakt en teruggegeven
*/