/**
 * Making our code MODULAR
 */

namespace MyMath{
    //Namespaces in Namespaces
    export namespace Circle{
        const PI = 3.14;

        export function calculateCircumference(diameter: number) {
            return diameter * PI;
        };
    };
};