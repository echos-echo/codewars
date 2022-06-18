/*
**  name: transpose
**  parameter(s):
**      song        an array of notes (in string format), to be transposed to another key
**      interval    how many notes it should shift (can be either up or down)
**
**  returns:
**      an array of the transposed notes, all shown in sharp notation (no flats)
*/

function transpose(song, interval){
    const chart = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']   // an array represent a 'chart' of all notes, in ascending order
    const sharpNo = song.map(note => {    // first using a switch case to map any flat notes into sharp notation
      switch (note) {
        case 'Bb':
          return 'A#';
        case 'Db':
          return 'C#';
        case 'Eb':
          return 'D#';
        case 'Gb':
          return 'F#';
        case 'Ab':
          return 'G#';
        default:
          return note;
      }
    });
    
    const transposed = sharpNo.map(note => {    // mapping the transposed notes into a new array
      let newInd = interval + chart.indexOf(note);          // we use this value as a placeholder index, further checking for bounds next...
      
      if (newInd >= chart.length) {    // if the shift goes above the index bounds, index wraps around to beginning of chart
        newInd = newInd - chart.length;
      } else if (newInd < 0) {         // if the shift goes below the index bounds, index wraps around to end of chart
        newInd = chart.length + newInd;
      } else {                                              // if shift stays within bounds, return the new index as is
        newInd += 0;
      }
      return chart[newInd];
    });
    
    return transposed;
  }