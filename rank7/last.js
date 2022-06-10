/*
**  name: last
**  parameter(s):
**      x       a string of words
**
**  returns:
**      an array of the words in x, sorted alphabetically by the last character in the word
*/

function last(x){
  const toSort = x.split(' ').map(w => {
    return w.split('').reverse().join('');
  });                         // array of the words in string x, split up
                              // words are reversed to compare the last letter in them
  
  toSort.sort((a, b) => {     // sorts them in alphabetical order
    if (a[0] < b[0]) {
      return -1;
    } else if (a[0] > b[0]) {
      return 1;
    } else if (a[0] === b[0]) {
      return 0;               // keeps them in original order if the char is the same
    }
  });
  const final = toSort.map(w => {
    return w.split('').reverse().join('');  // individual words are reversed back into their original order, after the sorting
  });
  
  return final;
}