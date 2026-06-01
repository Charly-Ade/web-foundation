function rot13(str) {
    let result = ""

    for(let i = 0; i < str.length; i++){
        if (str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 109){
          result += String.fromCharCode(str[i].charCodeAt(0) + 13)
        }else if(str[i].charCodeAt(0)>= 110 && str[i].charCodeAt(0) <= 122){
            result += String.fromCharCode(str[i].charCodeAt(0) -13)
        }else{
            result += str[i]
        }
    }
    return result
}
let fullname = "puneyrf ajbqb"
console.log(rot13 (fullname));
