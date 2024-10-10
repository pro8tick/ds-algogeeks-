/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function (digits) {
  let len = digits.length;
  for (let i = len - 1; i >= 0; i--) {
    let num = digits[i] + 1;
    if (num == 10) {
      digits[i] = 0;
    } else {
      digits[i] = num;
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};
