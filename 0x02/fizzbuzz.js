/**
 * count 1-20
 * find the multipes of 3 from 1-20 if gotten print fizz
 * find the multiples of 5 from 1-20 if gotten print buzz
 * find the multiples of both 3 and 5 from 1-20 then print fizzbuzz
 * 
 */

for (let a = 1; a <= 20; a++){
    if(a % 3 == 0){
        console.log("fizz")
    }else if(a % 5 == 0){
        console.log("buzz")
    }else if(a % 3 == 0 && a % 5 == 0){
        console.log("fizzbuzz")
    }
}