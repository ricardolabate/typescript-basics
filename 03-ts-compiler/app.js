var myName = "Rick";
var myAge = 29;
var anything; //implicitly type any
anything = 12;
// function controlMe(isTrue: boolean){
//     let result: number;
//     if(isTrue){
//         result = 12;
//     }
//     return result;
// }
//error TS2454: Variable 'result' is used before being assigned.
function controlMe(isTrue, somethingElse) {
    var result;
    if (isTrue) {
        result = 12;
    }
    result = 33;
    return result;
}
//# sourceMappingURL=app.js.map