// kata 1
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending) {
  let lastIndex = str.lastIndexOf(ending);
  return str.slice(lastIndex) == ending;
}

console.log(solution("abcde", "cde"));
console.log(solution("abcde", "abc"));

// method 2

const solution1 = (str, ending) => str.endsWith(ending);

console.log(solution1("abcde", "cde"));
console.log(solution1("abcde", "abc"));

// kata 2

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

var summation = function (num) {
  let arr = [];
  let sum;
  for (let i = 1; i <= num; i++) arr.push(i);
  return (sum = arr.reduce((total, num) => total + num, 0));
};

console.log(summation(1));
console.log(summation(5));

// method 2

var summation1 = function (num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) sum += i;
  return sum;
};

// method 3
const summation2 = (n) => (n * (n + 1)) / 2;

console.log(summation1(1));
console.log(summation1(5));
console.log(summation2(1));
console.log(summation2(5));

// kata 3

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// Your function should only return a number, not the explanation about how you get that number.

function getSum(a, b) {
  var result = 0;
  var bigger = a > b ? a : b;
  var smaller = a > b ? b : a;
  for (var i = smaller; i <= bigger; i++) result += i;
  return result;
}

// method 2

getSum1 = (a, b) => ((a + b) * (Math.abs(a - b) + 1)) / 2;

// method 3

function getSum2(a, b) {
  tmp = 0;
  if (a < b) while (a <= b) tmp += a++;
  else while (a >= b) tmp += a--;

  return tmp;
}

console.log(getSum(0, -1));
console.log(getSum(1, 10));
console.log(getSum(0, 1));
console.log(getSum(2, 2));
console.log(getSum(5, -1));
console.log(getSum(2, -1));
console.log(getSum1(2, 2));
console.log(getSum1(5, -1));
console.log(getSum1(2, -1));
console.log(getSum2(2, 2));
console.log(getSum2(5, -1));
console.log(getSum2(2, -1));

// kata 4

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  let sum = 0;
  let arr1 = [];
  arr2 = [];
  let output;
  let anotherArr = [];

  if (input == 0 || input == null) return [];
  let getPositive = input.forEach((item) => {
    if (item > 0) arr1.push(item);
  });

  anotherArr.push(arr1.length);
  let getNegative = input.forEach((item) => {
    if (item < 0) arr2.push(item);
  });
  output = arr2.reduce((total, item) => total + item, 0);
  anotherArr.push(output);

  return anotherArr;
}

// refactored

function countPositivesSumNegatives(input) {
  if (!input || input.length == 0) return [];

  var positiveCount = input.reduce((sum, item) => (item > 0 ? ++sum : sum), 0);
  var negativeSum = input.reduce(
    (sum, item) => (item < 0 ? sum + item : sum),
    0
  );

  return [positiveCount, negativeSum];
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
console.log(countPositivesSumNegatives([]));

// another method

function countPositivesSumNegatives1(input) {
  if (!input || input.length == 0) return [];
  var sum = 0,
    count = 0;
  input.forEach(function (el) {
    if (el > 0) count++;
    else sum += el;
  });
  return [count, sum];
}

console.log(
  countPositivesSumNegatives1([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
console.log(countPositivesSumNegatives1([]));

// kata 5
// Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(x) {
  return x.replaceAll(" ", "");
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

// another method

function noSpace1(x) {
  return x.split(" ").join("");
}

console.log(noSpace1("8 j 8   mBliB8g  imjB8B8  jl  B"));

// method 3

function noSpace2(x) {
  return x.replace(/ /g, "");
}

console.log(noSpace2("8 j 8   mBliB8g  imjB8B8  jl  B"));

// kata 6

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

function descendingOrder(n) {
  let arrayOfN = n.toString().split("");
  let sorted = arrayOfN.sort((a, b) => b - a);
  return Number(sorted.join(""));
}

console.log(descendingOrder(123456789));

// method 2
function descendingOrder1(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}

console.log(descendingOrder1(123456789));

// kata 7

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
  let filtered = arr
    .sort((a, b) => a - b)
    .map((item, idx, arr) => {
      if (item !== arr[1]) return item;
    });

  return parseInt(filtered.join(""));
}

// method 2

function findUniq1(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0];
}

// method 3

function findUniq2(arr) {
  return arr.find((n) => arr.indexOf(n) === arr.lastIndexOf(n));
}

// method 4
function findUniq3(arr) {
  var aux = arr[0] != arr[1] ? arr[3] : arr[0];
  return arr.filter((x) => x != aux)[0];
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([1, 0, 0]));
console.log(findUniq([0, 1, 0]));
console.log(findUniq([0, 0, 1]));
console.log(findUniq2([1, 1, 1, 2, 1, 1]));
console.log(findUniq2([1, 0, 0]));
console.log(findUniq1([1, 1, 1, 2, 1, 1]));
console.log(findUniq1([1, 0, 0]));
console.log(findUniq3([1, 1, 1, 2, 1, 1]));
console.log(findUniq3([1, 0, 0]));

// kata 8
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(s) {
  return (
    s
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/([a-z])\1+/g) || []
  ).length;
}

// method 2
function duplicateCount1(text) {
  text = text.toLowerCase();
  return [...new Set(text.split(""))].filter(
    (c, i) => text.lastIndexOf(c) > text.indexOf(c)
  ).length;
}

console.log(duplicateCount("Indivisibilities"));
console.log(duplicateCount1("Indivisibilities"));

// Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

var removeDuplicateLetters = function (s) {
  let splitted = s.split("");
  let mapped = splitted.sort().map((i, idx, arr) => {
    if (i !== arr[idx + 1]) {
      return i;
    }
  });
  return mapped.join("");
};

console.log(removeDuplicateLetters("bcabc"));
console.log(removeDuplicateLetters("cbacdcbc"));

// kata 9
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9.

function squareSum(numbers) {
  return numbers
    .map((number) => Math.pow(number, 2))
    .reduce((total, number) => total + number, 0);
}

// method 2
function squareSum2(numbers) {
  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  }, 0);
}

// method 3
function squareSum3(numbers) {
  var result = 0;
  for (var i = 0; i < numbers.length; i++) {
    result += numbers[i] * numbers[i];
  }
  return result;
}

// method 4
function squareSum4(numbers) {
  return numbers
    .map((number) => Math.pow(number, 2))
    .reduce((total, number) => total + number, 0);
}

console.log(squareSum([0, 3, 4, 5]));
console.log(squareSum2([0, 3, 4, 5]));
console.log(squareSum3([0, 3, 4, 5]));
console.log(squareSum4([0, 3, 4, 5]));

// kata 10
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
  if (names.length === 0) return "no one likes this";
  if (names.length == 1) return `${names[0]} likes this`;
  if (names.length == 2) return `${names[0]} and ${names[1]} like this`;
  if (names.length == 3)
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  if (names.length > 3)
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}

console.log(likes([]));
console.log(likes(["Alex"]));
console.log(likes(["Alex", "Jacob"]));
console.log(likes(["Alex", "Jacob", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max", "Remy"]));

// kata 11
// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
// we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:
// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
// If it is the case we will return k, if not return -1.
// Note: n and p will always be given as strictly positive integers.

function digPow(n, p) {
  var str = n.toString();
  var res = 0;

  for (var i = 0; i < str.length; i++) {
    res += Math.pow(parseInt(str[i]), p++);
  }

  return res % n === 0 ? res / n : -1;
}

// method 2

function digPow1(n, p) {
  var ans =
    ("" + n)
      .split("")
      .map(function (d, i) {
        return Math.pow(+d, i + p);
      })
      .reduce(function (s, v) {
        return s + v;
      }) / n;
  return ans % 1 ? -1 : ans;
}

// method 3

function digPow2(n, p) {
  var x = String(n)
    .split("")
    .reduce((s, d, i) => s + Math.pow(d, p + i), 0);
  return x % n ? -1 : x / n;
}

console.log(digPow(92, 1));
console.log(digPow(46288, 3));
console.log(digPow1(92, 1));
console.log(digPow1(46288, 3));
console.log(digPow2(92, 1));
console.log(digPow2(46288, 3));

// kata 12

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  const bmi = weight / height ** 2;
  return bmi <= 18.5
    ? "Underweight"
    : bmi <= 25.0
    ? "Normal"
    : bmi <= 30.0
    ? "Overweight"
    : "Obese";
}

console.log(bmi(80, 1.8));


// leetcode 15
// You are given two strings s and t.

// String t is generated by random shuffling string s and then add one more letter at a random position.
// Return the letter that was added to t.
// Example 1:

// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.

// Example 2:

// Input: s = "", t = "y"
// Output: "y"

var findTheDifference = function (s, t) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    result ^= s.charCodeAt(i);
  }
  for (let i = 0; i < t.length; i++) {
    result ^= t.charCodeAt(i);
  }

  return String.fromCharCode(result);
};

// method 2

var findTheDifference2 = function (s, t) {
  s = s.split("").sort();
  t = t.split("").sort();

  for (let i = 0; i < t.length; i++) {
    if (s[i] !== t[i]) return t[i];
  }

  return "";
};

console.log(findTheDifference("abcd", "abcde"));
console.log(findTheDifference2("abcd", "abcde"));



