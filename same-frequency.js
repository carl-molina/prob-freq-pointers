"use strint";

/** takes two positive integers, determines if individual ints occur at same freq
 * returns boolean *
 */

//take each integer turn to array
// //init object on cb for get frequencycounter
//loop through array, push each key value pair to obj
//loop through object
//compare values
//if they don't have same values return false
//else return true
function sameFrequency(num1,num2) {
  let firstInt = getFrequencyCounter(num1.toString());
  let secondInt = getFrequencyCounter(num2.toString());

  for (let number in firstInt) {
    // debugger;
    if (firstInt[number] !== secondInt[number]) {
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
