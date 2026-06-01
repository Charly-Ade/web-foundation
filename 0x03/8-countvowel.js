function countVowel(str) {
    let count = 0

    for (let i = 0; i < str.length; i++) {
        switch (str[i].toLowerCase()) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                count++
                break
        }
    }
    return count
}

console.log(countVowel("I am going to the market"))