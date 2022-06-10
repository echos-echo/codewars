/*
**  name: pigIt
**  parameter(s):
**      str     the string of words to be modified
**
**  returns:
**      returns string str but with the first letter moved to the end of words, and "ay" added to the end of every word
**      punctuation marks are not affected
*/

function pigIt(str){
    let newArr = str.split(' ');        // array with the words in str split into individual elements
    newArr = newArr.map(x => {          // modifying each word in newArr one by one
      let c = x.charAt(0);              // stores the first character of a word
      let word = x.substring(1);        // stores the rest of the word, sans the first character
      if (!/^[A-Za-z]*$/.test(x)) {     // checks to make sure that the word is entirely alphabetical characters
        return x;                       // if the word is not entirely alphabetical characters, returns the 'word' as it is
      }
      return word + c + "ay";           // if the word is entirely alphabetical characters, returns the modified pig latin word
    })
    return newArr.join(' ');
  }
