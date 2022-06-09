/*
**  name: squareSum
**  parameter(s):
**      numbers     an array of n numbers
**
**  returns:
**      number      the sum of each number in numbers squared
*/

function squareSum(numbers){ 
  return numbers.reduce((prev, cur) => {
    return prev + (cur*cur);
  }, 0);
}