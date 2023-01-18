"use strict";
// #1
function otherAngle(a, b) {
  let whole = 180;
  whole -= a + b;
  return whole;
}

// #2// Sum Numbers
let arr = [1, 5.2, 4, 0, -1];
let arr2 = [];

function sum(numbers) {
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

const newArr = arr.reduce((total) => {
  return total + arr;
}, 0);

const arr3 = arr.reduce((acc, el) => acc + el, 0);
console.log(arr3);

// #3
function DNAtoRNA(dna) {
  let a, b;
  a = dna.indexOf("T");
}

let a = "GCAT",
  b = "ACTG",
  c = "TCAG";
console.log(a.indexOf("T"));
console.log(b.indexOf("T"));
console.log(c.indexOf("T"));
let d = `${a[0]}${a[1]}${a[2]}U`;
console.log(d);

// #4 Even or Odd
function evenOrOdd(number) {
  return number % 2 === 0 ? `Even` : `Odd`;
}

console.log(evenOrOdd(7));
console.log(evenOrOdd(2));
console.log(evenOrOdd(-4));
console.log(evenOrOdd(-17));

// #5
function paperwork(n, m) {
  return n < 0 || m < 0 ? 0 : n * m;
}
console.log(paperwork(5, 3));
console.log(paperwork(-5, 3));
console.log(paperwork(0, 3));
console.log(paperwork(5, 15));

// #6
function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}

console.log(simpleMultiplication(2));
console.log(simpleMultiplication(1));
console.log(simpleMultiplication(8));
console.log(simpleMultiplication(4));
console.log(simpleMultiplication(5));

// #7
function century(year) {
  year /= 100;
  let a = Math.ceil(year);
  return a;
}

console.log(century(1831));
console.log(century(1601));
console.log(century(2000));

// #8
function squareSum(numbers) {
  const newNum = numbers
    .map((el) => el ** 2)
    .reduce((total, elem) => total + elem, 0);
  return newNum;
}
console.log(squareSum([9, 24, 4, 2, 6, 8]));

// #9
function numberToString(num) {
  let a = `${num}`;
  return a;
}

console.log(typeof numberToString(-123));

// #10
const stringToNumber = function (str) {
  return +str;
};

console.log(typeof stringToNumber("5"));

// #11
function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

// #12
function litres(time) {
  let litres = 0;
  litres = Math.floor(time * 0.5);
  return litres;
}
litres(11.8);

// #13
function past(h, m, s) {
  return (h * 60 * 60 + m * 60 + s) * 1000;
}
