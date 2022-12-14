// Node.js program to demonstrate the
// console.assert() Method
 
// Accessing console module
const console = require('console');
 
// Calling console.assert()
var a = 10, b = 5;
 
console.assert(1 == 1, "error at 1==1");
console.assert(1 != 1, "error at 1!=1");
console.assert(3 & 9, "error at 3&9");
console.assert(1 & 6, "error at 1&6");
console.assert(0 && 9, "error at 0&&9");
console.assert(1 && 8, "error at 1&&8");
console.assert(a % b == 1, "error at a%b==1");
console.assert(a > b, "error at a>b");
console.assert(b > a, "error at b>a")