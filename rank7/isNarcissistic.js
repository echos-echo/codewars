/*
**  name: isNarcissistic
**  parameter(s):
**     n        a number
**
**  returns:
**      true if sum of (each digit)^(length of number) equals the number, false otherwise
*/

function isNarcissistic(n) {
    let nString = n.toString();   // turn the initial number into a string
    let len = nString.length;     // save the length of the number
    let sum = nString.split('').reduce((prev, cur) => { 
      return prev + Math.pow(cur, len);   // summing up the value of each digit in the number to the power of (sum)
    }, 0);
    
    return sum == n ? true : false;   // if the sum is equal to the starting number, return true; otherwise false
  }

  console.log(isNarcissistic(153));