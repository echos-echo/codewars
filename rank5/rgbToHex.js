/*
**  name: rgb
**  parameters:
**      r       first decimal rgb value
**      g       second decimal rgb value
**      b       third decimal rgb value
**
**  returns:
**      a string of the input r g b appended and converted to hex digits
*/

function rgb(r, g, b){
  const rgbs = [r, g, b];   // not entirely necessary, but easier to check each value
  
  rgbs.forEach((curr, i) => {   // rounding out of bounds values to the closest bound
    if (curr > 255) {
      rgbs[i] = 255;
    } else if (curr < 0) {
      rgbs[i] = 0;
    }
  });
  
  const hexes = rgbs.map(dec => {   // converting each decimal value to hex
    let hex = dec.toString(16);
    if (hex.length < 2) {           // checking to make sure each hex value is length 2
      return '0' + hex;             // concats a '0' filler in front if it is not
    }
    return hex;       // returns hex value as is if there are no issues 
  });
  
  return hexes.join('').toUpperCase();  // joins the hex values as a string all uppercased
}