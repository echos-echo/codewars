// given a word, returns the middle character in the word
// if length is even, returns the two middlemost characters

function getMiddle(s)
{
  let midIndex = s.length/2;
  return s.length % 2 === 1 ? s[Math.floor(midIndex)] : s.slice(midIndex - 1, midIndex + 1);
}