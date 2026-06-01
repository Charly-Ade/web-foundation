function sumarrays(a, b) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i] + b[i];
    }
    return sum;
}
console.log(sumarrays([1, 2, 3], [4, 5, 6]))