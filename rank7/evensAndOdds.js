/*
**  name: evensAndOdds
**  parameter:
**      num     a number, positive integer guaranteed
**  return:
**      num in a binary string if it is even, in hexadecimal string if it is odd
*/

function evensAndOdds(num){
  if (num % 2 === 0) {  // case of even numbers
    return num.toString(2); // converts the number to a string in binary
  } else {  // case of odd numbers
    return num.toString(16);  // converts the number to a string in hexadecimal
  }
}