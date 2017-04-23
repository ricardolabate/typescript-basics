//Decorators
// Functions you can attach to classes, methods and properties
// and the work with them or transform them, like META PROGRAMMING
// The chance of extending a class and introducing a whole lot of new functionality

//creating a Decorator (it's just a function)
function logged(constructorFn: Function){
    console.log(constructorFn);
}

//attaching a Decorator to a class
@logged
class Person{
    //logs information of the class
}