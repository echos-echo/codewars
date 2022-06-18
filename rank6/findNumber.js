/*
**  name: findNumber
**  parameter(s):
**      compare     callback function; returns 1 if input is greater than actual value, -1 if less than actual value, 0 if equal to actual value
**
**  returns:
**      the actual found value; a number
*/

function findNumber(compare) {
  let res;            // the result of the compare function, either 1, -1, or 0
  let comp = 50;      // the number to compare to; set to 50 because its between 0 and 100
  let diff = comp/2;  // how much to increment/decrement comp by in each iteration
  while (res != 0) {
    res = compare(comp);  // run the callback at the start of each loop to update the current compare value
    
    switch (res) {
        case -1:          // if -1, the compare value was too low; increment it and try again
          comp += diff;
          break;
        case 1:           // if 1, the compare value was too high; decrement it and try again
          comp -= diff;
          break;
    }
    diff /= 2;            // updates the diff value to be more precise each loop
  }
  return comp;
}