"use strict";


/**
 * Takes a sorted array of numbers and target number; determines
 * if there is a pair of numbers in nums where the average of the
 * pair equals target number; returns boolean.
 */

function averagePair(nums, targetAvg) {
  // TODO: can consider left and right as names
  let first = 0;
  let last = nums.length -1;

  while (first < last) {
    const average = (nums[first] + nums[last]) / 2;
    if (average === targetAvg) {
      return true;
    } else if (average < targetAvg) {
      first++;
    } else {
      last--;
    }
  }
  return false;
}

