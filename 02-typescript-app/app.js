//Type basics - 
//string
var myName = 'Rick';
//myName = 28;
//error TS2322: Type '28' is not assignable to type 'string'.
//number
// let myAge: number = 29;
//let myAge = 29.5 //allowed to use
//myAge = 'Rick';
//error
//boolean
// let hasHobbies: boolean = false;
//hasHobbies = 1;
//assign types = let's say I want to set a value
//later on
// let myRealAge: number = 29;
// console.log(myRealAge);
//array - with any[] as typeof, any value we can choose
//string, numbers, booleans...
// let hobbies: any[] = ["Cooking", "Sports"];
// console.log(hobbies[0]);
// console.log(hobbies[1]);
// console.log(hobbies);
// hobbies = [100];
// console.log(hobbies);
//tuples = the order [] is very important
//let address: [string, number] = ["Superstreet", 99];
//ok 
//let address: [string, number] = [99, "Superstreet"];
//error
//enum = make numbers more expressive
//enum reserved keyord
// enum Color {
//     Gray, //0
//     Green, //1
//     Blue
// }
// let myColor: Color = Color.Green;
// console.log(myColor);
//1
//different enum
// enum Color {
//     Gray, //0
//     Green = 100,
//     Blue
// }
// let myColor: Color = Color.Green;
// console.log(myColor);
//100
// let myColor: Color = Color.Blue;
// console.log(myColor);
//101 = continues counting from Green = 100
//any = Very flexible type (avoid using)
// let car: any = "BMW";
// console.log(car);
// car = { brand: "BMW", series: 3 };
// console.log(car);
//functions in types
//you want to make sure your arguments() have specific
//types so your functions can run correctly
function returnMyName() {
    return myName;
}
// console.log(returnMyName());
//void = you return "nothing" / no value
function sayHello() {
    console.log("Hello");
    //if a try to return something I get an error
    //return myName;
    //error TS2322: Type 'string' is not assignable to type 'void'.
}
//Argument types
// function multiply(value1, value2): number{
//     return value1 * value2;
// }
// console.log(multiply(2, 'Max'));
//No errors!
//'Max' converted to
// NaN
//In order to avoid that we assign types to arguments
function multiply(value1, value2) {
    return value1 * value2;
}
//console.log(multiply(2, 'Max'));
//error TS2345: Argument of type '"Max"' is not assignable to parameter of type 'number'
console.log(multiply(2, 10));
//Functions as Types
//this is a function type, you can't execute it
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
//we get errors because the function type 'number' of 
//myMultiply don't match the type 'void' of sayHello
myMultiply = multiply;
console.log(myMultiply(5, 10));
//no errors because myMultiply function type is 
// 'number' the same type of multiply
//important to notice that function multiply uses
// (value1 and value2) as arguments and myMultiply
//uses (val1, val2) no problem because function types
// only look for function types
//Objects
var userData = {
    name: "Rick",
    age: 29
};
//userData = {};
//error
// userData = {
//     a: "Max",
//     b: 27
// };
//error 
//the properties name don't match
//Complex Object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
//new object inheriting from Complex
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
//Union Types = instead of using 'any' we can chain multiple type using 
// '| ' and '= true'
var myRealRealAge = true;
myRealRealAge = 27;
myRealRealAge = true;
//How to Check Types
var finalValue = 30;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
//Never type
//We're going to use very rarely 
//A place that we never want to go in our code
function neverReturns() {
    throw new Error('An Error!');
}
//Nullable types
//By default, if we create a new variable
//and set to a number 
//we can set again to null
//in order to set  variable and types are not allowed
//to be 'null'
//we use the tsconfig.json
// let canBeNull = 12;
// canBeNull = null;
//error
var canAlsoBeNull;
canAlsoBeNull = null; //the same as undefined
//Using Union Type we can have the 'null' value
var canBeNull = 12;
var canThisBeAny = null;
canThisBeAny = 12;
//error
// the variable assigned to 'null' 
//is not type 'any' 
