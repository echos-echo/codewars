/*
**  name: doubleChar
**  parameter(s):
**      str     a string variable
**
**  returns:
**      a string with each character in the input string doubled in place
*/

function doubleChar(str) {
  const newArr = str.split('');     // turns str into an array where
                                    // the characters are split into separate elements
  const double = newArr.map(c => {  // each character is doubled and put into a new array
    return c + c;
  })
  return double.join('');
}