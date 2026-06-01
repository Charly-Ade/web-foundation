/**
 * task: 3-key
 */

const cars = ["BMW", "Range Rover", "Benz"]

console.log(Object.keys(cars))

cars.forEach((index, value) => {
    console.log(`${index}: ${value}`)
})