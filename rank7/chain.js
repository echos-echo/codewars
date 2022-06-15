/*
**  name: chain
**  parameter(s):
**      input     starting value, an number
**      fs        array of functions to execute on input, in indexed order
**
**  returns:
**      final value after all functions have been executed on input, in order of index
*/

function chain(input, fs) {
    const final = fs.reduce((prev, cur) => {
      return cur(prev); // takes the return value of the previous function and puts it into the current one
    }, input);          
    
    return final;
  }