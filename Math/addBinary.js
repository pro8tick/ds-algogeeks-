var addBinary = function (a, b) {
  let res = "",
    carry = 0;
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    let sum = (Number(a[i]) || 0) + (Number(b[j]) || 0) + carry;
    res = (sum % 2) + res;
    carry = sum > 1 ? 1 : 0;
  }

  if (carry) res = 1 + res;
  return res;
};

addBinary("1010", "1011");
