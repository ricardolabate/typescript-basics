let myName: string = "Rick";
let myAge: number = 29;
let anything; //implicitly type any
anything = 12;

// function controlMe(isTrue: boolean){
//     let result: number;
//     if(isTrue){
//         result = 12;
//     }
//     return result;
// }

//error TS2454: Variable 'result' is used before being assigned.

function controlMe(isTrue: boolean, somethingElse: boolean){
    let result: number;
    if(isTrue){
        result = 12;
    }
    result = 33;
    return result;
}

//error TS6133: 'somethingElse' is declared but never used.