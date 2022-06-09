/*
**  name: replaceDots
**  parameter(s):
**      str     the string where dots (.) will be replaced with dashes (-)
**
**  returns:
**      a string where every dot (.) has been replaced by a dash (-)
*/

var replaceDots = function(str) {
  let newStr = str;                     // so we don't mutate the input
  while (newStr.includes('.')) {        // loop runs until there are no more dots left to replace
    newStr = newStr.replace('.', '-');  // replaces first found dot (one at a time)
  }
  return newStr;
}
