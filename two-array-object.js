"use strict";

/** take two arrays of different lengths; return an object with the first array
 * as keys and the second as values, keys w/o values will be null, extra values
 * will be ignored.
 */
// init an obj
//loop through the keys array (regular for loop)
// loop for length of keys
////if index > values length -1, obj[keys at index] should equal null
//make the obj[keys at index 0] = [values at index 0]

function twoArrayObject(keys, values) {
  let arrayPairs = {};
  let char;
  // debugger;
  for (let i = 0; i< keys.length; i++) {
    char = keys[i]
    if (i > values.length-1) {
      arrayPairs[char] = null;
    } else {
      arrayPairs[char] = values[i];
    }
  }
  return arrayPairs;
}
