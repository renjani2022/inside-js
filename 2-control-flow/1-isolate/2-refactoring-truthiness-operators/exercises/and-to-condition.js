// #todo

'use strict';

console.log('-- begin --');

// refactor this code to use a conditional instead of &&

// try different values and different types
const a = 200;
console.log(a);


let isBigNumber;
if (typeof(a) > 1000) {
  isBigNumber = false;
} else {
  isBigNumber = true;
}

console.log(isBigNumber);

console.log('-- end --');


/*
const a = _;
console.log(a);

const isBigNumber = typeof a === 'number' && a > 1000;
console.log(isBigNumber);

console.log('-- end --');
*/
