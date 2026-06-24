
// In JavaScript we mainly use:
// 1. var   (old way)
// 2. let   (modern and recommended)
// 3. const (used for fixed values)
// 1. var
// var can be re-declared and updated

var name = "Aditya";
console.log(name);

// updating value
name = "Kumar";
console.log(name);

// re-declaring is also allowed
var name = "JavaScript";
console.log(name);


/*
Problems with var:
1. Function scoped
2. Hoisting issues
3. Can create bugs

That's why modern JS mostly uses let and const.
*/

// 2. let

// let can be updated
// but cannot be re-declared in same scope

let age = 21;
console.log(age);

// updating value
age = 22;
console.log(age);

// ❌ This will give error
// let age = 25;


/*
Use let when:
- value may change later
- loops
- counters
- dynamic data
*/


// =====================================
// 3. const
// =====================================

// const cannot be updated or re-declared

const pi = 3.14159;
console.log(pi);

// ❌ Error
// pi = 4;


/*
Use const when:
- value should stay fixed
- safer code
- recommended by default
*/

// VARIABLE NAMING RULES

// ✅ valid names

let firstName = "Aditya";
let _score = 95;
let $money = 1000;
let user123 = "coder";


// ❌ invalid names

// let 123name = "wrong";
// let first-name = "wrong";
// let let = "wrong";

// CASE SENSITIVE

let city = "Ranchi";
let City = "Delhi";

console.log(city);
console.log(City);

/*
JavaScript is case sensitive.
city and City are different variables.
*/

// DATA TYPES STORED IN VARIABLES

let username = "Aditya";     // String
let marks = 95;              // Number
let isPassed = true;         // Boolean
let state = null;            // Null
let x;                       // Undefined

console.log(username);
console.log(marks);
console.log(isPassed);
console.log(state);
console.log(x);

// typeof operator

// used to check datatype

console.log(typeof username); // string
console.log(typeof marks);    // number
console.log(typeof isPassed); // boolean


// =====================================
// BEST PRACTICES
// =====================================

/*
1. Prefer const by default
2. Use let when value changes
3. Avoid var
4. Use meaningful variable names
*/


// =====================================
// SMALL PRACTICE
// =====================================

const accountId = 12345;
let accountEmail = "aditya@gmail.com";
let accountPassword = "123456";
let accountCity = "Ranchi";

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);


// updating values

accountEmail = "newmail@gmail.com";
accountPassword = "abcdef";
accountCity = "Bangalore";

console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);