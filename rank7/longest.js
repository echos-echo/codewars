/*
**  name: longest
**  parameter:
**      s1      first string, any length
**      s2      second string, any length
**  return:
**      a string with unique characters from both s1 and s2, appearing only once and in alpha order
*/

function longest(s1, s2) {
  const combine = (s1 + s2).split('');  // combining the strings and making each character an element in an array
  // amount of repetition doesn't matter and they will be sorted at the end
  const unique = [];  // an array where the unique characters will go
  combine.forEach(char => { // checks every element in combine
    if (!unique.includes(char)) { // if the current element is not found already in unique...
      unique.push(char);          // add it in
    }
  });
  // sorts unique into alpha order then returns it as a single string
  return unique.sort().join('');
}