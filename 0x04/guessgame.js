/**
 * guess game
 */
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function guess() {
    return Math.floor (Math.random() * 5) + 1
}

let trail = 3 

while (trail > 0) {
    const guessNumber = guess()
    rl.question("Guess a number from 1 to 5: ", (num) => {
        if (num == guessNumber) {
            console.log("Congratulations! You guessed the number.")
        } else {
            console.log('Wrong guess! Try again')
        }
    })
    trail--
}
