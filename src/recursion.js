/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  //base case
  if (n < 0 || n === undefined) {
    return null;
  }
  if (n <= 1) {
    return 1;
  }
  // recursive case
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
// https://davidtang.io/2019/03/31/learning-recursion-in-javascript-part-2.html

var sum = function(array) {
  if(!array.length){
    return 0;
  }
  return array[0] + sum(array.slice(1));
};

//[]              / return 0
//[6]             / return 6 + 0
//[5,6]           / return 5 + 6
//[4,5,6]         / return 4 + 11
//[3,4,5,6]       / return 3 + 15
//[2,3,4,5,6]     / return 2 + 18
//[1,2,3,4,5,6]   / return 1 + 20


// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15

// arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)


var arraySum = function(array) {
  var sum = 0;
  for(var i = 0; i < array.length; i++) {
    var val = array[i];
    if(Array.isArray(val)){ //if instance of an Array?
    sum += arraySum(val)
    } else {
      //else - add the number to sum
       sum += val;
    }
  }
  return sum;
}


// 4. Check if a number is even.
var isEven = function(n) {
  n = Math.abs(n);
  if(n === 0) return true;
  if(n === 1) return false;
  return isEven(n-2);
};

//11    return 9
//9     return 7
//5     return 3
//3     return 1  ===false


// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21

var sumBelow = function(n) {
  if (n === 0){
    return 0;
  }
  if ( n > 0){
    return (n-1) + sumBelow(n-1);
  }
  else {
    return (n+1) + sumBelow(n+1);
  }

};

// 7  6 + add(6)
// 6  5 + (6)
// 5  4 + (5+6)
// 4  3 + (4+5+6)
// 3  2 + (3+4+5+6)
// 2  1 + (2+3+4+5+6)
// 1  0 + (1+2+3+4+5+6)  //return 21

//below is only for sum = n -1
  // 7-1 = (6)
    // 6 - 1 = (5)
      // 5 - 1 = (4)
        // 4 - 1 = (3)
          // 3 - 1 = (2)
            // 2 - 1 = (1)
              // 1 - 1 = (0). if n === 0, return 0. now recursion

                // now this is when we use   sumBelow(n-1)
                // sum = n -1 + sumBelow(n-1)

              // 1 + (0-1) = 0
            //2 + (0-1) = 1
          //3 + (3-1) = 3
        //4 + (3-1) = 6
      //5 + (6-1) = 10
    //6 + (10-1) = 15
  //7 + (15-1) =  21



// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {   // line297
  //base case
  if(Math.abs(y-x) ===1 || x-y === 0){
    return []
  }
  if (y-x === 2){
    return [x + 1];

  } else if (x < y) {    /// positive test
    var arr = range(x, y-1);
    arr.push(y-1);
    return arr;
  }

    else if (x > y){    /// negative test
      var arr = range(x, y+1);
      arr.push(y+1);
      return arr;
    }
};


// var range = function(x, y) {
//   var arr = [];
//   for ( var i = x+1; i <y ; i++){
//     var key = i;
//     arr.push(key);
//   }
//   return arr;
// };

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
// line 355

var exponent = function(base, exp) {
  if ( exp === 0) {   //base case
    return 1;
  }

  if( exp > 0){
    return base * exponent(base, exp -1)
  }

  else {
    return 1/(base*exponent(base, -1 * exp-1));  //neg exponent
  };

};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1) {    // base cases
    return true;
  }
  if (n === 0 || n % 2 === 1) {
    return false;
  }
  return powerOfTwo(n / 2);  // recursive case
};

// 9. Write a function that reverses a string.
// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

//reverse("hello");


var reverse = function(string) {
  // console.log("word is "+ string);
  if(string === "") {   // base code
    return "";
  }
  else {
    return reverse(string.substr(1)) + string.charAt(0);
  }
};

/*
         First Part of the recursion method
You need to remember that you won’t have just one call, you’ll have several nested calls
Each call: str === "?"                              reverseString(str.subst(1))     + str.charAt(0)
1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
4th call – reverseString("lo")      will return   reverseString("o")              + "l"
5th call – reverseString("o")       will return   reverseString("")               + "o"
         Second part of the recursion method
The method hits the if condition and the most highly nested call returns immediately
5th call will return reverseString("") + "o" = "o"
4th call will return reverseString("o") + "l" = "o" + "l"
3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h"
*/


// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //console.log("word is "+ string);
  // base cases
  if (string === '' || string.length === 1) {
    return true;
  }
  if (string[0].toLowerCase() !== string.slice(-1).toLowerCase()) {
    return false;
  }

  // recursive case
  return palindrome(string.substr(1, string.length - 2));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if( x===0 || y === 0){
    return 0
  }
  else if (y<0) {
    return -x + multiply(x, y+1);
  }
  else{
    return x + multiply(x, y-1)
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  //x or y equal 0 you get null/0? as base case
  if(x === 0 || y === 0){
    return 0;
  }
    //then the recursion without the / booo
    //negative
    //positive
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //base case, if not the same string length equals false
  if(str1.length!== str2.length){
    return false;
  }
  return compareStr(str1.substr(1), str2.substr(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  //create a array placeholder
  var arr = []
  //check if string is a string
  if(str.length === 0){
    return [];
  }
  //split string,, push into array


};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  var arr = [];
  if(array.length === 0){
    return [];
  }
  arr.push(array.pop());
  return arr.concat(reverseArr(array.slice(0)));

};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
