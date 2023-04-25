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

// #48
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}

console.log(isDivisible(3, 1, 3));

// #55
function check(a, x) {
  return a.includes(x);
}

console.log(check([66, 101], 66));
console.log(check([101, 45, 75, 105, 99, 107], 107));
console.log(check(["t", "e", "s", "t"], "e"));
console.log(check(["what", "a", "great", "kata"], "kat"));

function bmi(weight, height) {
  let result = weight / height ** 2;

  if (result <= 18.5) return `Underweight`;
  if (result <= 25) return `Normal`;
  if (result <= 30) return `Overweight`;
  if (result > 30) return `Obese`;
}

console.log(bmi(80, 1.8));

// #56
var countSheep = function (num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
};

console.log(countSheep(0));
console.log(countSheep(1));
// #Камень ножницы бумага!
const rps = (p1, p2) => {
  let r = "rock",
    p = "paper",
    s = "scissors";
  if (p1 === p2) return "Draw!";
  if (p1 === r && p2 === s) {
    return "Player 1 won!";
  }
  if (p1 === r && p2 === p) {
    return "Player 2 won!";
  }
  if (p1 === p && p2 === r) {
    return "Player 1 won!";
  }
  if (p1 === p && p2 === s) {
    return "Player 2 won!";
  }
  if (p1 === s && p2 === p) {
    return "Player 1 won!";
  }
  if (p1 === s && p2 === r) {
    return "Player 2 won!";
  }
};

console.log(rps("rock", "scissors"));
// best solution
const rps1 = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = { rock: "scissors", paper: "rock", scissors: "paper" };
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};

// #поиск в массиве и включение в другой массив результата
export const students = [
  { id: 1, name: "Bob" },
  { id: 2, name: "Alex" },
  { id: 3, name: "Ann" },
  { id: 4, name: "Charley" },
];

export const friends = {
  1: ["Oliver", "Jack", "Oscar"],
  2: ["Jack", "Lewis", "Thomas"],
  3: ["William", "Michael", "Lewis"],
  4: ["Oscar", "James", "William"],
};

const getMutualFriends = (st_1, st_2) => {
  const result = [];
  friends[st_1.id].forEach((f) =>
    friends[st_2.id].includes(f) ? result.push(f) : null
  );
  return result;
};

// #57
function sumArray(array) {
  if (array === null || array === undefined || array.length <= 2) return 0;
  let newArr = array.sort((a, b) => a - b).slice(1, -1);
  return newArr.reduce((total, el) => total + el, 0);
}
console.log(sumArray([0, 1, 6, 10, 10]));

// #58 reduce задачка на подсчёт очков в матче
function points(games) {
  let newArr = games.map((el) => el.split(":"));
  return newArr.reduce(
    (total, el) =>
      el[0] > el[1] ? total + 3 : el[0] == el[1] ? total + 1 : total + 0,
    0
  );
}

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);
// #59
function monkeyCount(n) {
  let numbers = [];
  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }
  return numbers;
}

console.log(monkeyCount(10));

// №60
function getGrade(s1, s2, s3) {
  const average = (s1 + s2 + s3) / 3;

  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  if (average < 100) return "A";
}

console.log(getGrade(95, 90, 93));

// #61

function bonusTime(salary, bonus) {
  return bonus ? `£${salary * 10}` : `£${salary}`;
}

console.log(bonusTime(10000, true));

// #62

const areaOrPerimeter = function (l, w) {
  return l === w ? l ** 2 : (l + w) * 2;
};

console.log(areaOrPerimeter(3, 3));
console.log(areaOrPerimeter(6, 10));

// №63

function greet(name, owner) {
  return name == owner ? "Hello boss" : "Hello guest";
}

console.log(greet("Daniel", "Daniel"));
console.log(greet("Greg", "Daniel"));

// #64

function removeExclamationMarks(s) {
  return s.replace(/!/gi, "");
}

console.log(removeExclamationMarks("Hello!!!! World!"));

function rentalCarCost(d) {
  total = d * 40;
  switch (true) {
    case d >= 3 && d < 7:
      return total - 20;
    case d >= 7:
      return total - 50;

    default:
      return total;
  }
}

console.log(rentalCarCost(1));

// #65
function feast(beast, dish) {
  const a = `${beast[0]}${beast[beast.length - 1]}`;
  const b = `${dish[0]}${dish[dish.length - 1]}`;
  return a === b;
}

console.log(feast("great blue heron", "garlic naan"));

// #66
function updateLight(current) {
  return current === "green"
    ? "yellow"
    : current === "yellow"
    ? "red"
    : "green";
}

console.log(updateLight("green"));

// # рекурсия
// сама задача через цикл
function pow(x, n) {
  let result = 1;
  // умножаем result на x n раз в цикле
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
console.log(pow(2, 3)); //8

function pow1(x, n) {
  if (n != 1) {
    return x * pow(x, n - 1);
  } else {
    return x;
  }
}

console.log(pow1(2, 3));

function pow2(x, n) {
  return n == 1 ? x : x * pow(x, n - 1);
}
console.log(pow2(2, 3));

// Рекурсия факториал

function factorial(a) {
  let res = 1;
  for (let i = 1; i <= a; i++) {
    res = res * i;
  }
  return res;
}

console.log(factorial(5));

function fuctorial1(a) {
  return a == 1 ? a : a * fuctorial1(a - 1);
}

console.log(fuctorial1(5));

// Рекурсия фибоначи

function fionachiForI(n) {
  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];
    result.push(a + b);
  }

  return result;
}

console.log(fionachiForI(8));

function fibonachi(n) {
  return n <= 1 ? n : fibonachi(n - 2) + fibonachi(n - 1);
}

console.log(fibonachi(10));

let count = 0;

function fib(n) {
  count++;
  console.log("count", count, "n-", n);

  if (n < 2) {
    return n;
  }
  const a = fib(n - 1);
  const b = fib(n - 2);
  console.log("a+b", a + b);
  return a + b;
}

console.log("fib-", fib(5)); //2

function fibonacci2(n) {
  if (n <= 2) {
    return [1, 1];
  }
  const res = fibonacci2(n - 1);
  res.push(res[res.length - 1] + res[res.length - 2]);
  return res;
}
console.log(fibonacci2(10));

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function logListWhile(list) {
  while (list) {
    console.log(list.value);
    list = list.next;
  }
}

console.log(logListWhile(list));

function logListRecursia(list) {
  if (list.next === null) {
    console.log(list.value);
    return;
  }
  console.log(list.value);
  logListRecursia(list.next);
}

console.log(logListRecursia(list));

console.log(list.value);

function test(list) {
  console.log(list.value);

  if (list.next) {
    test(list.next);
  }
}

console.log(test(list));

// #67
function setAlarm(employed, vacation) {
  return employed && !vacation;
}

console.log(setAlarm(true, true));

// #68 map

function doubleChar(str) {
  return str
    .split("")
    .map((el) => `${el}${el}`)
    .join("");
}
console.log(doubleChar("abcd"));

// #69
function firstNonConsecutive(arr) {
  let count = 0;
  let total = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let index1 = arr[i] + 1;
    let nextIndex = arr[i + 1];
    index1 !== nextIndex ? total.push(nextIndex) : count++;
  }

  return count === arr.length - 1 ? null : total;
}

// #70
function removeEveryOther(arr) {
  return arr.filter((el, index) => index % 2 === 0);
}

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));

// #71
function cockroachSpeed(s) {
  return Math.floor((s * 100000) / 3600);
}

console.log(cockroachSpeed(1.08));

// #72

function enough(cap, on, wait) {
  return cap - on - wait >= 0 ? 0 : (cap - on - wait) * -1;
}

console.log(enough(10, 5, 5));

// best solution

function enough1(cap, on, wait) {
  return Math.max(wait + on - cap, 0);
}

// #73
function chromosomeCheck(sperm) {
  return sperm.includes("Y")
    ? "Congratulations! You're going to have a son."
    : "Congratulations! You're going to have a daughter.";
}

console.log(chromosomeCheck("XY"));

// #74

function nearestSq(n) {
  return Math.round(Math.sqrt(n)) ** 2;
}
console.log(nearestSq(1));

// #75 deepfind задача на глубокий поиск в объектах

function deepFind(o, str, defaultValue) {
  const keys = str.split(".");
  let current = o;
  while (keys.length > 0) {
    const k = keys.shift();
    if (k in current) {
      current = current[k];
    } else {
      return defaultValue;
    }
  }
  return current;
}

const obj = {
  a: {
    b: {
      c: "d",
    },
    e: "f",
  },
  z: [{ a: "hello" }],
};

console.log(deepFind(obj, "a.b")); // { c : 'd' }
console.log(deepFind(obj, "a.b.c")); // 'd'
console.log(deepFind(obj, "a.e")); // 'f'
console.log(deepFind(obj, "z.0.a")); // 'f'
console.log(deepFind(obj, "a.x.e")); // undefined
console.log(deepFind(obj, "a.x.e", true)); // true
console.log(deepFind(obj, "a.x.e", "My default value")); //

// #76 task with bancnotes: Задача с банкоматом:
const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];

export function getBanknoteList(amountOfMoney) {
  let total = [];
  for (let i = 0; i < banknotes.length; i++) {
    if (amountOfMoney / banknotes[i] >= 1) {
      for (let j = 0; j < amountOfMoney / banknotes[i]; j++) {
        total.push(banknotes[i]);
        amountOfMoney -= banknotes[i];
      }
    }
  }
  return total;
}

console.log(getBanknoteList(2500));
console.log(getBanknoteList(23));

// #77
function hoopCount(n) {
  return n >= 10
    ? "Great, now move on to tricks"
    : "Keep at it until you get it";
}

console.log(hoopCount(3));

// #78
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return sonYearsOld * 2 === dadYearsOld
    ? 0
    : sonYearsOld * 2 <= dadYearsOld
    ? dadYearsOld - sonYearsOld * 2
    : (dadYearsOld - sonYearsOld * 2) * -1;
}
console.log(twiceAsOld(36, 7));

// best solution

function twiceAsOld1(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

// №79
function getPlanetName(id) {
  var name;
  switch (id) {
    case 1:
      name = "Mercury";
      break;
    case 2:
      name = "Venus";
      break;
    case 3:
      name = "Earth";
      break;
    case 4:
      name = "Mars";
      break;
    case 5:
      name = "Jupiter";
      break;
    case 6:
      name = "Saturn";
      break;
    case 7:
      name = "Uranus";
      break;
    case 8:
      name = "Neptune";
      break;
  }

  return name;
}

console.log(getPlanetName(2));

// best solution:

function getPlanetName1(id) {
  return {
    1: "Mercury",
    2: "Venus",
    3: "Earth",
    4: "Mars",
    5: "Jupiter",
    6: "Saturn",
    7: "Uranus",
    8: "Neptune",
  }[id];
}

// #80

function checkForFactor(base, factor) {
  return base % factor === 0;
}
console.log(checkForFactor(10, 2));

// #81
function getAge(inputString) {
  return +inputString[0];
}

// #82 регулярные выражения
function correct(string) {
  return string.replace(/[5]/g, "S").replace(/[0]/g, "O").replace(/[1]/g, "I");
}

console.log(correct("L0ND0N"));

// #83
function strCount(str, letter) {
  return str.split("").filter((el) => el === letter).length;
}

console.log(strCount("Hello", "o"));

// #84
function switchItUp(number) {
  switch (number) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";

    default:
      return "Error, text wrong!!!";
  }
}

console.log(switchItUp(1));

// best solution
switchItUp = (n) =>
  [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ][n];

// #85

var humanYearsCatYearsDogYears = function (humanYears) {
  let catYears = 0;
  let dogYears = 0;
  let totalYears = [];
  switch (true) {
    case humanYears === 1:
      catYears += 15;
      dogYears += 15;
      totalYears.push(humanYears, catYears, dogYears);
      break;
    case humanYears === 2:
      catYears += 24;
      dogYears += 24;
      totalYears.push(humanYears, catYears, dogYears);
      break;
    default:
      catYears = 24 + (humanYears - 2) * 4;
      dogYears = 24 + (humanYears - 2) * 5;
      totalYears.push(humanYears, catYears, dogYears);
      break;
  }

  return totalYears;
};

console.log(humanYearsCatYearsDogYears(1));

// best solution
var humanYearsCatYearsDogYears = function (y) {
  if (y == 1) return [1, 15, 15];
  if (y == 2) return [2, 24, 24];
  return [y, (y - 2) * 4 + 24, (y - 2) * 5 + 24];
};

// #86
function oddCount(n) {
  let arrForN = [];

  if (typeof n === "number" && n > 0) {
    for (let i = 0; i < n; i++) {
      if (i % 2 !== 0) {
        arrForN.push(i);
      }
    }
  } else {
    return "Oops! Wrong.";
  }
  return arrForN.length;
}

function oddCount1(n) {
  return Math.floor(n / 2);
}
console.log(oddCount(5));
console.log(oddCount1(5));

// #87 this context Крутая задачка на this

String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((el) =>
      el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase()
    )
    .join("");
};

console.log("hello world".toAlternatingCase());

// #88
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}
console.log(Kata.getVolumeOfCuboid(1, 2, 2));

// #89 задача с собеса на написание времени hh:mm:ss когда принимаем только секунды.
function timeToHHMMSS(params) {
  let hour = Math.floor(params / 3600);
  let min = Math.floor((params - hour * 3600) / 60);
  let sec = params - hour * 3600 - min * 60;
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }
  return `${hour}:${min}:${sec}`;
}

console.log(timeToHHMMSS(95324));

// #90
function divisibleBy(numbers, divisor) {
  return numbers.filter((el) => el % divisor === 0);
}
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));

// #91
function isPalindrome(x) {
  return x.toLowerCase() === x.toLowerCase().split("").reverse().join("");
}

console.log(isPalindrome("a"));

// #92
function sumStr(a, b) {
  return String(Number(a) + Number(b));
}
console.log(sumStr("5", "3"));

// #93
let helloObj = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso",
};

function greet(language) {
  return Object.keys(helloObj).includes(language)
    ? `${helloObj[language]}`
    : `${helloObj["english"]}`;
}

console.log(greet("english"));

// best solution
function greet(language) {
  return langs[lang] || langs["english"];
}

// #94
function findDifference(a, b) {
  const totalA = a.reduce((total, el) => total * el, 1);
  const totalB = b.reduce((total, el) => total * el, 1);
  return totalA > totalB ? totalA - totalB : totalB - totalA;
}
console.log(findDifference([3, 2, 5], [1, 4, 4]));

// #95
let answers = {
  1: "I love you",
  2: "a little",
  3: "a lot",
  4: "passionately",
  5: "madly",
  6: "not at all",
};

function howMuchILoveYou(nbPetals) {
  let total = nbPetals;
  while (total > 6) {
    total -= 6;
  }
  return answers[total];
}

console.log(howMuchILoveYou(7)); //,"I

// best solution
const howMuchILoveYou1 = (n) =>
  ["not at all", "I love you", "a little", "a lot", "passionately", "madly"][
    n % 6
  ];

// #96
function testEven(n) {
  return n % 2 === 0;
}

console.log(testEven(0));

// #97 Scoup - замыкание
function makeCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

let counter1 = makeCounter();
let counter2 = makeCounter();
console.log("counter1 - 1 вызов:", counter1());
console.log("counter1 - 2 вызов:", counter1());
console.log("counter2 - 1 вызов:", counter2());

// #98 Curriring - керирование
function sum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d;
      };
    };
  };
}

console.log(sum(1)(2)(5)(6));

// #99

function finalGrade(exam, projects) {
  switch (true) {
    case exam > 90 || projects > 10:
      return 100;
    case exam > 75 && projects >= 5:
      return 90;
    case exam > 50 && projects >= 2:
      return 75;
    default:
      return 0;
  }
}
//best solution
function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) return 100;
  if ((exam > 75) & (projects >= 5)) return 90;
  if ((exam > 50) & (projects >= 2)) return 75;
  return 0;
}

// #100
function squareOrSquareRoot(array) {
  return array.map((el) =>
    Number.isInteger(Math.sqrt(el)) ? Math.sqrt(el) : el ** 2
  );
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));

// #101 regular expression регулярные выражения (поиск всех цифр в строке)

function isItANum(str) {
  let newstr = str.replace(/\D/g, "");
  return newstr.length === 11 && newstr[0] == 0 ? newstr : "Not a phone number";
}

console.log(isItANum("S:)0207ERGQREG88349F82!efRF)"));

// решение через фильтр без регулярок

function isItANum1(s) {
  let r = s
    .split("")
    .filter((c) => "0123456789".includes(c))
    .join("");
  return (r.length == 11 && r[0] == "0" && r) || "Not a phone number";
}

// #102 sort ()

function twoSort(s) {
  return s.sort()[0].split("").join("***");
}

console.log(
  twoSort([
    "bitcoin",
    "take",
    "over",
    "the",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps",
  ])
);

// #103 setTimeout + setInterval
function printNumbers(from, to) {
  let timeID = setInterval(() => {
    console.log(from++);
  }, 1000);
  setTimeout(() => clearInterval(timeID), to * 1000);
}
printNumbers(7, 15);

function printNumbersWithSetTimeout(from, to) {
  let timeID = setTimeout(function newFoo() {
    console.log(from++);
    timeID = setTimeout(newFoo, 1000);
  }, 1000);
  setTimeout(() => clearTimeout(timeID), to * 1000);
}
printNumbersWithSetTimeout(2, 6);

//104
function expressionMatter(a, b, c) {
  const arr = [];
  arr.push(a * (b + c));
  arr.push(a * b * c);
  arr.push(a + b * c);
  arr.push(a * b + c);
  arr.push((a + b) * c);
  arr.push(a + b + c);
  return Math.max(...arr);
}

console.log(expressionMatter(2, 1, 2));

//105
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

console.log(goals(0, 0, 0));

// 106
function between(a, b) {
  const arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}
console.log(between(1, 4));

// 107

function sayHello(name) {
  return "Hello," + " " + name;
}
console.log(sayHello("Mr.Spock"));

// 108
function saleHotdogs(n) {
  return n >= 10 ? n * 90 : n >= 5 && n < 10 ? n * 95 : n * 100;
}

console.log(saleHotdogs(1));

// 109

function move(position, roll) {
  return position + roll * 2;
}

console.log(move(0, 4));
// 110

function fixTheMeerkat(arr) {
  return arr.reverse();
}

console.log(fixTheMeerkat(["tail", "body", "head"]));

// 111
String.prototype.isUpperCase = function () {
  const filteredStr = this.split("").filter((el) => el.toUpperCase() === el);
  return this.split("").length === filteredStr.length;
};

console.log("hello I AM DONALD".isUpperCase());

// best solution
String.prototype.isUpperCase = function () {
  return this == this.toUpperCase();
};

// 112

const square = (num) => {
  return num ** 2;
};
console.log(square(3));

// 113

function index(array, n) {
  return n <= array.length ? array[n] ** n : -1;
}

console.log(index([1, 2, 3, 4], 2));

// best solution
function index1(array, n) {
  //your code here
  return array[n] ** n || -1;
}

// 114
function well(x) {
  // let filteredX = x.filter(el => el === 'good').length;
  // if (filteredX < 2) return 'Publish!'
  // if (filteredX >= 2) return 'I smell a series!'
  // if (filteredX === 0) return 'Fail!'
  let count = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "good") {
      ++count;
    }
  }
  return count > 2
    ? "I smell a series!"
    : count === 1 || count === 2
    ? "Publish!"
    : "Fail!";
}
console.log(well(["bad", "bad", "bad"]));
// with filter

const well1 = (x) => {
  const good_count = x.filter((x) => x == "good").length;
  return good_count < 1
    ? "Fail!"
    : good_count < 3
    ? "Publish!"
    : "I smell a series!";
};

// 115
function stringy(size) {
  let str = "1";
  for (let i = 0; i < size - 1; i++) {
    str[i] == 1 ? (str += "0") : (str += "1");
  }
  return str;
}

console.log(stringy(6));

// bs

function stringy1(size) {
  var str = "";
  for (var i = 1; i <= size; i++) str += i % 2;
  return str;
}

//116
function checkAlive(health) {
  return health > 0;
}

// 117
function unusualFive() {
  return "fucku".length;
}

//118
function problem(x) {
  return typeof x === "number" ? x * 50 + 6 : "Error";
}
console.log(problem("str"));
console.log(problem(5));

// 119
function findMultiples(integer, limit) {
  let iterCount = Math.floor(limit / integer);
  const result = [];
  for (let i = 1; i <= iterCount; i++) {
    result.push(integer * i);
  }
  return result;
}

console.log(findMultiples(5, 25));

//bs
function findMultiples1(int, limit) {
  let result = [];

  for (let i = int; i <= limit; i += int) result.push(i);

  return result;
}

//120
function solution(string) {
  return string
    .split("")
    .map((el) => (el.toUpperCase() === el ? ["", ...el] : el))
    .join("")
    .replace(/,/g, " ");
}

console.log(solution("camelCasing"));

//refactoring
function solution1(string) {
  // return string.split('').map(el => el.toUpperCase() === el ? ['', ...el] : el).join('').replace(/,/g,' ')
  return string
    .split("")
    .map((el) => (el.toUpperCase() === el ? ` ${el}` : el))
    .join("");
}

//121
function solution1(a, b) {
  return a.length > b.length ? b + a + b : a + b + a;
}

console.log(solution1("13", "200"));

// 122
var a = "code";
var b = "wa.rs";
var name = a + b;

//123
function nthEven(n) {
  return n * 2 - 2;
}

console.log(nthEven(1));
//124

function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}
console.log(nameShuffler("john McClane"));

//125
function reverseList(list) {
  return list.reverse();
}

console.log(reverseList([1, 2, 3, 4]));

// 126
function remove(string) {
  return string[string.length - 1] === "!" ? string.slice(0, -1) : string;
}

console.log(remove("hi!"));

// bs

const remove1 = (s) => s.replace(/!$/, "");

function remove2(s) {
  return s.endsWith("!") ? s.slice(0, -1) : s;
}

//127
function pipeFix(numbers) {
  const newArr = [];
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    newArr.push(i);
  }
  return newArr;
}

console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));

// 128
function combat(health, damage) {
  return health - damage > 0 ? health - damage : 0;
}
console.log(combat(100, 5));

//129
function mergeArrays(arr1, arr2) {
  const newArr = arr1.filter((el) => !arr2.includes(el));
  return [...arr2, ...newArr].sort((a, b) => a - b);
}

console.log(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8]));
//130
function addFive(num) {
  var total = num + 5;
  return total;
}

//131
function mouthSize(animal) {
  return animal.toLowerCase() === "alligator" ? "small" : "wide";
}

console.log(mouthSize("toucan"));
