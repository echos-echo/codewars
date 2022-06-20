/*
**  name: squareDigits
**  parameter(s):
**      num         number to modify
**
**  returns:
**      a number where every individual digit in num has been squared
*/


function squareDigits(num){
  // turn the number into a string and split it such that each 'char' is an element in an array
  let numArr = num.toString().split('');
  
  // create new array such that each number in numArr is squared and mapped to the same index
  let sqrd = numArr.map(cur => Math.pow(parseInt(cur), 2));
  
  // turn the array sqrd back into a number value so we can return it
  let result = parseInt(sqrd.join(''));
  
  return result;
}