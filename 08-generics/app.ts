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
function betterEcho<T>(data: T){
    return data;
}

console.log(betterEcho("Max").length);
console.log(betterEcho<number>(27));
console.log(betterEcho({ name: "Max", age: 27 }));

//Built-in Generics
//Array is a generic type by default
const testResults: Array<number>  = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);

//Generic Types and Arrays
function printAll<T>(args: T[]){
    args.forEach((element) => console.log(element));
}
printAll<string>(["Apple", "Banana"]);

//Generic Types
//this is a type <T>(data: T) => T it's generic because I'm using the <T>
const echo2: <T>(data: T) => T = betterEcho;

console.log(echo2<string>("Something"));

//Generic Class and Constraints
//generic type declaration
class SimpleMath<T extends number | string, U extends number | string>{
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = "10";
// simpleMath.baseValue = "Something";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());