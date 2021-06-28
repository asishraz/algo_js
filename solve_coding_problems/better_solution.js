/* //todo keypoints - [6,4,3,2,1,7], sum = 9; [6,3]=>{6+3} == sum -> returns true
inputs - array of string or number;
o/p - boolean value

? have a solution with lesser time and space complexity

 */

// Naive

function hasPairWithSum(arr, sum) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }

  return false;
}
//! first function - time-complexity -- O(n^2) [because nested for loops]
//! space-complexity -- O(1)

// Better
function hasPairWithSum2(arr, sum) {
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}

//! second function - time-complexity --O(n)
//! space-complexity - O(n) ; as we are assigning a set method here

console.log(hasPairWithSum2([6, 4, 3, 2, 1, 7], 9));
