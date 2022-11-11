// In the morning all the doors in the school are closed.
// there are N doors. there are exactly N children in this school, and they come one by one.

// children pass through some doors they change the door status
// (i.e. Open -> Closed, Closed -> Open)
// Each student has a number, and each i-th student alters the status of every i-th door.
// i.e. when the first child comes to the schools, he changes every first door (he opens all of them).
// The second one changes the status of every second door (he closes some doors: the 2nd, the 4th and so on).
// Finally, when the last one – the n-th – comes to the school, he changes the status of each n-th door (there's only one such door, though).

// return how many doors are left opened after all the students have come.

function doors(n){
    // i didn't expect this to work but it did
    // looked at the test cases and see what formula they all had in common
    // instead of manually calculating all the doors...
    return Math.floor(Math.sqrt(n));
  }