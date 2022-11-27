//
// map: pas function toe op elke waarde in een array om een nieuwe array te maken
//


let persons = [
    { id: 1, name: 'pauline', age: 15 },
    { id: 2, name: 'tim', age: 9 },
    { id: 3, name: 'sofie', age: 7 }
    ];

let ages = persons.map( function(person) {return person.age;} );
console.log( ages ); // [15, 9, 7]


