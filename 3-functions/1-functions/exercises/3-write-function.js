// #todo

'use strict';
console.log('-- begin --');

// write the function to pass the assertions
// fill in the documentation to describe the function

const scramble = (param1, param2, param3) => {
  return param3 + param1
  + param2;
};

const _1_expect = 'yxz';
const _1_actual = scramble('x', 'z', 'y');
console.log(_1_actual);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'zxy';
const _2_actual = scramble('x', 'y', 'z');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'yzx';
const _3_actual = scramble('z', 'x', 'y');
console.assert(_3_actual === _3_expect, 'Test 3');


function isLegalAge (age) {
  if (age >= 18) {
    return true;
  } else {return false;
  }
}

function canDrive(age) {
  if(isLegalAge(age)) {
    console.log('You can drive')
  } else {
    console.log('You can not drive')
  }
}

function isLegalAge (age) {
  return age >=18;
}

canDrive(30);


console.log('-- end --');
