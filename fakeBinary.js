/*
**  name: fakeBin
**  parameter(s):
**      x       a string, but will be digits; guaranteed never empty
**
**  returns:
**      a string of 0s and 1s, 0s represent < 5 and 1s represent >= 5
*/

function fakeBin(x){
  return x.split('').map(i => {
    if (i < 5) {
      return 0;
    } else if (i >= 5) {
      return 1;
    }
  }).join('');
}