/*
**  name: interest
**  parameter(s):
**      P       number, the principal amount
**      r       the interest rate
**      n       the total period in which interest will accrue
**
**  returns:
**      an array with [the cost of simple interest, the cost of compounded interest]
*/

function interest(P,r,n) {
  let simple = P * r * n;     // simple interest initialized to the total cost
  let comp = P;               // compound interest, initialized to the base (principal) amount
  
  for (let i = 0; i < n; i++) {   // iterates through each period, reassigns compound interest at the end of each period
    comp += comp * r;
  }
  const amounts = [Math.round(simple) + P, Math.round(comp)];   // the array to return with both simple and compound interest calculated
  return amounts;
}