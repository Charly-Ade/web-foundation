Javascript core concept
what is a variable?
A variable is any characteristic, number, or quantity that can be measured, counted, or changed within a system, research study, or computer program

comparison operators
predict the output before running it .
 * explain the difference between == and ===
 * when should you never use ==?
 */
 the Difference between == and ===
 == is a loose equality operator that compares two values for equality in coercion
 === is a strict eqality operator that compares two values for equality without performing a coercion
 when you should never use ==  when you want to build a CBT software

logical operators
 what is the output of the above code?
  explain the behavior of the logical operators in each case.

false
True
default value

False 
 it is false because the && operator returns the first falsy value it encounters, which is false in this case. The "Hello" string is not evaluated because the first value is already false
 True
 it is true because the || operator returns the first  value as true, which is true in this case. The "world" string is not evaluated because the first value is already true.
default value 
it is default value because the || operator return the true value which is true in this case . The "default value" string  is true so it returns the value without evaluating the second value

 What is the output
  true
break it down step by step based on operator precedence.
  1. Multiplication: 2 * 3 = 6
  2. Addition: 5 + 6 = 11
  3. Comparison: 11 > 10 = true
Add parentheses to make the logic clearer
  let result = ((5 + (2 * 3)) > 10) && (4 < 2);