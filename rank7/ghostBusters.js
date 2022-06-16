/*
**  name: ghostBusters
**  parameter(s):
**      building        a string modeled to be a 'building', may or may not contain whitespace (ghosts)
**
**  returns:
**      a string with whitespaces(ghosts) removed
*/

function ghostBusters(building) {
    const newBuild = building.split('');                    // array with the original string w/ characters split up
    const noGhost = newBuild.filter(char => char != ' ');   // new array with all the whitespace in newBuild filtered out
    
    if (noGhost.join('') === building) {                    // if there is no change/there were no whitespaces...
      return "You just wanted my autograph didn't you?";
    }
    
    return noGhost.join('');    // assumes whitespace was removed; return the modified array joined into one string
    
  }

  console.log(ghostBusters('h o  me'));
