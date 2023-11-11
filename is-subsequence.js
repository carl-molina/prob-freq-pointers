"use strict";


/**
 * Takes two strings, s1 and s2; checks whether the chars in s1 `form a
 * subsequence of the characters in `s2; returns boolean
 *        ('sing', 'sting') // true
 *        ('abc', 'acb') // false (order matters)
 */

function isSubsequence(s1, s2) {
  let s1Idx = 0;
  let s2Idx = 0;

  while (s1Idx < s1.length) {
    if (s1[s1Idx] === s2[s2Idx]) {
      s1Idx++;
      s2Idx++;
    } else if (s1[s1Idx] !== s2[s2Idx]) {
      s2Idx++;
    }

    // checks to see if subsequence is successful based on length
    // example: if s1Idx = 4 and 'sing' length is 4, it's a subsequence
    if (s1Idx === s1.length) {
      return true;
    }

    // checks to see if there are no more chars left on s2
    if (s2[s2Idx] === undefined) {
      return false;
    }

  }
  return false;
}
