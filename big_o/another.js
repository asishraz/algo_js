function first(input) {
  let a = 1; //! O(1)
  let b = 2; //! O(1)
  let c = 3; //! O(1)
  for (let i = 0; i < input.length; i++) {
    let x = i + 1; //! O(n)
    let y = i + 1; //! O(n)
    let z = i - 1; //! O(n)
  }
  for (let j = 0; j < input.length; j++) {
    let m = j + 1; //! O(n)
    let n = j - 1; //! O(n)
  }
  let x = a + b + c; //! O(1)
}

first();

//* big O(4+5n)
