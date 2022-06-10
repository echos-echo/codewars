/*
**  name: last
**  parameter(s):
**      iterable        a sequence (either string or array)
**
**  returns:
**      an array of elements from iterable without any elements of the same value directly next to each other
**      original order is preserved
*/

var uniqueInOrder=function(iterable){
    if (iterable == '') { // if the string is empty, returns empty array
      return [];
    }
    
    const final = [];     // the final array with unique elements in order
    
    // loops through the iterable one by one...
    for (let i = 0; i < iterable.length; i++) {
      // when current element is not the same as next element, or array only has one item, adds to final array
      if (iterable[i] != iterable[i + 1] || iterable.length == 1) {
        final.push(iterable[i]);
      } else if (iterable[i] == iterable [i + 1]) {
        continue; // when current element is the same as next element,
                  // does nothing and skips it
      }
    }
    
    return final;
  }