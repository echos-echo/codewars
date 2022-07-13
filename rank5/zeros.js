/*
**  name: zeros
**  parameters:
**      n       a number to use for the factorial
**  return:
**      the number of trailing zeroes at the end of the factorial, without resolving the factorial itself
*/

function zeros (n) {
  let inc = 0;  // trailing zeroes
  let test = true;  // the condition in which the loop continues
  let base = 5; // the base value with which to add trailing zeroes
  while (test) {
    inc += Math.floor(n/base); 
    // # of zeroes is the floating point quotient depending on the base of 5
    base *= 5;
    // current base is dealt with, increase by one exp
    if (base > n) { // once the base is greater than n, can no longer divide, end loop
      test = false;
    }
  }
  return inc;
}