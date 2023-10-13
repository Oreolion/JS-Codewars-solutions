// Kata 1

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(array) {
  let reduced = array.reduce((accum, item) => accum + item, 0);
  return reduced % 2 === 0 || array.length === 0 ? "even" : "odd";
}

console.log(oddOrEven([0, 1, 4]));
console.log(oddOrEven([0, -1, -5]));
console.log(oddOrEven([0]));
console.log(oddOrEven([]));

// kata 2
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

function updateLight(current) {
  return current === "green"
    ? "yellow"
    : current === "yellow"
    ? "red"
    : current === "red"
    ? "green"
    : current;
}

console.log(updateLight("green"));
console.log(updateLight("red"));
console.log(updateLight("yellow"));

// another method: The function returns an object & we access the object with square brackets (myObject[objectKey]). So if you call updateLight('green'), we call the returned object['green'] & it returns yellow.

const updateLight1 = (current) =>
  ({
    green: "yellow",
    yellow: "red",
    red: "green",
  }[current]);

console.log(updateLight1("green"));
console.log(updateLight1("red"));
console.log(updateLight1("yellow"));

//  kata 3

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let myArr = [];

  let split = str.split("");
  vowels.forEach((item, index) => {
    split.forEach((item, idx) => {
      item == vowels[index] ? myArr.push(item) : myArr;
    });
  });

  return myArr.length;
}

console.log(getCount("abracadabra"));
console.log(getCount("ke"));
console.log(getCount("remy"));

// another method

function getCount1(str) {
  return str.split("").filter((c) => "aeiouAEIOU".includes(c)).length;
}

function getCount2(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  var vowelsCount = 0;

  // enter your majic here
  for (let i of str) {
    if (vowels.includes(i)) vowelsCount++;
  }

  return vowelsCount;
}

console.log(getCount1("abracadabra"));
console.log(getCount1("ke"));
console.log(getCount1("remy"));
console.log(getCount2("abracadabra"));
console.log(getCount2("ke"));
console.log(getCount2("remy"));

// kata 4
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained. for example;
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  let split = str.split(" ");
  let newArr = "";
  split.forEach((item) => {
    newArr += ` ${item.split("").reverse().join("")}`;
  });
  console.log(newArr);
  console.log(newArr.trim());

  return newArr.trim();
}

console.log(reverseWords("This is an example!"));
console.log(reverseWords("ehT kciuq nworb xof spmuj revo eht yzal .god"));
console.log(reverseWords("The quick brown fox jumps over the lazy dog."));

// another method

function reverseWords1(str) {
  // Go for it
  //split words into seperate arrays
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

console.log(reverseWords1("This is an example!"));
console.log(reverseWords1("The quick brown fox jumps over the lazy dog."));

// using map method

function reverseWords2(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWords2("This is an example!"));
console.log(reverseWords2("ehT kciuq nworb xof spmuj revo eht yzal .god"));

// kata 5

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// method 1

function sumTwoSmallestNumbers(nums) {
  let sorted = nums.sort((a, b) => {
    return a - b;
  });

  const findsmallest2 = sorted[0] + sorted[1];
  return findsmallest2;
}

console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]));
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]));

// method 2

function sumTwoSmallestNumbers1(numbers) {
  //Code here

  let newArr = [];
  let anotherArr = [];
  let outcome = Math.min(...numbers);

  numbers.filter((item) => {
    if (item != outcome) {
      anotherArr.push(item);
      return item;
    }
    newArr.push(outcome);
  });

  let outcome2 = Math.min(...anotherArr);
  anotherArr.filter((item) => {
    if (item != outcome2) return item;
    newArr.push(outcome2);
  });

  let reduced = newArr.reduce((accum, num) => accum + num, 0);
  return reduced;
}

console.log(sumTwoSmallestNumbers1([5, 8, 12, 19, 22]));
console.log(sumTwoSmallestNumbers1([52, 76, 14, 12, 4]));
console.log(sumTwoSmallestNumbers1([52, 76, 14, 12, 4]));
console.log(sumTwoSmallestNumbers1([23, 71, 33, 82, 1]));

// leet code 6

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

//     Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
//     Return k.

var removeElement1 = function (nums, val, newArr = []) {
  let filtered = nums.filter((num) => {
    if (num != val) {
      return newArr.push(num);
    }
  });

  console.log(filtered);

  return filtered.length;
};

var removeElement = function (nums, val, newArr = []) {
  // Create a new array and copy the elements of the 'nums' array to the new array, except for the elements that you want to remove.
  const filteredArray = nums.filter((num) => num != val);

  // Return the length of the filtered array.
  return filteredArray.length;
};
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement1([0, 1, 2, 2, 3, 0, 4, 2], 2));
console.log(removeElement1([3, 2, 2, 3], 3));

// kata 7

// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
// Task Overview:
// You have to write a function that accepts three parameters:
//     cap is the amount of people the bus can hold excluding the driver.
//     on is the number of people on the bus excluding the driver.
//     wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// e.g. cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

function enough(cap, on, wait) {
  // your code here
  return wait + on <= cap ? 0 : wait + on - cap;
}

console.log(enough(10, 5, 5));
console.log(enough(100, 60, 50));
console.log(enough(20, 5, 5));

// kata 8

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// e.g. n= 5, m=5:
// 25n = -5 , m=5:  0

function paperwork(n, m) {
  return n < 0 || m < 0 ? 0 : n * m;
}

console.log(paperwork(-5, -5));
console.log(paperwork(5, -5));

// kata 9
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.
// Examples

// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers, sorted) {
  let min = Math.min(...numbers);
  let newArr = [];
  newArr.length = 0;

  sorted = numbers.filter((a, idx) => {
    if (a !== min) {
      return a;
    }
    newArr.push(min);

    if (newArr.length > 1) return newArr[0];
  });

  return sorted;
}

console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([5, 3, 2, 1, 4]));
console.log(removeSmallest([2, 2, 1, 2, 1]));

// kata 10

// Given the triangle of consecutive odd numbers:

// 1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
// ...

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

// solution
// in an array of array, find the sum of the array at any position in the parent array

function rowSumOddNumbers(n) {
  const out = Array.from({ length: (n * (n + 1)) / 2 }, (_, i) => i * 2 + 1);
  return out.slice(out.length - n).reduce((a, b) => a + b, 0);
}

// method 2

function rowSumOddNumbers2(n) {
  var result = 0;

  for (var i = 0; i < n; i++) {
    result += n * n - n + 2 * i + 1;
  }

  return result;
}

// method 3

function rowSumOddNumbers3(n) {
  let sum = 0;
  let i = n * (n + 1) - 1;
  while (i > n * (n - 1) - 1) {
    sum += i;
    i -= 2;
  }
  return sum;
}

// method 4

function rowSumOddNumbers4(n) {
  /*
  the first number of the line : (n * (n - 1) + 1);
  
  sum = (n * (n * (n - 1) + 1) + (n * (n - 1));
  sum = n³ - n² + n + n² - n;
  sum = n³;
  */
  return Math.pow(n, 3);
  //   or return n ** 3;
}

function rowSumOddNumbers5(n) {
  // TODO
  let sum = 0;
  for (let i = 1; i <= n + n; i++) {
    if (i % 2 === 1) {
      sum += i * n;
    }
  }
  return sum;
}

console.log(rowSumOddNumbers(42));
console.log(rowSumOddNumbers(1));
console.log(rowSumOddNumbers2(42));
console.log(rowSumOddNumbers2(1));
console.log(rowSumOddNumbers3(42));
console.log(rowSumOddNumbers3(1));
console.log(rowSumOddNumbers4(42));
console.log(rowSumOddNumbers4(1));

// kata 11

// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld) {
  let twiceOfSOn = sonYearsOld * 2;
  let fatherwasTwiceSon = dadYearsOld - twiceOfSOn;
  return fatherwasTwiceSon;
}

console.log(twiceAsOld(36, 7));



// kata 13

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str) {
  const arr = str.split("");
  const unique = [...new Set(arr)];
  console.log(unique.join(""));
  return str.length == unique.join("").length;
}

// method 2
function isIsogram1 (str) {
    return !str || (str.length === new Set(str.toLowerCase()).size);
}

// method 3
function isIsogram2(str){
    //Create array from string and make it uppercased
    var arr = str.split('').map(function(el) {
      return el.toUpperCase();
    }); 
    //Test each value for duplicates.
    return arr.every(function(el) {
      return arr.indexOf(el) == arr.lastIndexOf(el);
    });
  }


console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("aba"));
console.log(isIsogram1("Dermatoglyphics"));
console.log(isIsogram1("isogram"));
console.log(isIsogram1("aba"));
console.log(isIsogram2("isogram"));
console.log(isIsogram2("aba"));


// kata 14

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
}

// method 2

function isPangram1(string) {
	return new Set(string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('')).size === 26;
}

// method 3

function isPangram2(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram1("The quick brown fox jumps over the lazy dog."));
console.log(isPangram2("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));
console.log(isPangram1("This is not a pangram."));
console.log(isPangram2("This is not a pangram."));



// kata 15
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
// Examples

// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  let words = str.replace(/[-_]/g, " ").split(" ");
  return (
    words[0] +
    words
      .slice(1)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("")
  );
}

// another method

function toCamelCase1(str) {
  var regExp = /[-_]\w/gi;
  return str.replace(regExp, function (match) {
    return match.charAt(1).toUpperCase();
  });
}

// method 3

function toCamelCase2(str) {
  return str.replace(/(_|-)./g, (m) => m.substr(1, 1).toUpperCase());
}
console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase1("the_stealth_warrior"));
console.log(toCamelCase2("the_stealth_warrior"));

//Bonus: word palindrome

var isPalindrome = (s) => (
  (s = s.toLowerCase().replace(/[^0-9a-z]/gi, "")),
  s.split("").reverse().join("") === s
);

console.log(isPalindrome("A race Car"));

// kata 16
// Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

// Please solve it without using lodash's _.chunk function.

// Example 1:

// Input: arr = [1,2,3,4,5], size = 1
// Output: [[1],[2],[3],[4],[5]]
// Explanation: The arr has been split into subarrays each with 1 element.

// Example 2:

// Input: arr = [1,9,6,3,2], size = 3
// Output: [[1,9,6],[3,2]]
// Explanation: The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.

// Example 3:

// Input: arr = [8,5,3,2,6], size = 6
// Output: [[8,5,3,2,6]]
// Explanation: Size is greater than arr.length thus all elements are in the first subarray.

// Example 4:

// Input: arr = [], size = 1
// Output: []
// Explanation: There are no elements to be chunked so an empty array is returned.

var chunk = function (arr, size, newArr = []) {
  if (arr.length <= size) {
    newArr.push(arr);
    return newArr;
  }

  newArr.push(arr.slice(0, size));

  return chunk(arr.slice(size), size, newArr);
  // console.log(newArr);
};

console.log(chunk([1, 2, 3, 4, 5, 6], 2));

var chunk1 = function (arr, size, newArr = []) {
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }

  return newArr;
};

console.log(chunk1([1, 2, 3, 4, 5, 6], 2));

//Bonus: repeat each element in an array

function raps(x) {
  let newArr = [];
  x.forEach((item) => newArr.push(item.toString().repeat(2)));
  return newArr;
}

console.log(raps([1, 2, 3, 4, 5]));

// kata 17
// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

function testEven(n) {
  //Your awesome code here!
  return n % 2 === 0;
}

console.log(testEven(1));
console.log(testEven(0.5));
console.log(testEven(-4));

// kata 18

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:
// case 	return
// name equals owner 	'Hello boss'
// otherwise 	'Hello guest'

function greet(name, owner) {
  // Add code here

  return name === owner ? `Hello boss` : `Hello guest`;
}

// method 2

function greet1(name, owner) {
  return `Hello ${name == owner ? "boss" : "guest"}`;
}

console.log(greet("Greg", "Daniel"));
console.log(greet("Daniel", "Daniel"));
console.log(greet1("Greg", "Daniel"));
console.log(greet1("Daniel", "Daniel"));

// kata 19

// In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

function squareDigits(num) {
  let s = "";
  let arr = `${num}`.split("").map((i) => (s += Math.pow(i, 2).toString()));
  return s;
}

console.log(squareDigits(3212));
console.log(squareDigits(2112));

// kata 20

// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

function powersOfTwo(n) {
  let arr = [];
  for (i = 0; i <= n; i++) arr.push(i);
  return arr.map((i) => Math.pow(2, i));
}

// method 2

var powersOfTwo2 = (n) =>
  Array.from({ length: n + 1 }, (val, i) => Math.pow(2, i));

// method 3

function powersOfTwo1(n) {
  return [...Array(n + 1)].map((_, i) => 2 ** i);
}

console.log(powersOfTwo(1));
console.log(powersOfTwo(4));
console.log(powersOfTwo1(1));
console.log(powersOfTwo1(4));
console.log(powersOfTwo2(1));
console.log(powersOfTwo2(4));

// kata 21

// Our football team has finished the championship.
// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
// For example: ["3:1", "2:2", "0:1", ...]
// Points are awarded for each match as follows:
//     if x > y: 3 points (win)
//     if x < y: 0 points (loss)
//     if x = y: 1 point (tie)

// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.
// Notes:    our team always plays 10 matches in the championship
//     0 <= x <= 4
//     0 <= y <= 4

function points(games) {
  let point = 0;
  let arr = [];
  games.forEach((i) => {
    let x = i.slice(0, 1);
    let y = i.slice(-1);
    if (x < y) arr.push((point = 0));
    if (x > y) arr.push((point = 3));
    if (x === y) arr.push((point = 1));
  });

  return arr.reduce((a, b) => a + b, 0);
}

// method 2

const points1 = games => games.reduce((sum, [x, , y]) => sum + (x > y ? 3 : x == y), 0)

// method 3

function points2(games) {
    return games.reduce((current, element) => {
      let arraySplit = element.split(':');
      return (arraySplit[0] > arraySplit[1]) ? current += 3 : (arraySplit[0] < arraySplit[1]) ? current : current += 1;
    }, 0);
}

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"])
);
console.log(
  points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])
);
console.log(
  points1(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"])
);
console.log(
  points1(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])
);
console.log(
  points2(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"])
);
console.log(
  points2(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])
);


// kata 22
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]


function arrayDiff(a, b) {
    return a.filter((i) => (!(b.includes(i))))
}

// method 2

function arrayDiff1(a, b) {
    b = new Set(b)
    return a.filter(v => !b.has(v))
}

console.log(arrayDiff([1,2,2], []));
console.log(arrayDiff([1,2,2], [2]));
console.log(arrayDiff([1,2,2,2,3], [2]));
console.log(arrayDiff([1,2], [2]));
console.log(arrayDiff1([1,2,2,2,3], [2]));
console.log(arrayDiff1([1,2], [2]));
