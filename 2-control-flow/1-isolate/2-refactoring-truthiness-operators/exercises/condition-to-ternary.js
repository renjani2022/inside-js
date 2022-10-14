// #todo

'use strict';

console.log('-- begin --');

// refactor this code to use a _?_:_ instead of a conditional

// try different values and different types
const isLoggedIn = "log in";
const secretInformation = "secret";
const warningMessage = "try again";
console.log(isLoggedIn, secretInformation, warningMessage);

let toDisplay   
(isLoggedIn? toDisplay = secretInformation: toDisplay = warningMessage);
console.log(toDisplay);

console.log('-- end --');


//let toDisplay;
//if (isLoggedIn) {
//  toDisplay = secretInformation;
//} else {
//  toDisplay = warningMessage;
//}
//console.log(toDisplay);

