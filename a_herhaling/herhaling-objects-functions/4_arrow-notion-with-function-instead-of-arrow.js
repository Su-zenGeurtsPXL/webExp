//
// Arrow notion in Foreach function: verliezen van lexical scope
//

/*
In een function: this = object als de function deel uitmaakt van object
                 global anders
                 this maakt hier deel uit van de anonieme functie dus global
*/


let person = {
    name: 'tim',
    hobbies: ['reading', 'running'],
    print() {
        console.log(this.name);
        this.hobbies.forEach(function (hobby) {
            console.log(`${this.name} has hobby ${hobby}`);
        });
    }
}
person.print()
