/**
 * Hoisting is a javascript mechanism where variable and function
 * declaration are moved to the top of their lexical scope 
 * during the compilation phase 
 * this means that you can use variables and funtions 
 * before they are declared in the code . however, only the 
 * declaration are hoisted , not the initializations.
 */

console.log(x)
var x = 5
console.log(x)

//example of varianle hoisting with let and const
//console.log(y)
//let y = 10
//console.log(y)

//example of function hoisting 
greet()
function greet(){
    console.log("Hello world!")
}

//Example of funtion hoisting
sayHello()
var sayHello = function () {
    console.log("Hello, World!")
}

