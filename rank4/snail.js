// a function that takes in an array of integer arrays,
// and returns the elements arranged from outermost to middle in clockwise direction

// ie - 

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

snail = function(array) {
    // preliminary checks: in case of an empty array or array with only one element
    if (array.length === 1) {
      return array[0].length === 0 ? [] : [array[0][0]];
    }
    
    const snailed = [];
    const length = array.length ** 2;
    
    // starting direction of the movement
    let direction = 'right';
    // keeps looping until all elements are in snailed
    while (snailed.length < length) {
        // checks the direction
        switch (direction) {
            // moves the topmost array into snailed
            case 'right':
                snailed.push(...array.shift());
                direction = 'down';
                break;
            // moves down the RHS of the array matrix
            case 'down':
                for (let i = 0; i < array.length; i++) {
                snailed.push(array[i].pop());
                }
                direction = 'left';
                break;
            // moves the bottommost array into snailed, in reverse order
            case 'left':
                snailed.push(...array.pop().reverse());
                direction = 'up';
                break;
            // moves up the LHS of the array matrix
            case 'up':
                for (let i = array.length - 1; i >= 0; i--) {
                snailed.push(array[i].shift());
                }
                direction = 'right';
                break;
            // hypothetically, should never be hitting the default case
            default:
                console.log('something happened');
        }
    }

    return snailed;
}