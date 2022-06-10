/*
**  name: findOutlier
**  parameter(s):
**      integers    an array of at least length 3, full of integers
**
**  returns:
**      returns the outlier value in the array of integers;
**      in an array full of even values, the outlier will be odd. in an array full of odd values, the outlier will be even.
*/

function findOutlier(integers){
    let comp = []; // array of odd value(s) to compare to
    let val = []; // array of even value(s)
    integers.forEach(x => {     // checks each value to see if it is even or odd
      if (x % 2 == 1 || x % 2 == -1) {
        comp.push(x);
      } else if (x % 2 == 0) {
        val.push(x);
      }
    })
    return comp.length == 1 ? comp[0] : val[0]; // if comp only has one value in it, the outlier was in comp. if not, outlier was in val
  }