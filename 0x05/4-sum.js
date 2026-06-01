/**
 * Task: 4-sum
 * calculating the sum of elements in array
 */

const numbers = [1, 2, 3, 4, 5, '6', '7', '8', '9', '10', "fish"]

const sum = numbers.reduce((acc, curr) => {
    let numbers = parseInt(curr)
    if (!isNaN(numbers)) {
        return acc + numbers
    }   else { 
        return acc
    }
}, 0)

console.log(`${sum}`)