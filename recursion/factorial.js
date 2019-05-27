const factorial = function factorial(factNum) {
    if(factNum ===1) return 1;
    return factorial(factNum-1) * factNum;
}
console.log('factorial of 5 is',factorial(5));
console.log('factorial of 6 is',factorial(6));
console.log('factorial of 7 is',factorial(7));
