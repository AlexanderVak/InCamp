const factorialNum = 9
const range = [5, 1]

function pluralize(num, one, few, many) {
    switch (num) {
        case 0:
            return one
    
        default:
            break;
    }
}
function findFactorial(num) {
    if (num <= 1) {
        return 1
    }
    for (let i = num - 1; i > 0; i--) {
        num = num * i
    }    
    return num
}

function rangeSum(range) {
    first = range[0]
    second = range[1]
    sum = 0

    if (first > second){
        first = range[1]
        second = range[0]
    }

    for (let i = first; i <= second; i++) {
        sum += i        
    }
    return sum    
}

console.log('Factorial of number 9 is', findFactorial(factorialNum));
console.log('Sum for range is', rangeSum(range));
