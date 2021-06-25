//todo to include performance lib in ur js code
// const performance = require("perf_hooks").performance;
//performance.now()

function first(input) {
  let a = 20; // O(1)
  a = 20 + 3; // O(1)
  for (let i = 0; i < input.length; i++) {
    // O(n)
    second(); // O(n)
    let b = 30; // O(n)
    b++; // O(n)
  }
  return a; // O(1)
}

first();

//* BigO for this function first is: O(1)+O(1)+O(1)+O(n)+O(n)+O(n)+O(n)
//* O(3+4n)
