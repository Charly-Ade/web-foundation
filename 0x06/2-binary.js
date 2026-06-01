/**
 * binary to decimal using closure
 */

function binaryConverter(num) {
    return function(){
        let decimalValue = 0, base = 1
        while(num > 0){
        let lastDigit = num % 10
        if (lastDigit != 0 && lastDigit != 1) {
            console.log("invalid binary Number")
            break
        }
        decimalValue += (lastDigit * base)
        base *= 2
        num = Math.floor(num / 10)
    }
    return decimalValue
    }
}

const convertToDecimal = binaryConverter(1011)
console.log(convertToDecimal())

