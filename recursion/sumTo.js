const sumTo = function sumTo(number) {
    if(number === 0 || number === 1) {
        return number;
    }
    return number + sumTo(number-1)
}

console.log(sumTo(5));