// Crash Course JavaScript//
console.log ("Hello, World!"); 
console.error('Error message');
console.warn('Warning message');

// Variables= var?, let, const//
let age = 25;
age = 26;
console.log(age);

//Let example //
// let score;    socre = 10; console.log(score); //

//Data Types= String, number, Boolean, Null, Undefined, and Symbol//
const name = 'Ember'; //String
const age = 26; //Number
const rating = 4.5; //Number
const isStudent = true; //Boolean
const x = null; //Null
const y = undefined; //Undefined
let z; //Undefined
console.log(typeof z);

//Concatenation//
console.log('My name is ' + name + ' and I am ' + age);

//Template Strings//
console.log(`My name is ${name} and I am ${age}`);
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

//String properties and methods//
const s = 'Hello World';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0, 5).toLowerCase());
console.log(s.split(''));
const s= 'technology, computers, it, code';
console.log(s.split(', '));

//Arrays - variables that hold multiple values//
const numbers = new Array(1,2,3,4,5);
/* multi line comment*/
const fruits = ['apples', 'oranges', 'pears', 10, true];
console.log(fruits);
