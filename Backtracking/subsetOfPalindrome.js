var partition = function (s) {
  const isPalindrome = (l, r) => {
    while (l < r) {
      if (s[l] != s[r]) {
        return false;
      }
      l++;
      r--;
    }
    return true;
  };

  const result = [];
  const helper = (l, set) => {
    if (l == s.length) {
      result.push(set);
    } else {
      for (let r = l; r < s.length; r++) {
        if (isPalindrome(l, r)) {
          helper(r + 1, [...set, s.slice(l, r + 1)]);
        }
      }
    }
  };

  helper(0, []);
  return result;
};
