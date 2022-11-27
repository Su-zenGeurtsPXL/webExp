//
// reduce: array wordt herleid tot één waarde adhv function
// (ages worden opgeteld: 15 + 9 + 7 = 31)
//


let persons = [
    { id: 1, name: 'pauline', age: 15 },
    { id: 2, name: 'tim', age: 9 },
    { id: 3, name: 'sofie', age: 7 }
];

let sumAges = persons.reduce((sum, person) => { return sum + person.age;} , 0);
console.log( sumAges );
