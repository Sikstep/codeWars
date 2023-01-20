"use strict";
// #1
function otherAngle(a, b) {
  let whole = 180;
  whole -= a + b;
  return whole;
}

// #2// Sum Numbers
// let arr = [1, 5.2, 4, 0, -1];
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
// #14
function invert(array) {
  return array.map((a) => a * -1);
}
// #15
function repeatStr(n, s) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    result += s;
  }
  return result;
}
console.log(repeatStr(5, "Hello"));
// #16
function addLength(str) {
  return str.split(" ").map((a) => `${a} ${a.length}`);
}
console.log(addLength("Lost my soul"));

// #17
function powersOfTwo(n) {
  let result = [],
    i = 0;
  while (i <= n) {
    result.push(2 ** i);
    i++;
  }
  return result;
}
console.log(powersOfTwo(2));
// #18
function grow(x) {
  return x.reduce((total, el) => total * el, 1);
}
console.log(grow([0, 2, 5]));
// #19
function shortcut(string) {
  let newString = [];
  for (key of string.split("")) {
    console.log(key);
    if (key == "e" || key == "a" || key == "i" || key == "u" || key == "o") {
      continue;
    } else {
      newString.push(key);
    }
  }
  return newString.join("");
}

console.log(shortcut("hello"));

// best solution:
function shortcut(string) {
  return string.replace(/[aeiou]/g, "");
}

// #20
function findSmallestIntt(args) {
  let newArgs = args.sort((a, b) => a - b).shift();
  return newArgs;
}
console.log(
  findSmallestIntt([
    -5, 5, 1, -32, -45, 122, -56, -100, -54, -132, -186, -115, -154, -245,
  ])
);

// best solution:
function findSmallestInt(args) {
  return Math.min(...args);
}
let arrA = [1, 5, -12, 2, 4, -19, -255];
console.log(Math.max(...arrA));
// #21
function trim(str, size) {
  if (str.length <= size) {
    return str;
  } else if (str.length <= 3) {
    return `${str.substr(0, size)}...`;
  } else {
    return `${str.substr(0, size - 3)}...`;
  }
}

console.log(trim("Creating kata is fun", 14));

// best solution:
function trimm(arr, size) {
  return arr.length <= size
    ? arr
    : arr.slice(0, arr.length > 3 ? size - 3 : size) + "...";
}

console.log(trimm("Lost my soul bro!!!", 50));
// №22
// const arr = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 15, -25, 10, -11, -12, -13, -14, -15,
// ];

function countPositivesSumNegatives(input) {
  let newArr = [];
  if (input === null || input.length === 0) {
    return [];
  } else {
    newArr.push(input.filter((a) => a > 0).length);
    newArr.push(input.filter((a) => a < 0).reduce((a, b) => a + b, 0));
  }
  return newArr;
}
console.log(countPositivesSumNegatives([]));
// #23
const reverseSeq = (n) => {
  let arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
};
console.log(reverseSeq(15));
// #24
function solution(str) {
  return str.split("").reverse().join("");
}
console.log(solution("Alegarda"));

// №25
var isSquare = function (n) {
  return Number.isInteger(Math.sqrt(n)) ? true : false;
};
console.log(isSquare(121));

// best solution

// var isSquare = function(n){
//   return Number.isInteger(Math.sqrt(n));
// }
// console.log(isSquare(121));

// #26
function countSheeps(arrayOfSheep) {
  let count = 0;
  for (let key of arrayOfSheep) {
    if (key) {
      ++count;
    }
  }

  return count;
}

console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);

// best solution
// function countSheeps(arrayOfSheeps) {
//   return arrayOfSheeps.filter(Boolean).length;
// }
let boolArr = [true, true, false, false, true];
console.log(boolArr.filter(Boolean));

// #25
function findAverage(array) {
  return array.length === 0
    ? 0
    : array.reduce((a, b) => a + b, 0) / array.length;
}
console.log(findAverage([]));

// #26
function digitize(n) {
  return n
    .toFixed()
    .split("")
    .reverse()
    .map((a) => +a);
}
console.log(digitize(35231));

// best solution
function digitize(n) {
  return String(n).split("").reverse().map(Number);
}
console.log(digitize(35231));

// #27
function betterThanAverage(classPoints, yourPoints) {
  classPoints.push(yourPoints);
  return (
    classPoints.reduce((a, b) => a + b, 0) / classPoints.length < yourPoints
  );
}
console.log(betterThanAverage([1, 5, 6, 6, 7], 98));

// #28
function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

// #29
function validatePIN(pin) {
  if (String(pin).length !== 4 && String(pin).length !== 6) {
    return false;
  }

  const newPin = pin
    .trim()
    .split("")
    .filter((el) => !Number.isNaN(Number(el)));

  return (
    Number.isInteger(Number(pin)) &&
    !(newPin.length !== 4 && newPin.length !== 6)
  );
}
console.log(validatePIN("67-104"));

function includesinStr(str) {
  let glasnie = ["a", "e", "i", "y", "u", "o"];
  let count = 0;
  for (let key of str.toLowerCase().split("")) {
    if (glasnie.includes(key)) {
      count += 1;
    }
  }
  return count;
}

console.log(includesinStr("Lol if i wont be YyyyYY iIii a bad lost my soul"));

function includesinStrr(str) {
  let glasnie = ["a", "e", "i", "y", "u", "o"];

  return str
    .toLowerCase()
    .split("")
    .filter((a) => glasnie.includes(a)).length;
}

console.log(includesinStrr("Lol if i wont be Yyyii a bad lost my soul"));
