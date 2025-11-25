// Crash Course JavaScript//
//console.log ("Hello, World!"); 
//console.error('Error message');
//console.warn('Warning message'); 

// Variables= var?, let, const//
//let age = 25;
//age = 26;
//console.log(age);

//Let example //
// let score;    socre = 10; console.log(score); //

//Data Types= String, number, Boolean, Null, Undefined, and Symbol//
//const name = 'Ember'; //String
//const age = 26; //Number
//const rating = 4.5; //Number
//const isStudent = true; //Boolean
//const x = null; //Null
//const y = undefined; //Undefined
//let z; //Undefined
//console.log(typeof z);

//Concatenation//
//console.log('My name is ' + name + ' and I am ' + age);

//Template Strings//
//console.log(`My name is ${name} and I am ${age}`);
//const hello = `My name is ${name} and I am ${age}`;
//console.log(hello);

//String properties and methods//
//const s = 'Hello World';
//console.log(s.length);
//console.log(s.toUpperCase());
//console.log(s.substring(0, 5).toLowerCase());
//console.log(s.split(''));
//const s= 'technology, computers, it, code';
//console.log(s.split(', '));

//Arrays - variables that hold multiple values//
//const numbers = new Array(1,2,3,4,5);
//console.log(numbers);
/* multi line comment*/
//const fruits = ['apples', 'oranges', 'pears', 10, true];
//fruits[3] = 'grapes';
//fruits.push('mangos');
//fruits.unshift('strawberries');
//fruits.pop();
//console.log(Array.isArray(fruits));
//console.log(fruits.indexOf('oranges'));
//console.log(fruits);

//Object Literals//
//const person = {
//    firstName: 'Ember',
//    lastName: 'Smith',
//    age: 26,
//    hobbies: ['music', 'movies', 'sports'],
//    address: {
//        street: '50 Main St',
//        city: 'Boston',
//        state: 'MA'
//    }
//};
//console.log(person.firstName, person.lastName);
//console.log(person.hobbies[1]);
//console.log(person.address.city);
//const { firstName, lastName, address: { city } } = person;
//console.log(firstName, city);
//person.email = 'Ember@example.com';
//console.log(person);
//Arrays of Objects//
//const todos = [
  //  {
  //      id: 1,
  //      text: 'Take out trash',
  //      isCompleted: true
  //  }
  //     {
  //      id: 2,
  //      text: 'Meet up for lunch',
  //      isCompleted: true
  //  }
  //     {
  //      id: 3,
  //      text: 'Dentist appointment',
  //      isCompleted:  false
  //  }
//]
//console.log(todos[1].text);
//const todoJSON = JSON.stringify(todos);
//console.log(todoJSON);

//Loops= For//
//for(let i = 0; i <= 10; i++) {
  //  console.log(`For Loop Number: ${i}`);
//}
//While//
//let i = 0;
//while(i < 10) {
  //  console.log(`While Loop Number: ${i}`);
  //  i++;
//}