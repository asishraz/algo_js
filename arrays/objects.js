//* objects in JS are called the reference type
//* all those null, number, strings, boolean are primitive type, in which programming lang. tells what they are
//* but objects are different and they are non-primitive type; they are createed by the programmer
//* arrays are just objects in JS
{
  /* 

[] ==== [] //* false bcz, these arrays are objects and with objects, they allocate different memory location
[1] === [1] //* same goes for this also
both are false

//* this is the example of Reference Type

var obj1 = { value : 10};
var obj2 = obj1;
var obj2 = { value : 10};

obj1 === obj2 //! this is true

obj1 === obj3
obj2 === obj3
both are false

*/
}
var obj1 = { value: 10 };
var obj2 = obj1;
var obj3 = { value: 10 };

console.log(obj1 === obj2);
console.log(obj1 === obj3);

// console.log([] === []);
// console.log([1] === [1]);

obj1.value = 15;
console.log("after changes");
console.log(obj2.value); //? will change to '15'
console.log(obj3.value); //! remains the same '10'
