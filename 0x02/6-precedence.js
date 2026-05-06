/**
 * operators precedence
 */
let result = 5 + 2 * 3 > 10 && 4 < 2;
console.log(result);

/**
 * What is the output
 * true
 * break it down step by step based on operator precedence.
 * 1. Multiplication: 2 * 3 = 6
 * 2. Addition: 5 + 6 = 11
 * 3. Comparison: 11 > 10 = true
 * Add parentheses to make the logic clearer
 * let result = ((5 + (2 * 3)) > 10) && (4 < 2);
 */
