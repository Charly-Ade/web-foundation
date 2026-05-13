/**
 * convert base 10 to binary
 * 
 */
   let d = 5;
let binary = "";

while (d > 0) {
    binary = (d % 2) + binary

    d = Math.floor(d / 2);
}

console.log(binary);
