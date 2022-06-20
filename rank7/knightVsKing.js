/*
**  name: knightVsKing
**  parameter(s):
**      knightPosition      an array with the knight's rank at [0] and file at [1]
**      kingPosition        an array with the king's rank at [0] and file at [1]
**
**  returns:
**      "King" if the king is about to attack the knight
**      "Knight" if the knight is about to attack the king
**      "None" if neither are in attacking position
*/

function knightVsKing(knightPosition, kingPosition) {
  
  const files = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];   // array to index the position of files (columns) in chess
  
  // find and store how far apart the king and knight pieces are
  let rankDiff = Math.abs((knightPosition[0] - kingPosition[0]) % 8);
  let fileDiff = Math.abs((files.indexOf(knightPosition[1]) - files.indexOf(kingPosition[1])) % 8);
  
  
  if (rankDiff <= 1 && fileDiff <= 1) {
    return "King";    // when the king is in a position to attack knight
  } else if ((rankDiff == 2 && fileDiff == 1) || (rankDiff == 1 && fileDiff == 2)) {
    return "Knight";  // when the knight is in a position to check the king
  } else {
    return "None";    // if neither are in attacking position
  }
}

