/*
**  name: spinWords
**  parameter(s):
**      string      a string of only letters and spaces
**
**  returns:
**      returns string with any words of 5 or more letters in reverse order
*/

function spinWords(string){
    const split = string.split(' ');        // array with all the words in string split up
    for (let i=0; i<split.length; i++) {    // iterating the array to find the words of length >= 5
      if (split[i].length >= 5) {
        let rev = split[i].split('');
        rev.reverse();                      // reverses the word when it is of length >= 5
        split[i] = rev.join('');
      }
    }
    
    return split.join(' ');
  }