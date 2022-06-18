/*
**  name: missingNo
**  parameter(s):
**      nums        array of numbers 0 to 100 (inclusive) missing a single number
**
**  returns:
**      value of the number missing from the array that should contain 0 to 100
*/

function missingNo(nums) {
    let diff = 5050;    // the sum of all integers 0 to 100 inclusive
    return nums.reduce((prev, curr) => {
      return prev - curr;   // subracts the current element from the starting value, diff
    }, diff);               // the remaining value post reduction will be the missing number
  }