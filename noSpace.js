/*
**  name: noSpace
**  parameter(s):
**      x       a string, with spaces to be removed
**
**  returns:
**      a string with all the spaces removed
*/

function noSpace(x){
  return x.split('').map(c => {
    if (c != ' ') {
      return c;
    }
    }).join('');
}
