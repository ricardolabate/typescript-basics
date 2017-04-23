var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Creating Classes and Class properties
var Person = (function () {
    //this is a constructor function
    function Person(name, username) {
        this.username = username;
        this.age = 29; //available to any object or class inherit from this class
        //this.name (refers to the class) name: string 
        this.name = name; //name (refers to the argument passed to the constructor)
    }
    //Class method
    Person.prototype.printAge = function () {
        //age is protected but since we're inside of the class scope we can invoke it
        console.log(this.age);
        this.setType("Old guy");
    };
    //type is private but accessible here because we're inside of the block-scope
    //now with Access modifier
    Person.prototype.setType = function (type) {
        this.type = type; //to make it inherit from the class' property
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Max", "max");
// console.log(person);
console.log(person.name, person.username);
person.printAge();
//person.setType("Cool guy"); //Won't work with private method
//Inheritance
var Rick = (function (_super) {
    __extends(Rick, _super);
    //default property overwrites the property inherit from "Person" class 
    //name = "Rick";
    //Inheritance and constructor
    function Rick(username) {
        var _this = 
        //calls the constructor from the parent class
        _super.call(this, "Rick", username) || this;
        _this.age = 31;
        return _this;
        //console.log(this.type); //error TS2341: Property 'type' is private and only accessible within class 'Person'.
    }
    return Rick;
}(Person));
var rick = new Rick("rick");
console.log(rick);
//Getter & Setters - gives the ability to running code before setting a value
var Plant = (function () {
    function Plant() {
        //setting a default value
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        //the property name is accesible to the outside later on 
        //it is set like a method to execute code
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species); //"default" - it doesn't match the condition to "set species()"
plant.species = "Green Herb";
console.log(plant.species);
//Static Properties & Methods
var Helpers = (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    return Helpers;
}());
//Static is a way of letting the property accessible outside of the class
Helpers.PI = 3.14;
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
//Abstract Classes - marked with abstract keyword, can't be instatiated directly
//you have to inherit from them ALWAYS
var Project = (function () {
    function Project() {
        this.projectName = "Default";
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);
//Private Constructors
var OnlyOne = (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    //Singleton Pattern:
    //Only one instance at a time.
    //The conventional singleton pattern is really something that is used 
    //to overcome the fact that all code must be in a class.
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
//let wrong = new OnlyOne('The Only One');
//how to instatiate using a method
var right = OnlyOne.getInstance();
console.log(right);
//"readonly" Properties
console.log(right.name);
//right.name = 'Something else'; 
//# sourceMappingURL=app.js.map