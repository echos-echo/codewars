// given an array of numbers, keep iterating such that the current max value in the array
// decrements by the value of another number in the array
// until the values can decrement no further

// then return the value of the smallest values all added URLSearchParams

// this solution works, but is not performance efficient
function solution(numbers) {
    while(numbers.some(number => numbers.some(comp => number > comp))) {
        let tempMin = Math.min.apply(null, numbers);
        let tempMax = Math.max.apply(null, numbers);
        let tempMaxInd = numbers.indexOf(tempMax);
        numbers[tempMaxInd] = tempMax - tempMin;
    }
    return numbers.reduce((prev, curr) => prev + curr);
}

// optimal solution that uses euclidean method to get the greatest common divisor
function solution(numbers) {
    const gcd = (a, b) => {
        if (!b) {
            return a;
        }
        return gcd(b, a%b);
    }
    
    let multiple = numbers.reduce(gcd);
    return multiple * numbers.length;
}