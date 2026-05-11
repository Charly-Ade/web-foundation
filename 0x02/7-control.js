let age = 10
if ( age < 18) {
    console.log("You're not eligible to vote")
} else {
    console.log("You're eligible to vote")
}

//multiple conditioon

if (age <= 10){
    console.log("You're a child")
} else if (age > 10 && age < 18){
    console.log("You're a teenager")
} else {
    console.log("You're an adult")
}

//fizzbuzz
let number = 15
/**
 * if number is divisible by 3, print "fizz"
 * if number is divisible by 5, print "buzz"
 * if number is divisble by both 3and 5, print "fizzbuzz"
 * otherwise, print the number itself
 */
if (number % 3 == 0 && number % 5 == 0){
    console.log("fizzbuzz")
}else if (number % 5 == 0){
    console.log("buzz")
}else if (number % 3 == 0) {
    console.log ("fizz")
}else {
    console.log(number)
}