/*
**  name: sumTwoSmallestNumbers
**  parameter(s):
**      numbers         an array of numbers; guaranteed to be at least 4 integers, and positive integers
**
**  returns:
**      the sum of the two smallest positive integers found in array numbers
*/

function sumTwoSmallestNumbers(numbers) {  
    const holder = numbers;   // putting the array in a new var so we don't mutate the input
    let first = Infinity;     // variable for first lowest number
    let sec = Infinity;       // variable for second lowest number
    
    // looping through to find the first lowest number
    for (let i = 0; i < holder.length; i++) {
      if (holder[i] < first) {
        first = holder[i];
      }
    }
    
    // removes the lowest number from the array, so we do not select it again
    let indF = holder.indexOf(first);
    holder.splice(indF, 1);
    
    // looping through to find the second lowest number
    for (let i = 0; i < holder.length; i++) {
      if (holder[i] < sec && holder[i] >= first) {
        sec = holder[i];
      }
    }
    
    return first + sec;   // returns the sum of the two lowest positive integers
  }