/*
**  name: removeEveryOther
**  parameter(s):
**      arr     array to parse
**
**  returns:
**      an array with every other element in arr removed
*/

function removeEveryOther(arr){
    const newArr = arr;     // initialize a new array to arr so we don't mutate it
    let remove = false;     // variable to keep track of whether or not an element was previously removed
    for (let i = 1; i < newArr.length; i++) {
        if (remove == false) {      // if the previous element was not removed,
            newArr.splice(i, 1);    // remove the current element—
            remove = true;          // and indicate that an element was removed
            i--;                    // move the index down since the next element will become the current index #
        } else {
            remove = false;         // if the previous element was removed, then the current element is not to be removed
        }
    }
    return newArr;
}
