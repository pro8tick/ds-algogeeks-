function binomialCoeff(n, k) {
  let res = 1;

  // Since C(n, k) = C(n, n-k)
  if (k > n - k) k = n - k;

  // Calculate value of [n*(n-1)*---*(n-k+1)] /
  //                    [k*(k-1)*---*1]
  for (let i = 0; i < k; ++i) {
    res *= n - i;
    res = Math.floor(res / (i + 1));
  }

  return res;
}

// A Binomial coefficient based function
// to find nth catalan number in O(n) time
function catalan(n) {
  // Calculate value of 2nCn
  c = binomialCoeff(2 * n, n);

  // return 2nCn/(n+1)
  return Math.floor(c / (n + 1));
}

// Driver code
for (let i = 0; i < 10; i++) document.write(catalan(i) + " ");
