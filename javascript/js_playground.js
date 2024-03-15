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