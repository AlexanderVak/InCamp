const factorialNum = 9
const range = [5, 1]

function pluralize(num, one, few, many) {
    if (num >=20) {
        num %= 10
    }
    switch (true) {
        case num === 0:
            return few
        case num >= 2 && num <= 4:
            return many
        case num >= 5 && num <= 19:
            return few 
        default:
            return one
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
console.log('Pluralization for word яблуко with number 1', pluralize(1, 'яблуко', 'яблук', 'яблука'));
console.log('Pluralization for word яблуко with number 3', pluralize(3, 'яблуко', 'яблук', 'яблука'));
console.log('Pluralization for word яблуко with number 10', pluralize(10, 'яблуко', 'яблук', 'яблука'));
console.log('Pluralization for word яблуко with number 134', pluralize(134, 'яблуко', 'яблук', 'яблука'));
console.log('Factorial of number 9 is', findFactorial(factorialNum));
console.log('Sum for range is', rangeSum(range));
