// given a length, minimum, and maximum, will return a string
// - of the length
// - begins at the minimum
// - no digit exceeds the maximum
// - will continuously inc/dec between the min and max
// - until the length requirement is met

function ascendDescend(length, minimum, maximum) {
    let final = [minimum];
    let switchWhen = false;
    while (final.length < length) {
      if (minimum === maximum) {
        final.push(minimum);
        continue;
      } else if (maximum < minimum || length == 0) {
        return '';  
      }else if (final[final.length - 1] >= maximum) {
        switchWhen = false;
      } else if (final[final.length - 1] <= minimum) {
        switchWhen = true;
      }
      switchWhen ? final.push(final[final.length - 1] + 1) : final.push(final[final.length - 1] - 1);
    }
    return final.join('').slice(0, length);
  }