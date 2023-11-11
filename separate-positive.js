"use strict";


/**
 * Takes an array of non-zero numbers; separate positive numbers
 * to the left and negative numbers to right of arr; returns
 * original array
 */

function separatePositive(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] > 0) {
      left++;
    }
    if (arr[right] < 0) {
      right--;
    }
    if (arr[left] < 0 && arr[right] > 0) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return arr;
}
