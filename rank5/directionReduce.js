/*
**  name: dirReduc
**  parameter(s):
**      arr         an array full of cardinal directions to be reduced
**
**  returns:
**      an array with the directions reduced, such that there are no subsequent opposing directions
*/

function dirReduc(arr){
    const newDir = arr;    // array where we will modify the directions
    
    for (let i = 0; i < newDir.length; i++) {
      if ((newDir[i] == "NORTH" && newDir[i + 1] == "SOUTH") || (newDir[i] == "SOUTH" && newDir[i + 1] == "NORTH")) {
        newDir.splice(i, 2);      // if the current and next element are north or south in either order, skip to the next next iteration
        i -= i*2;                 // adjust the i value to account for removed values
        continue;                 // and discontinue the current iteration onto the next one
      } else if ((newDir[i] == "EAST" && newDir[i + 1] == "WEST") || (newDir[i] == "WEST" && newDir[i + 1] == "EAST")) {
        newDir.splice(i, 2);      // if the current and next element are east or west in either order, skip to the next next iteration
        i-=i*2;                   // adjust the i value to account for removed values
        continue;                 // and discontinue the current iteration onto the next one
      } else {
        continue;       // if neither north and south, or east and west appear in sequence, keep the element, continue to next iteration
      }
    }
  
    return newDir;    // array with fully reduced directions gets returned
  }