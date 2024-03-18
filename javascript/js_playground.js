var name = "Jack";
var age = 23; // in javascript everything is just a floating point number, whether it's shown or not

var message = "Hi, my name is " + name + " and I am " + age + " years old.";

console.log(message);

var sum = 10 + 15; // "=" assignment operator; "+" addition operator
var sub = 15 - 10; // "-" subtraction operator
var mul = 10 * 3; // "*" multiplication operator
var div = 9 / 3; // "/" division operator
var mod = 10 % 3; // "%" modulus operator

var msg = "10 / 3 = 3 with a remainder of " + mod;

var result = 10 * 5 + 3 - 4; // 10 * 5 = 50; 50 + 3 = 53; 53 - 4 = 49
console.log(sum)
console.log(sub)
console.log(mul)
console.log(div)
console.log(msg)
console.log(result)

var firstName = "John";
var lastName = "Doe";
var dateOfBirth = "10-09-82";
var age = 23;
var profileImgUrl = "http://coolpicks.com/johndoe.jpg"; // doesn't matter if it's single or double quotes

var loginWelcomeMessage = "Welcome, " + firstName + ". Happy " + age + "rd birthday!";
console.log(loginWelcomeMessage);

if (1 == 1) { // if 1 == 2 it won't be shown
    console.log("We should see this!");
}

var myAccountBalance = 300;
var nikeSBShoes = 799.23;
var coupon = 500;

// in js, if you use "===" it checks for the value and the type
// !== not equal to
var JacksAge = "23";

if (age === JacksAge) {
    console.log("You are the same age as Jack!");
} else {
    console.log ("One of these is not like the other...");
}
// if you have 1 line of code, you don't need curly braces
// but it's better to have as in other languages they're necessary
if (nikeSBShoes <= myAccountBalance) {
    myAccountBalance -= nikeSBShoes;
    console.log("We just bought some dope shoes!");
    console.log("Account Balance: " + myAccountBalance);
} else if (nikeSBShoes - coupon <= myAccountBalance) {
    console.log("We just bought some dope shoes with a coupon!");
    myAccountBalance -= nikeSBShoes - coupon;
    console.log("Account Balance: " + myAccountBalance);
} else {
    console.log("You too broke for shoes, bra!");
}

// logical operators
if (1 == 1 && 2 == 2 || "Joe" === "Joe"){
    console.log("These are both true!");
}

if (true && true) {
    console.log("These are the same!");
}

if (1 == 3 || "Joe" === "Joe") {
    console.log("One of these are true!");
}

var cat1 = 5;
var cat2 = 10;
var cat3 = 1;
var disabledHandicap = false;

if (cat1 > cat2 && cat1 > cat3 && !disabledHandicap) {
    console.log("Cat 1 is the cutest!");
} else if (cat2 > cat1 && cat2 > cat3 && !disabledHandicap) {
    console.log("Cat 2 is the cutest!");
} else if (cat3 > cat1 && cat3 > cat2 || disabledHandicap) {
    console.log("Cat 3 is the cutest!");
}

// arrays
// not very practical to do like this:
var student1 = "Timmy";
var student2 = "Janessa";
var student3 = "Arun";

var studentNames = ["Timmy", "Janessa", "Arun"];
// better option: studentNames!!!
console.log(students);

var naughtyList = []; // empty array
naughtyList.push(studentNames[0]); // adds Timmy to the end of the array
console.log(naughtyList);
// ! you add by using push keyword
// and remove by grabbing index of element you want to remove and splice it

// how do yoiu remove element out of array?
var index =naughtyList.indexOf("Timmy");

if (index > -1) {
    naughtyList.splice(index, 1); //splice function is gonna cut it
}
console.log(index);
console.log(naughtyList);

// var badKid = students[0]; // doesn't make sense to store variable like this
// as you get more advanced, you'll use arrays less often as it's too slow
// arrays are linerar, so it takes time one by one

// a big no-no for mixed data:
var person = ["John", 23, "USA","teacher", true];
// always keep an array same data type!!!


// Code Challenge 1 - Array Sort
// 1, 10, 5, 15, 2, 7, 28, 900, 45, 18, 27
const arraySort = [1, 10, 5, 15, 2, 7, 28, 900, 45, 18, 27];
// console.log(arraySort);
arraySort.sort(function (a, b) {
	return a - b;
});
console.log(arraySort);


// loops
var total = 10;
for (var x = 0; x < total; x++) {
    //iterate until not told to
    console.log(x);
}

var students = ["John", "Jacob", "Jingle", "Heimer", "Smith"];
// this is not very efficient!:
// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);

for (var index = 0; index < students.length; index++) {
    console.log(students[index]);
}

//functions

//not good option:
// var length1 = 15;
// var width1 = 10;
// var area1 = length1 * width1

// var length2 = 12;
// var width2 = 14;
// var area2 = length2 * width2;

// console.log(area1);
// console.log(area2);

function area(length, width) {
    return length * width;
}

var rectanglesAreas = []
rectanglesAreas.push(area(10,15));
rectanglesAreas.push(area(14,2));
rectanglesAreas.push(area(4,5));
var area1 = area(10,15);
console.log(area1);
console.log(rectanglesAreas);

var bankBalance = 500;
function makeTransaction(priceOfSale) {
    if (priceOfSale <= bankBalance) {
        bankBalance -= priceOfSale;
        console.log("Purchase Successful");
    } else {
        console.log("Insufficient Funds");
    }
}

console.log(bankBalance);
makeTransaction(79.00);

console.log(bankBalance);
makeTransaction(2.32);

console.log(bankBalance);
makeTransaction(10.45);

console.log(bankBalance);
makeTransaction(450.00);

var transaction = function(priceOfSale) {
    if (priceOfSale <= bankBalance) {
        bankBalance -= priceOfSale;
        console.log("Purchase Successful");
    } else {
        console.log("Insufficient Funds");
    }
};

transaction(10.00);

// which one should I use: function or variable?
var printCustomerName = function(first, last) {
    console.log("First Name: " + first + " Last Name: " + last);
}

var applyForCreditCard = function(creditScore, soul) {
    //call some functions to process application
}
// you can store in an array if you put var keyword in front of it
var bankOperations = [];
bankOperations.push(transaction);
bankOperations.push(printCustomerName);
bankOperations.push(applyForCreditCard);

// objects
// js object is a collection of named values
//var student = {
    //firstName: "John", // it's called a property or a key
    //lastName: "Parker", // spaces do not matter, you can write it in ione line
    //age: 7
//};

console.log(student.firstName);
console.log(student.lastName);
console.log(student["firstName"]); // this is not very practical
console.log(student["lastName"]); // but it works
// how can I make it more reusable so we can have multiple students?
// creates a new emptyobject:
//var student1 = new Object();
//student1.firstName = "John";
//student1.lastName = "Parker";
//student1.age = 7;

// var student0 = { // another way
    //firstName: "Jane",
    //lastName: "Lo",
    //age: 8,
    //greeting: function() { // but it's not cool to add it to each student, too much code
        //return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
    //}
//}

// console.log(student0.greeting());

// var student2 = {}; // one more way to create an object
// student2.firstName = "Zack";
// student2.lastName = "Bobo";
// student2.age = 5;

// rule of thumb:
// if you ever ever feel the need to go through list of objects
// or have to go through all the keys inside of an object
// you're probably using them wrong
// you should be accessing values like so: console.log(student.firstName);

var students = []; // empty array
//students.push(student0);
//students.push(student1);
//students.push(student2);

for (var index = 0; index < students.length; index++) {
    var student = students[index];
    console.log(students.greeting());
}

// object constructor to create reusable objects
// we do it by specifying a function
function student(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.greeting = function() {
        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
    }
}

//var s1 = new student("Pekka", "Pekkanen", 5);
//console.log(s1.greeting());

students.push(new student("Pekka", "Pekkanen", 5));
students.push(new student("Mikko", "Mikkonen", 6));
students.push(new student("Jukka", "Jukkanen", 7));

for (var key in student) {
    console.log(student[key]);
}