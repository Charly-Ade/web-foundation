/**
 * convert uppercase to lowercase 
 */

function tolowercase(str) {
    let result = ""

    for (let i = 0; i < str.length; i++) {
        if (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90) {
            result += String.fromCharCode(str[i].charCodeAt(0) + 32)
        } else {
            result += str[i]
        }
    }
    return result;
}

function touppercase(str) {
    let result = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122) {
            result += String.fromCharCode(str[i].charCodeAt(0) - 32)
        } else {
            result += str[i]
        }
    }
    return result;
}

console.log(tolowercase("CHARLES NWODO"))
console.log(touppercase("charles nwodo"))