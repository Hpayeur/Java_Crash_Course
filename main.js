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
//for(let i = 0; i < todos.length; i++) {
  //  console.log(todos[i].text);
//}
//for(let todo of todos) {
  //  console.log(todo.text);

  //forEach, map, filter//
//todos.forEach(function(todo) {
  //  console.log(todo.text);});
//const todoText = todos.map(function(todo) {
  //  return todo.text;});
  //const todoText = todos.map((todo) => todo.text);
//console.log(todoText);
//const todoCompleted = todos.filter(function(todo) {
  //  return todo.isCompleted === true;});
  //const todoCompleted = todos.filter((todo) => todo.isCompleted === true);
//console.log(todoCompleted);
//const todoCompleted = todos.filter((todo) => todo.isCompleted === true).map((todo) => todo.text);
//console.log(todoCompleted);  


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

//Conditionals//
//const x = 10;
//if(x == 10) {
    //  console.log('x is 10');
//} else {
  //    console.log('x is not 10');
//} 
//const y = 20;
//if(x > 5 && y > 15) {
    //  console.log('x is more than 5 and y is more than 15');
//}
//if(x > 15 || y > 15) {
    //  console.log('x is more than 15 or y is more than 15');
//}
//else {
  //    console.log('x is not more than 15 and y is not more than 15');
//}
//const color = x > 10 ? 'red' : 'blue';
//switch(color) {
  //  case 'red':
    //    console.log('color is red');
    //    break;
    //  case 'blue':
    //    console.log('color is blue');
    //    break;
    //default:
    //    console.log('color is not red or blue');
    //    break;
//}


//Functions//   
//function addNums(num1 = 1, num2 = 1) {
  //  return num1 + num2;
//}
//console.log(addNums(5, 10));
//Arrow Functions//
//const addNums = (num1 = 1, num2 = 1) => num1 + num2;
//console.log(addNums(5, 10));
//const addNums = (num1 = 1, num2 = 1) => {
    //  return num1 + num2;
//}
//console.log(addNums(5, 10));
//const addNums = num1 => num1 + 5;
//console.log(addNums(5));
//const addNums = () => 5 + 5;
//console.log(addNums());
//Object Oriented Programming//
//Constructor Function//
//function Person(firstName, lastName, dob) {

// object-oriented programming
//function Person(firstName, lastName, dob) {
//    this.firstName = firstName;
//    this.lastName = lastName;
//    this.dob = new Date(dob);
//    this.getBirthYear = function() {
//        return this.dob.getFullYear();
//    }
//    this.getFullName = function() {
//        return `${this.firstName} ${this.lastName}`;
//    }
//}   
//

//constructor function
//function Person(firstName, lastName, dob) {
//    this.firstName = firstName;
//    this.lastName = lastName;
//    this.dob = new Date(dob);
//this.getFullName = function() {
 //       return `${this.firstName} ${this.lastName}`;
  //  }
//}

//person.protype.getBirthYear = function() {
//    return this.dob.getFullYear();
//}
//person.protype.getFullName = function() {
//    return `${this.firstName} ${this.lastName}`;
//}

//Class//
//class Person{
//    constructor(firstName, lastName, dob) {
//        this.firstName = firstName;
//        this.lastName = lastName;
//        this.dob = new Date(dob);
//    }
//    getBirthYear() {
//        return this.dob.getFullYear();
//    }
//    getFullName() {
//        return `${this.firstName} ${this.lastName}`;
//    }
//}

//Instantiate Object//
//const person1 = new Person('Ember', 'Smith', '1997-03-15');
//const person2 = new Person('John', 'Doe', '1985-10-30');
//console.log(person2.getFullName());
//console.log(person1);