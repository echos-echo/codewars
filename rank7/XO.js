/*
**  name: XO
**  parameter(s):
**      str     string to be checked for Xs and Os
**
**  returns:
**      true when there is the same amount of x's and o's, false otherwise
*/

function XO(str) {
    let exes = 0;     // variable counting the amount of x's
    let ohs = 0;      // variable counting the amount of o's
    for (let i = 0; i < str.length; i++) {    // looping through the string to count x's/o's
        if (str[i] == 'o' || str[i] == 'O') {           // checks for o's, not case sensitive
            ohs++;
        } else if (str[i] == 'x' || str[i] == 'X') {    // checks for x's, not case sensitive
            exes++;
        } 
    }

    // if they'r the same, true, if not, then false
    if (exes == ohs) {
        return true;
    } else {
        return false;
    }
}