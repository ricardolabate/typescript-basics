//Creating Classes and Class properties
class Person{
    name: string; //this property is public by default
    private type: string; //access only inside of this class, can't set it ou read it outside
    protected age: number = 29; //available to any object or class inherit from this class
    
    //this is a constructor function
    constructor(name: string, public username: string){
        //this.name (refers to the class) name: string 
        this.name = name; //name (refers to the argument passed to the constructor)
    }

    //Class method
    printAge(){
        //age is protected but since we're inside of the class scope we can invoke it
        console.log(this.age);
        this.setType("Old guy");
    }

    //type is private but accessible here because we're inside of the block-scope
    //now with Access modifier
    private setType(type: string){
        this.type = type; //to make it inherit from the class' property
        console.log(this.type);
    }
}

const person = new Person("Max", "max" );
// console.log(person);
console.log(person.name, person.username);
person.printAge();
//person.setType("Cool guy"); //Won't work with private method

//Inheritance
class Rick extends Person{
    //default property overwrites the property inherit from "Person" class 
    //name = "Rick";

//Inheritance and constructor
    constructor(username: string){
        //calls the constructor from the parent class
        super("Rick", username); 
        this.age = 31;
        //console.log(this.type); //error TS2341: Property 'type' is private and only accessible within class 'Person'.
    }
} 

const rick = new Rick("rick");
console.log(rick);

//Getter & Setters - gives the ability to running code before setting a value
class Plant{
    //setting a default value
    private _species: string = "Default";

    get species(){
        return this._species;
    }

    //the property name is accesible to the outside later on 
    //it is set like a method to execute code
    set species(value: string){
        if(value.length > 3){
            this._species = value;
        }else{
            this._species = "default";
        }
    }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species); //"default" - it doesn't match the condition to "set species()"
plant.species = "Green Herb";
console.log(plant.species); 

//Static Properties & Methods
class Helpers{
    //Static is a way of letting the property accessible outside of the class
    static PI: number = 3.14;
    static calcCircumference(diameter: number) : number{
        return this.PI * diameter;
    }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

//Abstract Classes - marked with abstract keyword, can't be instatiated directly
//you have to inherit from them ALWAYS
abstract class Project{
    projectName: string = "Default";
    budget: number;

    //Abstract Method
    //implement a method that a child class will inherit from
    //it doesn't have a logic, because the child class will define that
    abstract changeName(name: string): void;

    calcBudget(){
        return this.budget * 2;
    }
}

class ITProject extends Project{
    changeName(name: string): void{
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);

//Private Constructors
class OnlyOne{
    private static instance: OnlyOne;
    //"readonly" Properties
    public readonly name: string;

    private constructor(name: string){
        this.name = name;
    }

    //Singleton Pattern:
    //Only one instance at a time.
    //The conventional singleton pattern is really something that is used 
    //to overcome the fact that all code must be in a class.
    static getInstance(){
        if(!OnlyOne.instance){
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
}

//let wrong = new OnlyOne('The Only One');
//how to instatiate using a method
let right = OnlyOne.getInstance();
console.log(right);

//"readonly" Properties
console.log(right.name);
//right.name = 'Something else';