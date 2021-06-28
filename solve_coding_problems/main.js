/*  
given two arrays, create a function which returns:
 a. true if:
   ? there is any common element in both the arrays.
 b. false if:
    ? there is no common element in both the arrays.

e.g - arr1 = ['a','b','c','x'], arr2 = ['z','y','i']  --> returns false
      arr2 = ['a','b','c','x'], arr2 = ['z','y','x']  --> returns true

*/

// As an good candidate, write down the key-points from the above question
// 2 parameters and this function will return true or false
// ask for the i/p and o/p [ i/p - arrays of any type; o/p - boolean]
//! most imp. value of the problem:
//! identify the main goal of the problem:
//! start with the naive/brute force approach:

// const arr1 = ["a", "b", "c", "x"];
// const arr2 = ["z", "y", "a"];

function compareElement(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

// console.log(compareElement(arr1, arr2));
//! this approach results in O(n^2) as we go for nested for loops
//? time complexity -- O(n^2)
//? space complexity -- O(1) - we are not creating any new objects/variables

/* 
this is the first and very basic and time consuming approach 
Now make it better.
arr1 ==> {
    a: true, b:true, c:true, x:true
}

arr2[index] === obj.properties

*/

// const arr1 = ["a", "b", "c", "x"];
// const arr2 = ["z", "b", "i"];
function matchingElement(arr1, arr2) {
  // loop through the first array and create object where properties === items in the array
  // loop through the second array and check if item in 2nd array exists on created object

  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const items = arr1[i];
      map[items] = true;
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

// console.log(matchingElement(arr1, arr2));
//!  in this the time complexity will be O(n+n) or O(2n) , which reduces to O(n)
//? time complexity -- O(n)
//? space complexity -- O(a) , as we are creating an object here

//todo then there is a 3rd approach (by using built-in method in JS)
const arr1 = ["a", "b", "c", "x"];
const arr2 = ["z", "s", "i"];

function matchingElement2(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

console.log(matchingElement2(arr1, arr2));
