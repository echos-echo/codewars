/*
**  name: even_or_odd
**  parameter(s):
**      number      a number
**
**  returns:
**      "Odd" if number is odd, and "Even" if number is even
*/

function even_or_odd(number) {
  return number % 2 == 1 || number % 2 == -1 ? "Odd" : "Even";
}