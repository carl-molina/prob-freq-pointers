"use strict";



/**
 * Takes two strings; checks to see if the first string can be built from
 * second string; returns boolean.
 */

function canConstructWord(word, letters) {
  const wordFreq = getFrequencyCounter(word);
  const lettersFreq = getFrequencyCounter(letters);

  for (let key in wordFreq) {
    if (lettersFreq[key] === undefined) {
      return false;
    } else if (wordFreq[key] > lettersFreq[key]) {
      return false;
    }
  }
  return true;
}


function getFrequencyCounter(str) {
  const freqs = {};

  for (const char of str) {
    const curr = freqs[char] || 0;
    freqs[char] = curr + 1;
  }

  return freqs;
}