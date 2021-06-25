function printFirstHalf(input) {
  console.log(input[0]);
  var middle = Math.floor(input.length / 2);
  var index = 0;

  while (index < middle) {
    console.log(input[index]);
    index++;
  }

  for (var i = 0; i < 100; i++) {
    console.log("Hi");
  }
}

printFirstHalf(["ab", "bc", "cd", "ef", "gh", "ij"]);
