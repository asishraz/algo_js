const arr = ["a", "b", "c", "d", "e"];

function alllogs(arr) {
  for (let i = 0; i < arr.length; i++) {
    //* O(n)
    for (let j = 0; j < arr.length; j++) {
      //* O(n)
      console.log(arr[i], arr[j]); //* O(n)
    }
  }
}

alllogs(arr);

//! in nested , we apply multiplication rather than addition

//? here, we say O(n*n) => O(n^2) -- quadratic time
