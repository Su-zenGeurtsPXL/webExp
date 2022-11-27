//
// Arrow notion in Foreach function => () om iedere hobby op het scherm te tonen via .print()
//

/*
In arrow functions this retains the value of the enclosing lexical context’s this
==> dus hier this komt overeen met person-object
*/

let person = {
    name: 'tim',
    hobbies: ['reading', 'running'],

    // Functie in een object
    print() {
        console.log(this.name);
        this.hobbies.forEach((hobby) => {
            console.log(`${this.name} has hobby ${hobby}`);
        });
    }
}
person.print()