//todo in general for lookup - O(1); push - O(1); insert - O(n) ; delete - O(n)
//* inserting and deleting are not the fastest in arrays

const strings = ["a", "b", "c", "d", "e"];

//push - O(1)
//? as we are just adding an element at the end

strings.push("f");

//pop - O(1)
//? as we are just removing an element from the end
strings.pop();

//splice - O(n/2) ==> O(n)
//? as we traverse the array to the half of its length
strings.splice(2, 0, "name");

//unshift - O(n)
//? the element will be added to the beginning; affecting all the indices of other elements
strings.unshift("ramesh");

console.log(strings);
