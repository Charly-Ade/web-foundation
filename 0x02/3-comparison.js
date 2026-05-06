/**
 * comparison operator
 * > greater than
 * < less than
 * >= greater than or equal to
 * <= less than or equal to
 * == equal to (loose equality)
 * === equal to (strict equality)
 * != not equal to (loose inequality)
 * !== not equal to (strict inequality)
 */
console.log(5 > 3); 
console.log(5 < 3);
console.log(5 >= 5);
console.log(5 <= 4);

console.log(5 == '5');
console.log(5 === '5');
console.log(5 != '5');
console.log(5 !== '5');

/**
 * predict the output before running it .
 * explain the difference between == and ===
 * when should you never use ==?
 * 
 * == is a loose equality operator that compares two values for equality after performing type coercion if necessary. It will convert the operands to a common type before making the comparison. For example, 5 == '5' will return true because the string '5' is coerced to the number 5 before the comparison.
 * === is a strict equality operator that compares two values for equality without performing type coercion. It checks both the value and the type of the operands. For example, 5 === '5' will return false because they are of different types (number and string).
 */