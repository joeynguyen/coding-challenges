// What is the result of the code below?
function myFunction(y1, y2, ...y3) {
  const [x1, ...[result]] = y3;
  console.log(result);
}

const myArray = ['rock', 'paper','scissors','lizard','spock'];

myFunction(...myArray);


// What is the result of the code below?
let x = 'fog';
function first() {
  console.log(x);
}
x = 'dog';
function second() {
  let x = 'log'.
  first();
}
second();


// What is the result of the code below?
const obj  = {
  prop: 1,
}
console.log(obj.prop);

Object.defineProperty(obj, 'prop', {
  writable: false,
  value: 2,
})
console.log(obj.prop);

obj.prop = 3;
console.log(obj.prop);


// What is the result of the code below?
let myArray = [1, 2];
myArray.customProperty = true;


for (const index in myArray) {
    const element = myArray[index];
    console.log(element);
}


// What is the result of the code below?
function* gen1() {
  console.log(yield 1);
  console.log(yield 2);
  console.log(yield 3);
}

const iterator = gen1();

console.log(iterator.next('a').value)
console.log(iterator.next('b').value)
console.log(iterator.next('c').value)


// What is the result of the code below?
"use strict";
try {
  let green;

  grnee = false;

  console.log(grnee);
} catch(e) {
  console.log();
}


// What is the result of the code below?
const myArray = new Array(2);

myArray[1] = 1
myArray[3] = 3

console.log('Length', myArray.length);

console.log('elements:')
for (const element of myArray) {
  console.log('\t', element);
}


// What is the result of the code below?
// Function apiCall takes 50ms to asynchronously return the string 'b'. In what order do these letters log to the console?

async function apiCall() {
    return new Promise(resolve => {
        setTimeout(() => {resolve('b')}, 50);
    })
}


async function logger() {
    setTimeout(() => {console.log('a')}, 10);
    console(await apiCall());
    console.log('c');
}
logger();


// What is the result of the code below?
for (var i =0; i< 3; i++) {
    setTimeout(function() {
        f(i);
    }, 0)
}
for (var i =0; i< 3; i++) {
    setTimeout(function() {
        f(i);
    }, 0)
}
function f(str) {
    console.log(i)
}
