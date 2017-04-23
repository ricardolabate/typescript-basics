//"Let"" and "Const"
console.log("LET & CONST");
var variable = "Test"; //block scope variable
console.log(variable);
variable = "Another value"; //it has to be the same type as before
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
//maxLevels = 99; //error TS2540: Cannot assign to 'maxLevels' because it is a constant or a read-only property.
//const = values that never going to change
//Block Scope = what is
function reset() {
    //console.log(variable); //undefined = it doesn't have access to the initial value
    var variable = null; //it doesn't overwrite the value because of scope
    console.log(variable);
}
reset();
console.log(variable);
//Arrow Functions
//function() : number (this type sets the type for the return value)
console.log("ARROW FUNCTIONS");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(10, 3));
//Arrow functions without Parameters
var greet = function () {
    console.log("Hello!");
};
greet();
var greetFriend = function (friend) { return console.log(friend); };
greetFriend("Hi, Manu");
//Default Parameters
console.log("DEFAULT PARAMETERS");
//(start: number = 10) = this is the default parameter
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown(); //without the default parameter we get 'undefined'
//Rest & Spread
//Work with arrays and a list of values
console.log("REST & SPREAD");
//Spread
var numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
//console.log(Math.max(numbers)); //error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'number'.
console.log(Math.max.apply(Math, numbers));
//Rest = when I don't know how many parameters I'm going to have
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2, 6));
//Destructuring = easier way to get values from an Array
console.log("DESTRUCTURING");
var myHobbies = ["Cooking", "Sports"];
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1];
// console.log(hobby1, hobby2);
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
//Destructuring Objects
var userData = { userName: "Max", age: 27 };
// const { userName, age } = userData;
// console.log(userName, age);
var myName = userData.userName, myAge = userData.age;
console.log(myName, myAge);
//Template Literals
var userName = "Max";
var greeting = "This is a heading!\nI'm " + userName + ".\nThis is cool!";
console.log(greeting);
//# sourceMappingURL=app.js.map