//1. Create an array with 4 names.
// 2. Print the third item in the array.
// 3. Delete the second item.
// 4. Print the third item in the array again.

/*
use splice to take out of an array
the first number dictates the starting location, the second dictates HOW MANY
STARTING LOCATION IS 0 NOT 1.
you could use an array to list off card  suits and the such.
black jack could splice the arrays for cards to use.
 */


var names = ["thomas","kenn","erin","kevin"];

console.log(names);
console.log(names[2]);
console.log(names.splice(1,1));
console.log(names[2]);
console.log(names);