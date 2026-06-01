function reverseString(str) {
    let i = str.length - 1
    let reversed = ""
    while (i >= 0) {
        reversed += str[i]
        i--
    }
    return reversed
}


console.log(reverseString("I am going to the market"))