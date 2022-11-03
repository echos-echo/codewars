// returns the total number of smiley faces
// valid smiley faces include:
// : or ; as eyes,
// can have an OPTIONAL - or ~ as a nose
// ) or D as a mouth

//return the total number of smiling faces in the array
function countSmileys(arr) {
    return arr.reduce((prev, smiley) => {
      smiley.search(/[;{1}|:{1}][-~]?(\){1}|D{1})/) >= 0 ? prev.push(smiley) : prev;
      return prev;
    }, []).length;
}