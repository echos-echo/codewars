// given an array and a number
// returns an array of length number containing 'number' of even ints
// starting from the end of the array

function evenNumbers(array, number) {
    // creates a temporary array in which the values are in reverse order
    let tempArr = [...array].reverse();
    let solution = [];
    // will keep looping so long as we have no hit the target number of even numbers
    while (solution.length !== number) {
      solution.push(tempArr.find(num => num % 2 === 0));
      tempArr.splice(tempArr.indexOf(solution[solution.length - 1]), 1);
    }
    return solution.reverse();
  }