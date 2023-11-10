"use strict";



/**
 * Takes two strings; checks to see if the first string can be built from
 * second string; returns boolean.
 */

function canConstructWord(word, letters) {
  const wordFreq = getFrequencyCounter(word);
  const lettersFreq = getFrequencyCounter(letters);

  // TODO: let letter in wordFreq
  for (let key in wordFreq) {
    //TODO: can combine if and else if return false statements
    if (lettersFreq[key] === undefined) {
      return false;
    } else if (wordFreq[key] > lettersFreq[key]) {
      return false;
    }
  }
  return true;
}

/**
 * Takes in str; creates an obj w/ frequency of characters; returns obj
 */

function getFrequencyCounter(str) {
  const freqs = {};

  for (const char of str) {
    const curr = freqs[char] || 0;
    freqs[char] = curr + 1;
  }

  return freqs;
}