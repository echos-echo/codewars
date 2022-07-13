/*
**  name: getTheVowels
**  parameter:
**      word    a string of any length
**  return:
**      the number of consecutive vowels in the order 'aeiou' counted in the string word
*/

function getTheVowels(word) {
  // array of vowels stored
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  // variable to track how many consecutive vowels we've seen
  let consec = 0;
  for (let i = 0; i < word.length; i++) { // for each char in word...
    if (word[i] === vowel[0]) { // check if the char is the first item in vowel, the next character we expect
      let temp = vowel.shift(); // stores the first vowel in a temporary variable, and removes it
      vowel.push(temp); // pushes the vowel we just removed to the end of the expected queue
      consec++; // increase the consecutive vowel count
    } // the new vowel[0] is the next expected vowel
  }
  return consec;
}