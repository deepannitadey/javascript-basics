/**********************************
 * Variables and Data types*/
/*
var firstName = "Deepannita";
console.log(firstName);

var lastName = "Dey";
console.log(lastName);

var age = 24.0;
console.log(age);

var fullAge = true;
console.log(fullAge);

var job = "Coder";
console.log(job);

var gender;
console.log(gender);

// Variable Naming Rules

var _2years = 2;
var $name = "Deepannita";
var johnMark = "John and Mark";
var if = 23;
*/
// Type coercion
var firstName = "Deepannita";
var age = 24;
console.log(firstName + " " + age);

var job, isMarried;
job = "Coder";
isMarried = false;
console.log(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is she married?" +
    isMarried
);
// Variable Mutation
age = "twenty four";
job = "HR Recruiter";
alert(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is she married?" +
    isMarried
);

// Use prompt command

var lastName = prompt("what is her last name?");
console.log(firstName + " " + lastName);

// Basic Operators

var now, yearDeepannita, yearBhaswati;
now = 2020;
yearDeepannita = now - 24;
yearBhaswati = now - 26;
console.log(yearDeepannita);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// logical Operators

var ageDeepannita = 24;
var ageBhaswati = 26;
var deepannitaOlder = ageDeepannita > ageBhaswati;
console.log(deepannitaOlder);
var deepannitaYounger = ageDeepannita < ageBhaswati;
console.log(deepannitaYounger);

// TypeOf Operator

console.log(typeof deepannitaYounger);
console.log(typeof ageDeepannita);
console.log(typeof " Deepannita is younger than Bhaswati");
var x;
console.log(typeof x);

var now = 2018;
var yearDeepannita = 1996;
var fullAge = 18;

// Use Multiple Operators
// Operator precedence
var isFullAge = now - yearDeepannita >= fullAge;
console.log(isFullAge);

var ageDeepannita = now - yearDeepannita;
var ageBhaswati = 26;
var average = (ageDeepannita + ageBhaswati) / 2;
console.log(average);

// Multiple Assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More Operators

x *= 2;
console.log(x);
x += 10;
console.log(x);
