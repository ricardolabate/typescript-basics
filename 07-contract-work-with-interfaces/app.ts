//Interfaces
//A piece of code that has to know (parameter, a method)
//It makes a guarantee "I assure I have this person"
//This guarantee is a a Contract
//we define a type and we want to make sure a specific field is available

// function greet(person: {name: string}){
//     console.log("Hello, " + person.name);
// }

// function changeName(person: {name: string}){
//     person.name = "Anna";
// }

// const person = {
//     name: 'Max',
//     age: 27
// }

// greet(person);
// changeName(person);
// greet(person);

//problem with that example above is that if we want to change
//a parameter or a method, we would need to change everywhere

//Interfaces and properties
//trying to print an object literal
//greet({ firstName: "Max", age: 27 });
//we got an error: Object literal may only specify known properties, and 'age' does not exist in type 'NamedPerson'.

interface NamedPerson{
    firstName: string;
    //creating a optional argument
    age?: number;
    //creating an argument that we don't know what type
    //or what exactly it should be (flexibility)
    [propName: string]: any; //this is not an 
    //creating a method
    greet(lastName: string): void;
}

function greet(person: NamedPerson){
    console.log("Hello, " + person.firstName);
}

function changeName(person: NamedPerson){
    person.firstName = "Anna";
}

const person = {
    firstName: 'Max',
    age: 27,
    //property (based on propName)
    hobbies: ["Cooking", "Sports"], //this is not an Array
    greet(lastName: string){
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
}

//greet({ firstName: "Max", age: 27 });
// greet(person);
changeName(person);
greet(person);
person.greet("Anything");

//using Interfaces with Classes
class Person implements NamedPerson{
    firstName: string;
    lastName: string;
    greet(lastName: string){
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
}

const myPerson = new Person();
myPerson.firstName = "Maximilian";
myPerson.lastName = "Anything";
greet(myPerson);
myPerson.greet(myPerson.lastName);

//Interfaces and Function Types

interface DoubleValueFunc{
    (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(value1: number, value2: number){
    return (value1 + value2) * 2;
};

console.log(myDoubleFunction(10,20));

//Interface inheritance 

interface AgedPerson extends NamedPerson{
    age: number;
}
//inherits and a add aditional argument
const oldPerson: AgedPerson = {
    age: 27,
    firstName: "Max",
    greet(lastName: string){
        console.log("Hello");
    }
};

console.log(oldPerson);
//Object {age: 27, firstName: "Max", greet: function}