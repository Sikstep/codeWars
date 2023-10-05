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

//132
function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

console.log(capitalizeWord("word"));

// 133
function reverse(string) {
  return string.split(" ").reverse().join(" ");
}
console.log(reverse("hi there"));

// 134 while + for
function generateRange(min, max, step) {
  const arr = [];
  while (min <= max) {
    arr.push(min);
    min += step;
  }
  return arr;
}

console.log(generateRange(2, 10, 2));
//134 + for
function generateRange1(min, max, step) {
  let arr = [];
  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  return arr;
}

// 135
function getChar(c) {
  return String.fromCharCode(c);
}

console.log(getChar(55));

// 136

function howManyDalmations(number) {
  var dogs = [
    "Hardly any",
    "More than a handful!",
    "Woah that's a lot of dogs!",
    "101 DALMATIONS!!!",
  ];

  return number <= 10
    ? dogs[0]
    : number <= 50
    ? dogs[1]
    : number == 101
    ? dogs[3]
    : dogs[2];
}

console.log(howManyDalmations(101));

// 137
function peopleWithAgeDrink(old) {
  if (old <= 13) return "drink toddy";
  if (old <= 17) return "drink coke";
  if (old <= 20) return "drink beer";
  if (old >= 21) return "drink whisky";
}

console.log(peopleWithAgeDrink(22));

// 138
function replace(s) {
  return s.replace(/[aeiou]/gi, "!");
}

console.log(replace("Hi!"));
console.log(replace("!Hi! Hi!"));
console.log(replace("aeiou"));
console.log(replace("ABCDE"));

// with for

function replace1(s) {
  let newS = "";
  let vowels = "aAeEiIoOuU";
  for (let i = 0; i < s.length; i++) {
    if (vowels.indexOf(s[i]) === -1) {
      newS += s[i];
    } else {
      newS += "!";
    }
  }
  return newS;
}

//139
function hello(name) {
  return name
    ? `Hello, ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`
    : "Hello, World!";
}

console.log(hello("john"));

// bs
const hello1 = (s) =>
  `Hello, ${s ? s[0].toUpperCase() + s.slice(1).toLowerCase() : "World"}!`;

//140
const correctTail = (bod, tail) => bod.slice(-1) === tail;

console.log(correctTail("Foe", "x"));

//141 перевод 10ричное число в 16ричное
function hexToDec(hexString) {
  return parseInt(hexString, 16);
}

//142
function tripleTrouble(one, two, three) {
  const arr = [];
  for (let i = 0; i < one.length; i++) {
    arr.push(one.split("")[i], two.split("")[i], three.split("")[i]);
  }
  return arr.join("");
}

console.log(tripleTrouble("aaa", "bbb", "ccc"));

//  solution with string
function tripleTrouble1(one, two, three) {
  let x = "";
  for (i = 0; i < one.length; i++) {
    x += one[i] + two[i] + three[i];
  }
  return x;
}

//143

function noBoringZeros(n) {
  let strN = String(n).split("").reverse();
  console.log(strN);
  for (let i = 0; i < strN.length; i++) {
    if (strN[i] == 0) {
      delete strN[i];
    } else {
      break;
    }
  }
  return +strN.reverse().join("");
}

console.log(noBoringZeros(77059000));

//143 with regular expressions

function noBoringZeros1(n) {
  return Number(String(n).replace(/0+$/, ""));
}
console.log(noBoringZeros1(77059000));
// разяснение:
// Регулярное выражение /0+$/ означает, что нужно найти один или более символов "0",
//  которые находятся в конце строки, и заменить их на пустую строку. Знак "$"
//  в конце регулярного выражения указывает на конец строки. Обозначение "0+"
//  представляет собой один или более символов "0". Таким образом, выражение /0+$/
//  находит все последовательные нули в конце строки и заменяет их на пустую строку,
//  что приводит к удалению этих нулей из строки. Например, если дана строка "10200"
//  и мы применяем регулярное выражение /0+$/, то оно найдет два нуля в конце строки
//   и заменит их на пустую строку. Конечный результат будет строка "102".

//144
function buildString(...template) {
  return `I like ${template.join(", ")}!`;
}

console.log(buildString("Cheese", "Milk", "Chocolate"));

//145
function binToDec(bin) {
  return parseInt(bin, 2);
}

console.log(binToDec("1001001"));

//146
function multiTable(number) {
  let table = `${number} * ${1} = ${number * 1}`;
  for (let i = 2; i <= 10; i++) {
    table += `\n${number} * ${i} = ${number * i}`;
  }
  return table;
}

console.log(multiTable(7));

// bs

const multiTable1 = (number) => {
  let table = "";

  for (let i = 1; i <= 10; i++) {
    table += `${i} * ${number} = ${i * number}${i < 10 ? "\n" : ""}`;
  }

  return table;
};

//147

function position(letter) {
  const letters = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  return `Position of alphabet: ${letters[letter]}`;
}

console.log(position("z"));

// bs
position = (l) => `Position of alphabet: ${l.charCodeAt() - 96}`;

//148
function take(arr, n) {
  if (arr.length > n) {
    return arr.filter((el, index) => index < n);
  } else {
    return arr;
  }
}

console.log(take([30, 37, -21, 68, 68, -3, 33, -39, 28, 50, -27], 44));

// bs

function take1(arr, n) {
  return arr.slice(0, n);
}

// 149
function arrayMadness(a, b) {
  return (
    a.reduce((total, el) => total + el ** 2, 0) >
    b.reduce((total, el) => total + el ** 3, 0)
  );
}

console.log(arrayMadness([4, 5, 6], [1, 2, 3]));

//150

function toBinary(n) {
  return +n.toString(2);
}

console.log(toBinary(1));

//151
function multipleOfIndex(array) {
  return array.filter((el, index) => el % index === 0);
}

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));

// 152 убрать дубликаты в массиве через Set:
function distinct(a) {
  const newArr = new Set(a);
  return [...newArr];
}
console.log(distinct([1, 1, 1, 1, 3, 4, 3, 3, 2, 2, 2, 5]));
// from cycle for:
function distinct1(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}

// from filter:
const distinct2 = (a) => a.filter((item, index) => a.indexOf(item) === index);

//153
function rainAmount(mm) {
  if (mm <= 40) {
    return `You need to give your plant ${40 - mm}mm of water`;
  } else {
    return "Your plant has had more than enough water for today!";
  }
}

console.log(rainAmount(39));

//154

function dutyFree(normPrice, discount, hol) {
  return Math.floor(hol / (normPrice * (discount / 100)));
}

console.log(dutyFree(12, 50, 1000));

// 155;
function stringClean(s) {
  return s.replace(/[1234567890]/gi, "");
}

console.log(stringClean("! !"));
console.log(stringClean("123456789"));

//156 .toFixed()
function formatMoney(amount) {
  return `$${amount.toFixed(2)}`;
}

console.log(formatMoney(33.99));
console.log();

//157

function derive(coefficient, exponent) {
  return `${coefficient * exponent}x^${exponent - 1}`;
}

console.log(derive(5, 9));

//158 basic js

function getLength(arr) {
  //return length of arr
  return arr.length;
}
function getFirst(arr) {
  //return the first element of arr
  return arr[0];
}
function getLast(arr) {
  //return the last element of arr
  return arr[arr.length - 1];
}
function pushElement(arr) {
  var el = 1;
  //push el to arr
  arr.push(el);

  return arr;
}
function popElement(arr) {
  //pop an element from arr
  arr.pop();

  return arr;
}

//159 basic obj

function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

console.log(animal({ name: "rabbit", legs: 4, color: "gray" }));

//160 sort
const flip = (d, a) => {
  return d === "R" ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a);
};

console.log(flip("R", [3, 2, 1, 2]));
console.log(flip("L", [1, 4, 5, 3, 5]));

//+bs

const flip1 = (d, a) => a.sort((x, y) => (d === "R" ? x - y : y - x));

//161
function main(verb, noun) {
  return verb + noun;
}

console.log(main("take ", "item"));

// 162

function include(arr, item) {
  return arr.includes(item);
}

console.log(include([1, 2, 3], 2));

//163

var findAverage = function (nums) {
  return nums.reduce((total, arg) => total + arg, 0) / nums.length;
};

console.log(findAverage([1, 3, 5, 7]));

//164

function calculateAge(a, b) {
  if (a === b) {
    return "You were born this very year!";
  }
  if (a === b - 1) {
    return `You are 1 year old.`;
  }
  if (a === b + 1) {
    return `You will be born in 1 year.`;
  }
  if (a > b) {
    return `You will be born in ${a - b} years.`;
  }
  if (a < b) {
    return `You are ${b - a} years old.`;
  }
}

console.log(calculateAge(2012, 2016));

// 165 class Ball

class Ball {
  constructor(ballType = "regular") {
    this.ballType = ballType;
  }
}
console.log(new Ball("Footbal"));

// alternative:

var Balls = function (ballType) {
  this.ballType = ballType || "regular";
};

//166
function remainder(n, m) {
  // Divide the larger argument by the smaller argument and return the remainder
  // return n > m && m > 0 ? n % m : n < m && n > 0 ? m % n : NaN;
  return n >= m && m != 0 ? n % m : n <= m && n != 0 ? m % n : NaN;
}

console.log(remainder(17, 2));

//bs

function remainder(a, b) {
  return a > b ? a % b : b % a;
}

//167

const getSize = (a, b, c) => {
  const square = 2 * (a * b + a * c + b * c);
  const value = a * b * c;
  return [square, value];
};

console.log(getSize(4, 2, 6));

//168
function check(a, b) {
  return a.includes(b);
}

//169

function spEng(sentence) {
  return sentence.toLowerCase().includes("english");
}

console.log(spEng("eglish"));

// with regular expression
function spEng1(sentence) {
  return /english/i.test(sentence);
}

console.log(spEng1("eglish"));
console.log(spEng1("english"));

//170 sort + for i

function sumOfDifferences(arr) {
  const newArr = [...arr].sort((a, b) => b - a);
  let result = 0;

  for (let i = 0; i < newArr.length - 1; i++) {
    result += newArr[i] - newArr[i + 1];
  }
  return result;
}

// bs

function sumOfDifferences1(arr) {
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

//171

function sayHello(name, city, state) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
}

console.log(sayHello(["John", "Smith"], "Phoenix", "Arizona"));

//172 switch-case
function whatday(num) {
  switch (num) {
    case 1:
      return `Sunday`;
    case 2:
      return `Monday`;
    case 3:
      return `Tuesday`;
    case 4:
      return `Wednesday`;
    case 5:
      return `Thursday`;
    case 6:
      return `Friday`;
    case 7:
      return `Saturday`;

    default:
      return `Wrong, please enter a number between 1 and 7`;
  }
}
console.log(whatday(123));

// + different solution

function whatday1(num) {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[num - 1] || "Wrong, please enter a number between 1 and 7";
}

//173

var laLigaGoals = 43;
var championsLeagueGoals = 10;
var copaDelReyGoals = 5;

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

//174

function printArray(array) {
  return array.join();
}

console.log(printArray([2, 4, 5, 6]));

//175

function usdcny(usd) {
  return `${(usd * 6.75).toFixed(2)} Chinese Yuan`;
}

console.log(usdcny(15));

//176 .toFixed

function twoDecimalPlaces(n) {
  return +n.toFixed(2);
}

console.log(twoDecimalPlaces(4.53125123123));

//177 Math.max & Math.min

function differenceInAges(ages) {
  const minAge = Math.min(...ages);
  const maxAge = Math.max(...ages);

  return [minAge, maxAge, maxAge - minAge];
}

console.log(differenceInAges([82, 15, 6, 38, 35]));

//178 Promise

function delay(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve("done"), ms);
  });
}

delay(3000).then(() => console.log("выполнилось через 3 секунды"));

//after refactoring:

function delay1(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay1(3000).then(() => console.log("выполнилось через 3 секунды"));

//179
var replaceDots = function (str) {
  return str.replace(/[.]/g, "-");
};

console.log(replaceDots("one.two.three"));

// 1 more variant

var replaceDots1 = function (str) {
  // added the \ to escape special characters
  // added the g so that replace is run for all occurences in the string
  return str.replace(/\./g, "-");
};

//180

function apple(x) {
  return (+x) ** 2 >= 1000
    ? `It's hotter than the sun!!`
    : `Help yourself to a honeycomb Yorkie for the glovebox.`;
}

console.log(apple("50"));
console.log(apple(4));

// 181 switch/case
function getDrinkByProfession(param) {
  switch (param.toLowerCase()) {
    case "jabroni":
      return "Patron Tequila";

    case "school counselor":
      return "Anything with Alcohol";

    case "programmer":
      return "Hipster Craft Beer";

    case "bike gang member":
      return "Moonshine";

    case "politician":
      return "Your tax dollars";

    case "rapper":
      return "Cristal";

    default:
      return "Beer";
  }
}
console.log(getDrinkByProfession("jabrOni"));

//182 for i
function sumMul(n, m) {
  let sum = 0;
  for (let i = n; i < m; i++) {
    if (i % n === 0) {
      sum += i;
    }
  }
  return sum === 0 ? "INVALID" : sum;
}

console.log(sumMul(2, 9));

//183
function sixToast(num) {
  return num - 6 > 0 ? num - 6 : 6 - num;
}

console.log(sixToast(6));

// так же через Math.abs

function sixToast1(num) {
  return Math.abs(num - 6);
}

// 184

function remove(string) {
  return string.replace(/!/gi, "") + "!";
}

console.log(remove("!!hi"));

//185 найти все строчные буквы

function lowercaseCount(str) {
  return str.split("").filter((a) => /[a-z]/.test(a)).length;
}

//186

var a = "dev";
var b = "Lab";

var name = a + b;

//187

function sameCase(a, b) {
  if (/[a-z]/.test(a) && /[a-z]/.test(b)) {
    return 1;
  }
  if (/[A-Z]/.test(a) && /[A-Z]/.test(b)) {
    return 1;
  }
  if (/[a-z]/.test(a) && /[A-Z]/.test(b)) {
    return 0;
  } else if (/[A-Z]/.test(a) && /[a-z]/.test(b)) {
    return 0;
  } else {
    return -1;
  }
}

console.log(sameCase("C", "B"));

//188 regular

function remove(string) {
  return string.replace(/!+$/, "");
}

console.log(remove("!!Hi!"));

//189

function howManydays(month) {
  let days;

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;

    default:
      days = 28;
      break;
  }

  return days;
}

console.log(howManydays(1));

// самый симантический вариант

function howManydays(month) {
  switch (month) {
    case 2:
      return 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
  }
  return 31;
}

//190

function defineSuit(card) {
  if (card.includes("♣")) return "clubs";
  if (card.includes("♦")) return "diamonds";
  if (card.includes("♥")) return "hearts";
  if (card.includes("♠")) return "spades";
}

console.log(defineSuit("Q♠"));

//191 regular expression проверка на строку от 4 до 16 символов, только строчные буквы, и все цифры включая _

function validateUsr(username) {
  // - `^`        Start from the beginning of the string.
  // - `[]`       Allow any character specified, including...
  // - `a-z`      anything from a to z,
  // - `0-9`      anything from 0 to 9,
  // - `_`        and underscore.
  // - `{4,16}`   Accept 4 to 16 of allowed characters, both numbers included.
  // - `$`        End the string right after specified amount of allowed characters is given.

  return /^[a-z0-9_]{4,16}$/.test(username);
}

console.log(/[a-z]/.test("asda"));

//192

function array(string) {
  let arr = string.split(",");
  let finalArr = string.split(",").slice(1, -1).join(" ");
  return arr.length <= 2 ? null : finalArr;
}

console.log(array("1"));

// bs
function array1(arr) {
  return arr.split(",").slice(1, -1).join(" ") || null;
}

//193

function converter(mpg) {
  let impGal = 4.54609188;
  let mile = 1.609344;
  return +((mpg / impGal) * mile).toFixed(2); //code to convert miles per imperial gallon to kilometers per liter
}

console.log(converter(10));

//194
function cookie(x) {
  let str = `Who ate the last cookie? It was `;
  if (typeof x === "string") {
    return (str += `Zach!`);
  }
  if (typeof x === "number") {
    return (str += `Monica!`);
  }
  return (str += `the dog!`);
}

console.log(cookie("Ryan"));

//bs

function cookie(xR) {
  var t = typeof x;
  var who = t == "string" ? "Zach" : t == "number" ? "Monica" : "the dog";
  return `Who ate the last cookie? It was ${who}!`;
}

//195

function whoIsPaying(name) {
  return name.length > 2 ? [name, name.slice(0, 2)] : [name];
}

console.log(whoIsPaying("Mexico"));

//196 prototype!

function Sleigh() {}

Sleigh.prototype.authenticate = function (name, password) {
  return name === "Santa Claus" && password === "Ho Ho Ho!";
};

const sleigh = new Sleigh();

console.log(sleigh.authenticate("Santa Claus", "Ho Ho Ho!"));

//  bs

function Sleigh() {
  this.name = "Santa Claus";
  this.password = "Ho Ho Ho!";
}

Sleigh.prototype.authenticate = function (name, password) {
  return this.name == name && this.password == password;
};

//197

function odds(values) {
  // arrow it
  return values.filter((a) => a % 2 !== 0);
}

console.log(odds([]));

//198

function calculator(a, b, sign) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "unknown value";
  }
  switch (sign) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;

    default:
      return "unknown value";
  }
}

console.log(calculator(1, 2, "+"));

// 199

function contamination(text, char) {
  return text.length > 0 && char.length > 0
    ? text
        .split("")
        .map((el) => (el = char))
        .join("")
    : "";
}

console.log(contamination("abs", "z"));

//200
const combineNames = (a, b) => {
  return `${a} ${b}`;
};

console.log(combineNames("James", "Stevens"));

//bs

const combineNames1 = (...names) => names.join(" ");

//201

let a = 1;

while (a <= 5) {
  console.log(a++);
}

//202

const arr1 = ["red", "orange", "yellow", "green", "blue", "violet"];

for (let i = arr1.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

//203

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j] - 1);
  }
}

//204

function shortenToDate(longDate) {
  return longDate.split(" ").splice(0, 3).join(" ").replace(/,/gi, "").trim();
}

console.log(shortenToDate("Friday May 2, 9am"));

//bs

const shortenToDate1 = (longDate) => longDate.split(",")[0];

//205
function toCsvText(array) {
  return array.join("\n");
}

console.log(
  toCsvText([
    [0, 1, 2, 3, 45],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34],
  ])
);

//206

const webChange = (message, n) => {
  return Array(n).fill(message);
};

let websites = webChange("codewars", 1000);

//207
function getNumberFromString(s) {
  return +s.replace(/\D/gi, "");
}

console.log(getNumberFromString("1"));

//208

function calculateTip(amount, rating) {
  switch (rating.toLowerCase()) {
    case "terrible":
      return 0;
    case "poor":
      return Math.ceil(amount * 0.05);
    case "good":
      return Math.ceil(amount * 0.1);
    case "great":
      return Math.ceil(amount * 0.15);
    case "excellent":
      return Math.ceil(amount * 0.2);
    default:
      return "Rating not recognised";
  }
}

console.log(calculateTip(20, "Excellent"));

//209 замена символов в массиве

function isVow(a) {
  let newArr = [];
  for (let i = 0; i < a.length; i++) {
    a[i] === 97
      ? (newArr[i] = "a")
      : a[i] === 101
      ? (newArr[i] = "e")
      : a[i] === 105
      ? (newArr[i] = "i")
      : a[i] === 111
      ? (newArr[i] = "o")
      : a[i] === 117
      ? (newArr[i] = "u")
      : (newArr[i] = a[i]);
  }
  return newArr;
}

console.log(
  isVow([
    118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113,
    120, 106,
  ])
);

//bs

const isVow = (a) =>
  a.map((x) => ("aeiou".includes((y = String.fromCharCode(x))) ? y : x));

// 1. Метод map() вызывается для массива a, и для каждого элемента x выполняется следующая операция:
// 2. Внутри колбэк-функции происходит следующее:
// - Используется метод String.fromCharCode(x), который преобразует числовое значение x в соответствующий символ в кодировке Unicode.
// - Результат этой операции присваивается переменной y.
// - Затем происходит проверка: если символ y присутствует в строке 'aeiou', что соответствует гласным буквам (a, e, i, o, u),
//   то возвращается символ y. В противном случае возвращается исходное значение x.

//210 regular expression

function validateCode(code) {
  return /^[123]/.test(code);
}

console.log(validateCode(123));

// bs

function validateCode1(code) {
  return /^[1-3]/.test(code);
}

console.log(validateCode1(123));

//211
function numberToPower(number, power) {
  if (power === 0) return 1;
  let newNum = number;
  for (let i = 1; i < power; i++) {
    newNum *= number;
  }
  return newNum;
}

console.log(numberToPower(4, 2));

//bs with scope (замыкание)

const numberToPower = (number, power) =>
  power > 0 ? number * numberToPower(number, power - 1) : 1;

//212 start

let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
function duckDuckGoose1(players, goose) {
  let grad = Math.floor(goose / players.length);

  let curInd = goose - players.length * grad;
  if (curInd === 0) {
    curInd = players.length;
  }

  return goose <= players.length ? players[goose - 1] : players[curInd - 1];
}

//bs

const duckDuckGoose1 = (players, goose) =>
  players[(goose - 1) % players.length].name;

// 213 cycle

function billboard(name, price = 30) {
  let newArr = name.split("");
  let total = 0;
  for (let i = 0; i < newArr.length; i++) {
    total += price;
  }
  return total;
}

console.log(billboard("Jeong-Ho Aristotelis"));

// 213 cycle refactoring

function billboard2(name, price = 30) {
  let total = 0;
  for (let i = 0; i < name.length; i++) {
    total += price;
  }
  return total;
}

console.log(billboard2("Jeong-Ho Aristotelis"));

//214 randomColor

const getRandomColor = () => {
  const randomNumber = () => Math.floor(Math.random() * 225);
  console.log(randomNumber());

  let arr = [];

  for (let i = 0; i < 3; i++) {
    arr.push(randomNumber());
  }

  return `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
};
console.log(getRandomColor());

//bs

const getRandomColor1 = () => {
  const randomNumber = () => Math.floor(Math.random() * 225);

  return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
};
console.log(getRandomColor1());

//215 find params for path

function get(obj, path) {
  const tokens = path.split(".");

  if (tokens.length === 1) {
    return obj[path];
  }

  for (const token of tokens) {
    if (typeof obj[token] === "object") {
      return get(obj[token], tokens.slice(1).join("."));
    }
  }
}

console.log(get(obj, "a.b"));
console.log(get(obj, "a.b.c"));
console.log(get(obj, "a.e"));
console.log(get(obj, "a.x.e"));

//216 string
function joinStrings1(string1, string2) {
  return `${string1} ${string2}`;
}

//217 charcode

function uniTotal(string) {
  let total = 0;
  for (let i = 0; i < string.length; i++) {
    total += string.charCodeAt(i);
  }
  return total;
}

console.log(uniTotal("a"));

//bs

const uniTotal1 = (str) =>
  [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);

//218
function multiply(number) {
  return number * 5 ** String(number).replace(/-/gi, "").length;
}

console.log(multiply(10));
console.log(multiply(-2));

//219
function myFirstKata(a, b) {
  if (typeof a === "number" || typeof b === "number") {
    return (a % b) + (b % a);
  } else {
    return false;
  }
}

console.log(myFirstKata(3, 5));

//220

function sakuraFall(v) {
  return v >= 0 ? 400 / v : 0; // your code here
}

console.log(sakuraFall(5));

//221 проверка на пустой объект

let obj1 = { url: "asdasd" };
console.log(Object.keys(obj1).length);
console.log(Object.values(obj1).length);

//222

function find(arr, value) {
  return arr.includes(value);
}

console.log(find(["lena", 1, 2, 3, 4], "lena"));

//223

const newFoo = (num) => {
  return typeof num === "number" ? num * 50 + 6 : `Ошибка`;
};

console.log(newFoo(3));

//224 удалить первый и последний элемент строки

const correctStr = (str) => {
  return str.slice(1, -1);
};

console.log(correctStr("asdqwfas"));

//225 map

const reverseArr = (arr) => {
  return arr.map((el) => -el);
};
console.log(reverseArr([1, 2, 3, 4, 5, -3, -4]));

//226 class + создание свойства get (а не метод)

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get info() {
    return `${this.name}s age is ${this.age}`;
  }
}

let john = new Person("john", 34);

console.log(john.info);

//227

let websites1 = [];

websites1.push("codewars");

console.log(websites);

//228

function getStatus(isBusy) {
  let msg = isBusy ? "busy" : "available";

  return {
    status: msg,
  };
}

console.log(getStatus(false).status);

//229
function pointsPer48(ppg, mpg) {
  return ppg === 0 || mpg === 0 ? 0 : Number(((ppg / mpg) * 48).toFixed(1));
}

console.log(pointsPer48(12, 20));

//230

function padIt(str, n) {
  let newStr = [str];
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      newStr.unshift("*");
    } else {
      newStr.push("*");
    }
  }
  return newStr.join("");
}

console.log(padIt("a", 5));
console.log(padIt("moybwuceaz", 11));

function padIt1(str, n) {
  let newStr = [str];
  let i = 1;
  while (i <= n) {
    if (i % 2 !== 0) {
      newStr.unshift("*");
    } else {
      newStr.push("*");
    }
    i++;
  }
  return newStr.join("");
}

console.log(padIt1("a", 5));
console.log(padIt1("moybwuceaz", 11));

//231

function isPythagoreanTriple(integers) {
  return (
    integers[0] ** 2 + integers[1] ** 2 === integers[2] ** 2 ||
    integers[1] ** 2 + integers[2] ** 2 === integers[0] ** 2 ||
    integers[2] ** 2 + integers[0] ** 2 === integers[1] ** 2
  );
}

console.log(isPythagoreanTriple([3, 4, 5]));

//bs

function isPythagoreanTriple1(integers) {
  let massiv = integers.sort((a, b) => a - b);
  return massiv[0] ** 2 + massiv[1] ** 2 == massiv[2] ** 2;
}

//232
// have some problem
function isOpposite(s1, s2) {
  if (s1 === "" || s2 === "") {
    return false;
  }

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s1[i].toLowerCase() && s2[i] === s2[i].toUpperCase()) {
      return true;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isOpposite("ab", "AB"));
console.log(isOpposite("AB", "Ab"));

//bs

function isOpposite1(s1, s2) {
  if (s1 === "" || s2 === "") {
    return false;
  }

  if (s1.length !== s2.length) {
    return false;
  }

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) {
      return false;
    }

    if (s1[i].toLowerCase() !== s2[i].toLowerCase()) {
      return false;
    }
  }

  return true;
}

console.log(isOpposite1("ab", "AB"));

//233

function grabDoll(dolls) {
  let bag = [];

  for (let i = 0; i < dolls.length; i++) {
    if (bag.length === 3) {
      break;
    }

    if (dolls[i] !== "Hello Kitty" && dolls[i] !== "Barbie doll") {
      continue;
    }
    bag.push(dolls[i]);
  }

  return bag;
}
//234

function isDigit(s) {
  let trimmedS = s.trim();
  if (trimmedS === "") {
    return false;
  }

  return !isNaN(Number(trimmedS));
}

console.log(isDigit("s2425"));

//bs

function isDigit1(s) {
  return s == parseFloat(s);
}

//235 switch/case
var quote = function (fighter) {
  switch (fighter.toLowerCase()) {
    case "george saint pierre":
      return "I am not impressed by your performance.";
    case "conor mcgregor":
      return `I'd like to take this chance to apologize.. To absolutely NOBODY!`;
  }
};

console.log(quote("george saint pierre"));
console.log(quote("Conor McGregor"));

//bs

var quote1 = function (fighter) {
  switch (fighter.toLowerCase()) {
    case "george saint pierre":
      return "I am not impressed by your performance.";
    case "conor mcgregor":
      return `I'd like to take this chance to apologize.. To absolutely NOBODY!`;
    default:
      "Who are u? Boy?";
  }
};

console.log(quote1("george saint pierre"));
console.log(quote1("Conor McGregor"));

//236

let aa = { Mike: "aye", Joe: "aye", Johnson: "aye", Peter: "aye" };
let bb = { Mike: "aye", Joe: "nay", Johnson: "aye", Peter: "aye" };

const cannonsReady = (gunners) => {
  let values = Object.values(gunners).filter((el) => el === "aye");
  return values.length === Object.keys(gunners).length
    ? "Fire!"
    : "Shiver me timbers!";
};

console.log(cannonsReady(aa));
console.log(cannonsReady(bb));

//bs

const cannonsReady1 = (gunners) => {
  return Object.values(gunners).some((m) => m === "nay")
    ? "Shiver me timbers!"
    : "Fire!";
};

//with cycle
const cannonsReady2 = (gunners) => {
  for (var i in gunners) {
    if (gunners[i] == "nay") {
      return "Shiver me timbers!";
    }
  }
  return "Fire!";
};

//237

function leo(oscar) {
  switch (true) {
    case oscar === 88:
      return "Leo finally won the oscar! Leo is happy";
    case oscar > 88:
      return "Leo got one already!";
    case oscar < 88 && oscar > 86:
      return "When will you give Leo an Oscar?";
    case oscar === 86:
      return "Not even for Wolf of wallstreet?!";
    default:
      return "When will you give Leo an Oscar?";
  }
}

console.log(leo(89));

//ternar

const leo1 = (oscar) => {
  return oscar === 88
    ? "Leo finally won the oscar! Leo is happy"
    : oscar === 86
    ? "Not even for Wolf of wallstreet?!"
    : oscar < 88
    ? "When will you give Leo an Oscar?"
    : "Leo got one already!";
};

//238

var TempleStrings = function (obj, feature) {
  return `${obj} are ${feature}`;
};

console.log(TempleStrings("Animals", "Good"));

//239 перевод в двоичную систему

const findEvil = (a) => {
  return a
    .toString(2)
    .split("")
    .filter((el) => el == 1).length %
    2 ===
    0
    ? `It's Odious!`
    : `It's Evil!`;
};

console.log(findEvil(3));

// bs

function evil(n) {
  return n.toString(2).match(/1/g).length % 2 ? "It's Odious!" : "It's Evil!";
}

//240
function correctPolishLetters(string) {
  const letters = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };
  return string
    .split("")
    .map((el) => (letters.hasOwnProperty(el) ? (el = letters[el]) : el))
    .join("");
}

console.log(correctPolishLetters("Jędrzej Błądziński"));

//bs the same solution

var polishLetters = {
  ą: "a",
  ć: "c",
  ę: "e",
  ł: "l",
  ń: "n",
  ó: "o",
  ś: "s",
  ź: "z",
  ż: "z",
};

function correctPolishLetters(string) {
  return string
    .split("")
    .map((c) => polishLetters[c] || c)
    .join("");
}

// solution with regular expression
function correctPolishLetters(string) {
  var dict = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };

  return string.replace(/[ąćęłńóśźż]/g, (match) => dict[match]);
}

//241

function parseF(s) {
  let parsed = parseFloat(s);
  return isNaN(parsed) ? null : parsed;
}

console.log(parseF("1"));

//242

function toFreud(string) {
  if (string === "") return "";
  return string
    .split(" ")
    .map((el) => (el = "sex"))
    .join(" ");
}

console.log(toFreud("1"));

//with regular

var toFreud1 = (s) => s.replace(/[^ ]+/g, "sex");

console.log(toFreud1("1"));

//243 class через function

function Hero(name = "Hero") {
  this.name = name;
  this.position = "00";
  this.health = 100;
  this.damage = 5;
  this.experience = 0;
}

let newHero = new Hero();
console.log(newHero.name);

console.log(newHero);

//244 Math.round & Math.min

function fuelPrice(litres, pricePerLitre) {
  let discount = Math.min(Math.floor(litres / 2) * 0.05, 0.25);
  let priceWithDiscount = pricePerLitre - discount;
  return Math.round(litres * priceWithDiscount * 100) / 100;
}

console.log(fuelPrice(5, 1.23));

//deepCopyPractice

// 1. Simple object
let man = {
  name: "John",
  age: 28,
};

let manFullCopy = { ...man }; //  your code
manFullCopy.age = 29;
console.log(man.age);
console.log(manFullCopy.age);

// 2. Array of primitives
let numbers = [1, 2, 3];

let numbersFullCopy = [...numbers]; //  your code
numbers[2] = 5;
console.log(numbers[2]);
console.log(numbersFullCopy[2]);

// 3. Object inside an object
let man1 = {
  name: "John",
  age: 28,
  mother: {
    name: "Kate",
    age: 50,
  },
};

let man1FullCopy = { ...man1, mother: { ...man1.mother } };
man1FullCopy.mother.age = 20;
console.log(man1.mother.age);
console.log(man1FullCopy.mother.age);

// 4. Array of primitives inside an object
let man2 = {
  name: "John",
  age: 28,
  friends: ["Peter", "Steven", "William"],
};

let man2FullCopy = { ...man2, friends: [...man2.friends] };
man2FullCopy.friends[2] = "Kosty";
console.log(man2.friends[2]);
console.log(man2FullCopy.friends[2]);

// 5 Array of objects
let people = [
  { name: "Peter", age: 30 },
  { name: "Steven", age: 32 },
  { name: "William", age: 28 },
];

let peopleFullCopy = people.map((el) => ({ ...el }));
peopleFullCopy[0].name = "Kosty";
console.log(people[0].name);
console.log(peopleFullCopy[0].name);

// 6 Array of objects inside object
let man3 = {
  name: "John",
  age: 28,
  friends: [
    { name: "Peter", age: 30 },
    { name: "Steven", age: 32 },
    { name: "William", age: 28 },
  ],
};

let man3FullCopy = { ...man3, friends: man3.friends.map((el) => ({ ...el })) };
man3FullCopy.friends[0].name = "Kosty";
console.log(man3.friends[0].name);
console.log(man3FullCopy.friends[0].name);

// 7 Object inside an object, inside an object
let man4 = {
  name: "John",
  age: 28,
  mother: {
    name: "Kate",
    age: 50,
    work: {
      position: "doctor",
      experience: 15,
    },
  },
};

let man4FullCopy = {
  ...man4,
  mother: { ...man4.mother, work: { ...man4.mother.age } },
};
man4FullCopy.mother.work.position = "progger";
console.log(man4.mother.work.position);
console.log(man4FullCopy.mother.work.position);

// 8 Array of objects inside object -> object
let man5 = {
  name: "John",
  age: 28,
  mother: {
    name: "Kate",
    age: 50,
    work: {
      position: "doctor",
      experience: 15,
    },
    parents: [
      { name: "Kevin", age: 80 },
      { name: "Jennifer", age: 78 },
    ],
  },
};

let man5FullCopy = {
  ...man5,
  mother: {
    ...man5.mother,
    work: { ...man5.mother.work },
    parents: man5.mother.parents.map((el) => ({ ...el })),
  },
};
man5FullCopy.mother.work.position = "progger";
man5FullCopy.mother.parents[0].name = "Kosty";
console.log(man5.mother.work.position);
console.log(man5FullCopy.mother.work.position);
console.log(man5.mother.parents[0].name);
console.log(man5FullCopy.mother.parents[0].name);

// 9 Object inside an object -> array -> object ->  object
let man6 = {
  name: "John",
  age: 28,
  mother: {
    name: "Kate",
    age: 50,
    work: {
      position: "doctor",
      experience: 15,
    },
    parents: [
      {
        name: "Kevin",
        age: 80,
        favoriteDish: {
          title: "borscht",
        },
      },
      {
        name: "Jennifer",
        age: 78,
        favoriteDish: {
          title: "sushi",
        },
      },
    ],
  },
};

let man6FullCopy = {
  ...man6,
  mother: {
    ...man6.mother,
    work: { ...man6.mother.work },
    parents: man6.mother.parents.map((el, index) => ({
      ...el,
      favoriteDish: { ...man6.mother.parents[index].favoriteDish },
    })),
  },
};
man6FullCopy.mother.parents[0].favoriteDish.title = "manka";
console.log(man6.mother.parents[0].favoriteDish.title);
console.log(man6FullCopy.mother.parents[0].favoriteDish.title);

//10 Array of objects inside an object -> object -> array -> object ->  object
let man7 = {
  name: "John",
  age: 28,
  mother: {
    name: "Kate",
    age: 50,
    work: {
      position: "doctor",
      experience: 15,
    },
    parents: [
      {
        name: "Kevin",
        age: 80,
        favoriteDish: {
          title: "borscht",
          ingredients: [
            { title: "beet", amount: 3 },
            { title: "potatoes", amount: 5 },
            { title: "carrot", amount: 1 },
          ],
        },
      },
      {
        name: "Jennifer",
        age: 78,
        favoriteDish: {
          title: "sushi",
          ingredients: [
            { title: "fish", amount: 1 },
            { title: "rise", amount: 0.5 },
          ],
        },
      },
    ],
  },
};

let man7FullCopy = {
  ...man7,
  mother: {
    ...man7.mother,
    work: { ...man7.mother.work },
    parents: man7.mother.parents.map((el, index) => ({
      ...el,
      favoriteDish: {
        ...man7.mother.parents[index].favoriteDish,
        ingredients: man7.mother.parents[index].favoriteDish.ingredients.map(
          (i) => ({ ...i })
        ),
      },
    })),
  },
};

man7FullCopy.mother.parents[1].favoriteDish.ingredients[1].title = "Manka";

console.log(man7.mother.parents[1].favoriteDish.ingredients[1].title);
console.log(man7FullCopy.mother.parents[1].favoriteDish.ingredients[1].title);

// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.

const addFriends = (students) => {
  const names = students.map((el) => el.name);
  const friendsList = students.map((el, index) => ({
    ...el,
    friend: names.filter((n) => n !== el.name),
  }));
  return friendsList;
};
console.log(addFriends(students));

// 15. Д.З.: Напишите функцию getBestStudents, которая принимает параметром
// массив students  и количество лучших студентов, которое надо получить в
// новом массиве. Если второго параметра нет, то по умолчанию возвращает лучшего студента
// getBestStudents(students) => {name: "Nick", age: 20, isMarried: false, scores: 120}
// getBestStudents(students, 3) => [{...}, {...}, {...}]
// getBestStudents(students, 10) => [{}, {}, ...., {}, null, null, null, null ]

const getBestStudents = (arrStud, count) => {
  return count
    ? arrStud
        .sort((a, b) => b.scores - a.scores)
        .filter((el, index) => index < count)
    : arrStud.sort((a, b) => b.scores - a.scores)[0];
};

console.log(getBestStudents(students));
console.log(getBestStudents(students, 3));
console.log(getBestStudents(students, 10));

//248 cycle

function flickSwitch(arr) {
  if (arr.length === 0) return [];

  let indicator = true;
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "flick") {
      indicator = !indicator;
      newArr.push(indicator);
    } else {
      newArr.push(indicator);
    }
  }

  return newArr;
}

//bs

function flickSwitch1(arr) {
  let returning = true;
  return arr.map((v) => {
    return v === "flick" ? (returning = !returning) : returning;
  });
}

//249 cycle
function neutralise(s1, s2) {
  let newStr = "";

  for (let i = 0; i < s1.length; i++) {
    s1[i] === s2[i] ? (newStr += s1[i]) : (newStr += 0);
  }

  return newStr;
}

console.log(neutralise("++-++--++-", "-+++-++-++"));
