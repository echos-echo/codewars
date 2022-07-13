/*
**  name: spongeMeme
**  parameters:
**      sentence    a string of any length
**  returns:
**      the string sentence with every other letter uppercased
*/

function spongeMeme(sentence) {
  let base = '';    // this will end up being the finished product as we modify it
  for (let i = 0; i < sentence.length; i++) {
    if (i % 2 === 0) {  // if the char in sentence is at an even index
      base = base + sentence[i].toUpperCase();  
    } else if (i % 2 === 1) {   // if the char in sentence is at an odd index
      base = base + sentence[i].toLowerCase();  
    }
  }
  return base;
}