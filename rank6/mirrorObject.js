// given an object that has properties with no values
// the value for each property will be its string, but in mirror order

const mirror = obj => {
    const objValues = Object.keys(obj).map(value => value.split('').reverse().join(''));
    return Object.keys(obj).reduce((prev, curr, ind) => {
      prev[curr] = objValues[ind];
      return prev;
    }, {});
  };