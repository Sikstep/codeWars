'use strict';
// #1
function otherAngle(a, b) {
  let whole = 180;
  whole -= a + b;
  return whole;
}

// #2// Sum Numbers
let arr = [1, 5.2, 4, 0, -1];
let arr2 = [];

function sum (numbers) {
    "use strict";
    if (numbers.length === 0) {
        return 0;
    } else {
        let newSum = 0;
        for (let key of numbers) {
            newSum += key;
        }
        return newSum;
    }
}

console.log(sum(arr));
console.log(sum(arr2));

const newArr = arr.reduce((total) => {return total + arr}, 0);

const arr3 = arr.reduce((acc, el) => acc + el, 0);
console.log(arr3);

// #3
// function DNAtoRNA(dna) {
//     let a,
//         b;
//     a = dna.indexOf('T');
        

//   }


// let a = 'GCAT',
//     b = 'ACTG',
//     c = 'TCAG';
// console.log(a.indexOf('T'));
// console.log(b.indexOf('T'));
// console.log(c.indexOf('T'));

// #4 Even or Odd
function evenOrOdd(number) {
  return number % 2 === 0 ? `Even` : `Odd`;
}

console.log(evenOrOdd(7));
console.log(evenOrOdd(2));
console.log(evenOrOdd(-4));
console.log(evenOrOdd(-17));


