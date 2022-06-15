/*
**  name: remove
**  parameter(s):
**      string          a string with words
**
**  returns:
**      a string with any words in the original string that had one exclamation mark, removed
*/

function remove (string) {
    const arr = string.split(' ');   // the string split into an array with each word as one element
    const result = arr.filter(curr => {
      let ex = 0    // counting the exclamation marks in the current word
      for (let i = 0; i < curr.length; i++) {   // loops through each word
        if (curr[i] == '!') {                   // increments when an '!' is found
          ex++;
        }
      }
      
      if (ex == 1) {    // when the word has one exclamation mark, it is filtered out
        return false;
      } else {          // when the word has 2+ or no exclamation mark, it remains
        return true;
      }
    });
    
    return result.join(' ');    // resulting array is joined back to one string and returned
  }