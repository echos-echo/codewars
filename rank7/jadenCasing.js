/*
**  name: toJadenCase
**  parameter(s):
**      N/A
**
**  returns:
**      the object with the first letter of every word uppercased
*/

String.prototype.toJadenCase = function () {
  return this.split(' ').map(word => word[0].toUpperCase().concat(word.substring(1))).join(' ');
  
};