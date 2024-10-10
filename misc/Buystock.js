/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var buy = prices[0];
  var sell = prices[1];
  var maxProfit = buy - sell;
  for (i = 1; i < prices.length - 1; i++) {
    buy = Math.min(buy, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i + 1] - buy);
  }
};

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] = digits[i] + 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  digits.unshift(1);
  return digits;
};

console.log(plusOne([9]));
