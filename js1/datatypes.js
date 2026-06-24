
/*
JavaScript has 2 categories:

1. Primitive Datatypes
2. Non-Primitive Datatypes
*/

// PRIMITIVE DATATYPES


/*
Primitive datatypes are simple single values.

There are 7 primitive datatypes:
1. String
2. Number
3. Boolean
4. Null
5. Undefined
6. BigInt
7. Symbol
*/


// 1. STRING


// String = sequence of characters/text

let name = "Aditya";
let city = 'Ranchi';

console.log(name);
console.log(city);

console.log(typeof name); // string


// ===============================================
// 2. NUMBER
// ===============================================

// JavaScript has only one number type
// for integers and decimal values

let age = 21;
let price = 99.99;

console.log(age);
console.log(price);

console.log(typeof age); // number


// 3. BOOLEAN

// Boolean stores true or false

let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn);
console.log(isAdmin);

console.log(typeof isLoggedIn); // boolean


// ===============================================
// 4. NULL
// ===============================================

// null means intentionally empty value

let temperature = null;

console.log(temperature);

// weird JS behavior
console.log(typeof temperature); // object


/*
Important:
typeof null gives "object"
This is a known JavaScript bug.
*/


// ===============================================
// 5. UNDEFINED
// ===============================================

// variable declared but value not assigned

let state;

console.log(state);

console.log(typeof state); // undefined


// ===============================================
// 6. BIGINT
// ===============================================

// used for very large integers

let bigNumber = 123456789123456789123456789n;

console.log(bigNumber);

console.log(typeof bigNumber); // bigint


// ===============================================
// 7. SYMBOL
// ===============================================

// Symbol creates unique values

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2); // false

console.log(typeof id1); // symbol


// ===============================================
// NON-PRIMITIVE DATATYPES
// ===============================================

/*
Non-primitive datatypes can store
multiple values or complex data.

Main ones:
1. Object
2. Array
3. Function
*/


// ===============================================
// 1. OBJECT
// ===============================================

// stores data in key-value pairs

let student = {
    name: "Aditya",
    age: 21,
    cgpa: 7.0
};

console.log(student);

console.log(typeof student); // object


// accessing object values

console.log(student.name);
console.log(student.age);


// ===============================================
// 2. ARRAY
// ===============================================

// arrays store multiple values

let marks = [90, 85, 95, 88];

console.log(marks);

console.log(typeof marks); // object

// accessing array elements

console.log(marks[0]);
console.log(marks[2]);


/*
Arrays are technically objects in JS.
*/


// ===============================================
// 3. FUNCTION
// ===============================================

// function is reusable block of code

function greet() {
    console.log("Hello Aditya");
}

greet();

console.log(typeof greet); // function


// ===============================================
// DIFFERENCE BETWEEN NULL AND UNDEFINED
// ===============================================

/*
undefined:
- value not assigned

null:
- intentionally empty
*/

let a;
let b = null;

console.log(a);
console.log(b);


// ===============================================
// TYPE CONVERSION
// ===============================================

// Number to String

let score = 100;

console.log(typeof score);

let convertedScore = String(score);

console.log(convertedScore);
console.log(typeof convertedScore);


// String to Number

let value = "500";

let numberValue = Number(value);

console.log(numberValue);
console.log(typeof numberValue);


// ===============================================
// IMPORTANT INTERVIEW POINTS
// ===============================================

/*
1. JavaScript is dynamically typed
2. Arrays are objects
3. typeof null is object (bug)
4. Functions are first-class citizens
*/


// ===============================================
// SMALL PRACTICE
// ===============================================

const accountName = "Aditya";
let balance = 5000;
let isActive = true;
let lastTransaction = null;

let transactions = [100, 200, 300];

let user = {
    username: "aditya123",
    followers: 500
};

function login() {
    console.log("User Logged In");
}

console.log(accountName);
console.log(balance);
console.log(isActive);
console.log(lastTransaction);
console.log(transactions);
console.log(user);

login();

