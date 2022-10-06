// #todo

'use strict';

console.log('-- begin --');

// --- declare and initialize variables ---

let a = 'y';
let b = 'w';
let c = 'z';
let d = 'x';
let temp;

// --- swap values ---

temp = a;
console.assert(temp === 'y');
console.assert(a === 'y');

a = b;
console.assert(a === 'w');
console.assert(b === 'w');

b = d;
console.assert(b === 'x');
console.assert(d === 'x');

d = c;
console.assert(d = 'z');
console.assert(temp = 'z')

c = temp; 
console.assert(c = 'y');
console.assert(temp = 'y')



// --- test final values ---

console.assert(a === 'w', 'Test 1');

console.assert(b === 'x', 'Test 2');

console.assert(c === 'y', 'Test 3');

console.assert(d === 'z', 'Test 4');

console.assert(temp === 'y', 'Test 5');

console.log('-- end --');
