// #todo

'use strict';

console.log('-- begin --');

// refactor this code to use || instead of a conditional

// try different values and different types
const isAfterFive = "drink coffee";
const isTheWeekend = "have fun";
console.log(isAfterFive, isTheWeekend);

let stopWorking =
(isAfterFive === true || isTheWeekend === true);
console.log(stopWorking);


//let stopWorking = isAfterFive === true;
//if (!stopWorking) {
//  stopWorking = isTheWeekend === true; }
