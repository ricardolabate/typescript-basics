/**
 * Making our code MODULAR
 */
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCircumference = calculateCircumference;
    ;
})(MyMath || (MyMath = {}));
;
/**
 * Making our code MODULAR
 */
var MyMath;
(function (MyMath) {
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
    ;
})(MyMath || (MyMath = {}));
;
/**
 * Typescript supports modular code
 * 2 ways of manage your project
 * Namespaces and Modules
 */
//Namespaces - difference between Namespaces and Modules
// namespace MyMath{
//     //this const is registered on the global scope
//     const PI = 3.14;
//     export function calculateCircumference(diameter: number) {
//         return diameter * PI;
//     }
//     export function calculateRectangle(width: number, length: number) {
//         return width * length;
//     }
// }
//Namespace Imports
/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />
//this const IS NOT registered on the global scope
var PI = 2.99;
// //we access the function via dot notation outside of the namespace 
console.log(MyMath.calculateRectangle(10, 20));
console.log(MyMath.calculateCircumference(3));
// console.log(PI); 
