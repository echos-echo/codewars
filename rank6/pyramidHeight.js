// given a number of cubes to build a square pyramid with,
// calculate how many layers of a square pyramid you can build
// - each layer has a dimension of one additional cube than the layer above it

function pyramidHeight(n) {
    let l = 0;          // # of layers
    let totalCubes = 0; // total # of cubes used
    
    // loops until we go over the amount of cubes we have
    while (totalCubes < n) {
        l++;                        // increase our layer
        totalCubes += l**2;         // increases the amount of cubes we've used
        totalCubes > n ? l-- : l;
        // if we go over more than the cubes we have, decrement the layer
        // and loop will be broken next iteration
    }
    
    return l;
  }