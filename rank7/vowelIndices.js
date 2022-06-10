/*
**  name: vowelIndices
**  parameter(s):
**      word        the word to be checked for vowel indices
**
**  returns:
**      an array of the indices of the vowels in word, 1-indexed
*/

function vowelIndices(word){
  word = word.toLowerCase();    // so i won't need to worry about case sensitivity
  let indeces = [];             // the array where the indexes of vowels will go
  
  for (let i = 0; i < word.length; i++) {   // checking each letter in word
    if (word[i] == 'a' || word[i] == 'e' || word[i] == 'i' ||
        word[i] == 'o' || word[i] == 'u' || word[i] == 'y') {
      indeces.push(i + 1);  // adding one to the index before adding it to the array since
                            // the prompt requires the array of vowel indices to be 1-indexed, not zero-indexed
    }
  }
  
  return indeces;
}