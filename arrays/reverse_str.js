//reverse a string
// i/p - 'asish', o/p - 'hsisa'

function reverse(str) {
  //check the i/p
  if (!str || str.length < 2 || typeof str !== "string") {
    return "not a valid string";
  }

  const revarr = [];
  const len = str.length - 1;
  for (let i = len; i >= 0; i--) {
    revarr.push(str[i]);
  }
  console.log(revarr);
  return revarr.join("");
}

reverse("abcde");
