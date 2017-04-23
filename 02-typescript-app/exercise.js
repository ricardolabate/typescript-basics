var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
//my solution
// type bankAccount = { money: number, deposit: (value: number) => void }
// let rickBankAccount: bankAccount = {
//     money: 2000,
//     deposit: function(value) {
//         this.money += value;
//     }
// }
// let rick = {
//     name: "Rick",
//     bankAccount: rickBankAccount,
//     hobbies: ["Sports", "Cooking"]
// };
// rick.bankAccount.deposit(3000);
// console.log(rick);
// //other person
// let maxBankAccount: bankAccount = {
//     money: 4000,
//     deposit: function(value) {
//         this.money += value;
//     }
// }
// let max = {
//     name: "max",
//     bankAccount: maxBankAccount,
//     hobbies: ["Fishing", "Studying"]
// };
// max.bankAccount.deposit(3000);
// console.log(max);
