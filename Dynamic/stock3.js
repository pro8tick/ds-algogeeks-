//https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/solutions/1326824/complete-explanation-of-the-buy-and-sell-stock-problems-using-dp/

var maxProfit = function (prices) {
  let d_i20 = 0;
  let d_i21 = -Infinity; // base case for second transaction
  let d_i10 = 0;
  let d_i11 = -Infinity; //base case for second transaction

  for (let i = 0; i < prices.length; i++) {
    d_i10 = Math.max(d_i10, d_i11 + prices[i]);
    d_i11 = Math.max(d_i11, 0 - prices[i]);
    d_i20 = Math.max(d_i20, d_i21 + prices[i]);
    d_i21 = Math.max(d_i21, d_i10 - prices[i]);
  }
  return d_i20;
};
