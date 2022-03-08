for (let numerator = 1; numerator <= 100; numerator++) {
    if (numerator % 3 == 0 && numerator % 15 !== 0) {
        console.log("Fizz")
    } else if (numerator % 5 == 0 && numerator % 15 !== 0) {
        console.log("Buzz")
    } else {
        console.log(numerator)}
}