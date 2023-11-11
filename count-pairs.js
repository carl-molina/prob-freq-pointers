"use strict";



/**
 * Takes an array of integers and a number; returns the number of pairs of
 * integers in the array whose sum is equal to the second parameter (number)
 */

function countPairs(integers, num) {
  let count = 0;

  for (let i = 0; i < integers.length - 1; i++) {
    for (let j = i + 1; j <= integers.length; j++) {
      if (integers[i] + integers[j] === num) {
        count++;
      }
    }
  }
  return count;
}
