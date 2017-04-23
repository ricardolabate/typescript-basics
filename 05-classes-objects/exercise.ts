console.log("EXERCISES")

// Exercise 1 - How was your TypeScript Class?
// function Car(name) {
//     this.name = name;
//     this.acceleration = 0;
 
//     this.honk = function() {
//         console.log("Toooooooooot!");
//     };
 
//     this.accelerate = function(speed) {
//         this.acceleration = this.acceleration + speed;
//     }
// }
// var car = new Car("BMW");
// car.honk();
// console.log(car.acceleration);
// car.accelerate(10);
// console.log(car.acceleration);

class Car{
    name: string;
    accelaration: number = 0;

    constructor(name: string){
        this.name = name;
    }

    honk(){
         console.log("Toooooooooot!");
    };

    accelerate(speed: number){
        this.accelaration = this.accelaration + speed;
    };
    
}

const car = new Car("BMW");
car.honk();
console.log(car.accelaration);
car.accelerate(20);
console.log(car.accelaration);

console.log("Exercise 2");

// Exercise 2 - Two objects, based on each other ...
// var baseObject = {
//     width: 0,
//     length: 0
// };
// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//     return this.width * this.length;
// };
// console.log(rectangle.calcSize());

class baseObject{
    public width: number; 
    public length: number;
    constructor(width: number, length: number){
       this.width = width;
       this.length = length;
    }

    calcSize(width, length){
        let result = this.width * this.length;
        console.log(result);
    }

}

class Retangle extends baseObject{
    width = 5;
    length = 2;
}

const retangle = new Retangle();
console.log(retangle);
retangle.calcSize();

//Exercise 2 - Max's Solution
console.log("EX 2 - MAX'S SOLUTION")
class BaseObject = {
    width = 0;
    length = 0;
}

class Rectangle extends BaseObject{
    calcSize(){
        return this.width * this.length;
    }
}

const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
console.log("EXERCISE 3");
// var person = {
//     _firstName: ""
// };
// Object.defineProperty(person, "firstName", {
//     get: function () {
//         return this._firstName;
//     },
//     set: function (value) {
//         if (value.length > 3) {
//             this._firstName = value;
//         }
//         else {
//             this._firstName = "";
//         }
//     },
//     enumerable: true,
//     configurable: true
// });
// console.log(person.firstName);
// person.firstName = "Ma";
// console.log(person.firstName);
// person.firstName = "Maximilian";
// console.log(person.firstName);

class User{
    private _firstname: string = "Default";
    
    //called like a method but it's a property
    get firstname(){
        return this._firstname;
    }

    set firstname(value: string){
        if(value.length > 3){
             this._firstname = value;
        }else{
             this._firstname = "default";
        }
    }
}
let user = new User();
console.log(user.firstname);
user.firstname = "Ri";
console.log(user.firstname);
user.firstname = "Ricardo";
console.log(user.firstname);