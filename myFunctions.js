"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // num.toUpperCase()
    return num + 2;
}
addTwo(5);
//string
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("amjad");
//signup a user
function signUp(email, password, isAdmin) { }
function loginUser(email, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
signUp("amjadali", "amjad@gmail.com", true);
loginUser("amjadali", "amjad@gmail.com");
//returning from function
function addThree(num) {
    return num + 2;
    //   return "amjad";
}
addThree(5);
//Return more than one type
// function getValue(val: number):boolean{
//     if(val>5){
//         return true
//     }
//     return "200 OK"
// }
//In arrow function how we do
var getHello = function (str) {
    return "";
};
var heros = ["captain america", "thor", "hulk", "iron man"];
// const heros=[1,2,4]
var heroStrings = heros.map(function (hero, index) {
    return "".concat(index, " hero is ").concat(hero);
});
console.log(heroStrings);
