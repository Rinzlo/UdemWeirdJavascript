// Hoisting Sets up memory space 
// for variables and functions.
// Functions are put into memory
// in their entirity and variables are
// set to undefined.

b();
console.log(a);

var a = 'Hello World';

function b() {
    console.log('Called b!');
}