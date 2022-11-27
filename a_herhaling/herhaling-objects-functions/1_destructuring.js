/*
let person = { id:1, name:'tim' };
let id;
({ id } = person);                  // <== destructure 'id'
console.log(id);
*/

/*
let person = { id:1, name:'tim' };
let id, name;
({ id, name } = person);

console.log(id, name);              // <== destructure 'id and name into existing variable'
*/

/*
let person = { id:1, name:'tim' };
let { id, name } = person;      // <== destructure 'id and name into new variable'

console.log(id, name);
*/