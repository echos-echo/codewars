// given an array of integers that represents a number, return an array with +1 added to the number,
// and represented accordingly by the array

// i.e. - [0, 1, 5, 6, 6] represents 01566 and will return [0, 1, 5, 6, 7]
// [9, 9] represents 99 and will return [1, 0, 0]

function upArray(arr){
    if (arr.some(num => num < 0 || num > 9) || arr.length === 0) return null;
    
    let remainder = 0;
    for(let i = arr.length - 1; i >= 0; i--) {
        arr[i]++;
        if (arr[i] === 10) {
            remainder = 1;
            arr[i] = 0;
        } else {
            remainder = 0;
        }
      
        if (remainder === 0) {
            break;
        }
    }
    if (remainder === 1) {
         arr.unshift(1);
    }
    return arr;
}