//Interfaces
//A piece of code that has to know (parameter, a method)
//It makes a guarantee "I assure I have this person"
//This guarantee is a a Contract
//we define a type and we want to make sure a specific field is available
function greet(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = "Anna";
}
var person = {
    firstName: 'Max',
    age: 27,
    //property (based on propName)
    hobbies: ["Cooking", "Sports"],
    greet: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
//greet({ firstName: "Max", age: 27 });
// greet(person);
changeName(person);
greet(person);
person.greet("Anything");
//using Interfaces with Classes
var Person = (function () {
    function Person() {
    }
    Person.prototype.greet = function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
    ;
    return Person;
}());
var myPerson = new Person();
myPerson.firstName = "Maximilian";
myPerson.lastName = "Anything";
greet(myPerson);
myPerson.greet(myPerson.lastName);
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));
//inherits and a add aditional argument
var oldPerson = {
    age: 27,
    firstName: "Max",
    greet: function (lastName) {
        console.log("Hello");
    }
};
console.log(oldPerson);
//# sourceMappingURL=app.js.map