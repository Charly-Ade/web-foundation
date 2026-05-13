/**
 * prime number
 */
let is_prime = true

for (let i = 2; i <= 50; i++){
    for (let y = 2; y <= i; y++){
        if (i %  y === 0 && i !== y) {
            is_prime = false
            break
        }
    }
    if (is_prime)console.log(i)
        is_prime = true
}


let i = 1
while (i <= 50){
    i++;
   let y = 2
   while(y <= i){
    y++;
    if(i % y == 0 && i !==y){
        is_prime = false
        break
    }
   } 
   if (is_prime)console.log(i)
    is_prime =true
}

