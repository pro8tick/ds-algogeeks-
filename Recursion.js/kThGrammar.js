// We build a table of n rows (1-indexed).
// We start by writing 0 in the 1st row. Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.

var kthGrammar = function (n, k) {
  if (n === 1) {
    return 0;
  }
  const parent = kthGrammar(n - 1, Math.ceil(k / 2));
  const isOdd = k % 2 === 1;

  if (parent === 1) {
    return isOdd ? 1 : 0;
  } else {
    return isOdd ? 0 : 1;
  }
};
