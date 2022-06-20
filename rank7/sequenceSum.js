/*
**  name: sequenceSum
**  parameter(s):
**      begin       the number the sequence starts at
**      end         the number the sequence ends at
**      step        how much each number in the sequence subsequently increases by
**
**  returns:
**      the total sum of each number in the sequence, a number
*/

const sequenceSum = (begin, end, step) => {
    if (begin > end) {    // if begin is larger than end, return 0. there are no iterations to do
      return 0;
    }
    
    let sum = 0;          // the total sum of the sequence
    let num = begin;      // the number after each step in the iteration
    while (num <= end) {
      sum += num;         // adds the current number to the total sum
      num += step;        // number increments by the step amount
    }
    
    return sum;
  };