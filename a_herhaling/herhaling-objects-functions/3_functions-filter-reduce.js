//
// Combinatie van filter & reduce: 
// - Filter enkel personen met een leeftijd < 12 (tim, sofie)
// - Tel de leeftijden op (9 + 15 = 16)
//

let persons = [
    { id: 1, name: 'pauline', age: 15 },
    { id: 2, name: 'tim', age: 9 },
    { id: 3, name: 'sofie', age:7 }
];
let sumAgesOfYoungPersons = persons
    .filter( (person) => person.age < 12 )
    .reduce( (sum, person) => { return sum + person.age; } , 0);

console.log( sumAgesOfYoungPersons );