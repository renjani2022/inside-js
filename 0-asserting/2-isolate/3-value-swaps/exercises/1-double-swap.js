// #todo

'use strict';

console.log('-- begin --');

// --- declare and initialize variables ---

let a = 'y';
let b = 'x';
let temp;

// --- swap values ---

temp = a;
console.assert(temp === 'y');
console.assert(a === 'y');

a = b;
console.assert(a === 'x');
console.assert(b === 'x');

b = temp;
console.assert(b === 'y');
console.assert(temp === 'y');

// --- test final values ---

const test1 = a === 'x';
console.assert(test1, 'Test 1');

const test2 = b === 'y';
console.assert(test2, 'Test 2');

const test3 = temp === 'y';
console.assert(test3, 'Test 3');

console.log('-- end --');

