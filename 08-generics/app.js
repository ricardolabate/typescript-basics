//Generics are a way of getting the code to be flexible while it 
//makes sure that we're getting the righ type of code
//Simple Generic
// function echo(data: any){
//     return data;
// }
// console.log(echo("Max"));
// console.log(echo(27).length);
// console.log(echo({ name: "Max", age: 27 }));
//Better generic
//<T> makes a generic function
function betterEcho(data) {
    return data;
}
console.log(betterEcho("Max").length);
console.log(betterEcho(27));
console.log(betterEcho({ name: "Max", age: 27 }));
//Built-in Generics
//Array is a generic type by default
var testResults = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);
//Generic Types and Arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["Apple", "Banana"]);
//Generic Types
//this is a type <T>(data: T) => T it's generic because I'm using the <T>
var echo2 = betterEcho;
console.log(echo2("Something"));
//Generic Class and Constraints
//generic type declaration
var SimpleMath = (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = "10";
// simpleMath.baseValue = "Something";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
//# sourceMappingURL=app.js.map