// #todo

'use strict';

console.log('-- begin --');

/* Uppercaseify

  you can use for loops to do some logic for each element in a string

  this loop should create a new string with each character upper-cased

*/

const lowerCaseString = 'abcde';
console.log('lowerCaseString:', lowerCaseString);

let upperCaseString = '';

for (let letter = 0; letter < 5; letter++) {
  const nextLetter = lowerCaseString[letter];
  const letterUpperCased = nextLetter.toUpperCase();
  upperCaseString += letterUpperCased;

  console.log(upperCaseString); // your stepper variable
  console.log('upperCaseString:', upperCaseString);
}

console.assert(
  upperCaseString === 'ABCDE',
  'upper case string is all upper case',
);

console.log('-- end --');
