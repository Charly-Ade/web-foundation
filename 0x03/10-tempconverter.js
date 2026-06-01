/**
 * Converts temperature between Celsius and Fahrenheit
 * {number} value - The temperature value to convert
 * {string} unit - The unit of the input value ('C' for Celsius, 'F' for Fahrenheit)
 * @returns {number|string} - The converted temperature value or an error message
 */

function convertTemp(value, unit) {
    if (unit === 'C') {
        return (value * 9/5) + 32; 
    } else if (unit === 'F') {
        return (value - 32) * 5/9;
    } else {
        return "Invalid unit.";
    }
}   
console.log(convertTemp(100, 'C')); 
console.log(convertTemp(212, 'F')); 