// given a number n >= 0, return an array with n subarrays (representing the levels of a pyramid)
// subarrays are of ascending length until it reaches length n
// each subarray should be filled with 1's

function pyramid(n) {
    // initializes an array with n empty values
    const pyramidArray = Array(n);

    // will loop through for each index in pyramidArray
    for (let i = 0; i < n; i++) {
        // creates a temporary array representing a subarray of incrementing length
        let temp = Array(i + 1);
        // each value in the subarray will be 1
        for (let j = 0; j <= i; j++) {
            temp[j] = 1;
        }
        pyramidArray[i] = temp;
    }
    return pyramidArray;
}