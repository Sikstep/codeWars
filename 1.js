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

// #30
function fakeBin(x) {
  return x
    .split("")
    .map((a) => (Number(a) < 5 ? 0 : 1))
    .join("");
}
console.log(fakeBin("5513125123123"));

// #31
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump - mpg * fuelLeft <= 0;
};
console.log(zeroFuel(100, 50, 2.5));

// #32
function boolToWord(bool) {
  return bool ? "Yes" : "No";
}
console.log(true);

// #33
function XO(str) {
  if (str.match(/[xo]/gi) == null) {
    return true;
  } else if (str.match(/[o]/gi) == null || str.match(/[x]/gi) == null) {
    return false;
  } else if (str.match(/[x]/gi).length == str.match(/[o]/gi).length) {
    return true;
  } else {
    return false;
  }
}
console.log(XO("asdxxxoooooofwadw"));

// best solution
function XOo(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
console.log("as000 234 2135123dw0213j".match(/[013]/gi));

// #34
function removeSmallest(numbers) {
  if (numbers.length == 0) {
    return [];
  } else {
    let numIndex = numbers.indexOf(Math.min(...numbers));
    let newNumbers = [...numbers];
    let deleteEl = newNumbers.splice(numIndex, 1);
    return newNumbers;
  }
}
console.log(removeSmallest([5, 8, 9, 15, 4, 1, 3, 4, 1]));
console.log(removeSmallest([6, 2, 6, 7, 8, 8, 8, 2, 3, 1]));

// #35
function mango(quantity, price) {
  return (quantity - Math.floor(quantity / 3)) * price;
}
console.log(mango(32, 72));
console.log(1584 / 72);
console.log(1512 / 72);
console.log(Math.floor(32 / 3) * 2 * 72);

// #35
const quarterOf = (month) => {
  return Math.ceil(month / 3);
};

//  #36
function _if(bool, func1, func2) {
  return bool ? console.log(func1()) : console.log(func2());
}

// №37
function angle(n) {
  return 180 * (n - 2);
}
console.log(angle(3));
console.log(angle(4));
console.log(angle(5));

// #38
var number = function (busStops) {
  let total = 0;
  for (let key of busStops) {
    if (Array.isArray(key)) {
      total += key[0];
      total -= key[1];
    }
  }
  return total;
};

console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
);

// best solution:

const number1 = (busStops) =>
  busStops.reduce((rem, [on, off]) => rem + on - off, 0);

// #39

function getSum(a, b) {
  let total = 0;
  if (a > b) {
    total = b;
    for (let i = b; i < a; i++) {
      total += i + 1;
    }
    return total;
  } else if (a == b) {
    return a;
  } else {
    total = a;
    for (let i = a; i < b; i++) {
      total += i + 1;
    }
    return total;
  }
}
console.log(getSum(2, 2));

// best solution
const GetSum = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
};

// #40 Вернуть все согласные на англ. языке со строки
function consonantCount(str) {
  return str.match(/[qwrtypsdfghjklzxcvbnm]/gi) == null
    ? 0
    : str.match(/[qwrtypsdfghjklzxcvbnm]/gi).length;
}
console.log(
  consonantCount(
    "They1w1&123//./`$% need more money i think. Or let do some crime, and we can get bank?"
  )
);
console.log(consonantCount("h^$&^#$&^elLo world"));
console.log(consonantCount("0123456789"));
console.log(consonantCount(""));
console.log("0123456789".match(/[qwrtypsdfghjklzxcvbnm]/gi));

console.log(consonantCount());

// #40

function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  let result = [];
  for (let key of birds) {
    if (!geese.includes(key)) {
      result.push(key);
    } else {
      continue;
    }
  }
  return result;
}
console.log(
  gooseFilter([
    "Mallard",
    "Hook Bill",
    "African",
    "Crested",
    "Pilgrim",
    "Toulouse",
    "Blue Swedish",
  ])
);

// best solution
function gooseFilterr(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter((b) => !geese.includes(b));
}

// #41
function howManyLightsabersDoYouOwn(name) {
  return arguments.length != 0 &&
    name !== "" &&
    name.length == 4 &&
    name.includes("Zach")
    ? 18
    : 0;
}

console.log(howManyLightsabersDoYouOwn("Zach"));

// best solution;

function howManyLightsabersDoYouOwn1(name) {
  return name === "Zach" ? 18 : 0;
}

// #42
function barTriang(p1, p2, p3) {
  let a = (p1[0] + p2[0] + p3[0]) / 3;
  let b = (p1[1] + p2[1] + p3[1]) / 3;
  return [+a.toFixed(4), +b.toFixed(4)];
}

console.log(barTriang([4, 6], [12, 4], [10, 10]));
console.log(barTriang([0, 0], [1, 3], [-1, 6]));

// #43
function positiveSum(arr) {
  return arr.filter((el) => el >= 0).reduce((total, el) => total + el, 0);
}

console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));
console.log(positiveSum([-1, -2, -3, -4, -5]));

// #44
function makeNegative(num) {
  return num <= 0 ? num : (num *= -1);
}
console.log();
console.log(("b" + "a" + +"a" + "a").toLowerCase());
// #45
function removeChar(str) {
  return str.split("").splice([1], [str.length - 2]);
}

console.log(removeChar("eloquent"));

//  best solution
function removeCharr(str) {
  return str.slice(1, -1);
}

// #46
var summation = function (num) {
  counter = 0;
  for (let i = 1; i <= num; i++) {
    counter += i;
  }
  return counter;
};

console.log(summation(1));
console.log(summation(2));
console.log(summation(8));

// #46

function noSpace(x) {
  return x
    .split("")
    .filter((el) => el !== " ")
    .join("");
}
console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

// best solution:

function noSpace1(x) {
  return x.replace(/\s/g, "");
}

// #47
function abbrevName(name) {
  return name
    .split(" ")
    .map((el) => el.split("").slice(0, 1))
    .join(".")
    .toUpperCase();
  // code away
}
console.log(abbrevName("Sam Harris"));
console.log(abbrevName("Patrick Feenan"));
console.log(abbrevName("Evan Cole"));
console.log(abbrevName("P Favuzzi"));
console.log(abbrevName("David Mendieta"));
