//Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
var generateParenthesis = function (n) {
  const result = [];
  helper(result, "", 0, 0, n);
  return result;
};

const helper = (result, current, open, close, n) => {
  if (current.length === 2 * n) {
    result.push(current);
    return;
  }

  if (open < n) {
    helper(result, current + "(", open + 1, close, n);
  }
  if (close < open) {
    helper(result, current + ")", open, close + 1, n);
  }
};
