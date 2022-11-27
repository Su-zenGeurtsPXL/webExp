//
// filter: nieuwe array met enkel die waarden die voldoen aan de voorwaarde
// Enkel personen tonen met een leeftijd < 12 geeft 2 resultaten: tim, sofie
//

let persons = [
    { id: 1, name: 'sofie', age: 15 },
    { id: 2, name: 'tim', age: 9 },
    { id: 3, name: 'sofie', age:7 }
];

let youngPersons = persons.filter( (person) => person.age < 12);
console.log( youngPersons );