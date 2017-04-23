//Decorators
// Functions you can attach to classes, methods and properties
// and the work with them or transform them, like META PROGRAMMING
// The chance of extending a class and introducing a whole lot of new functionality
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//creating a Decorator (it's just a function)
function logged(constructorFn) {
    console.log(constructorFn);
}
//attaching a Decorator to a class
var Person = (function () {
    function Person() {
    }
    return Person;
}());
Person = __decorate([
    logged
], Person);
//# sourceMappingURL=app.js.map