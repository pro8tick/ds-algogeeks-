var longestPalindrome = function (s) {
  let maxLen = 0;
  let subStr = "";

  //expand from given l and r points
  var utility = function (s, l, r) {
    while (l >= 0 && r < s.length && s[l] == s[r]) {
      l--;
      r++;
    }
    if (r - l - 1 > maxLen) {
      maxLen = r - l - 1;
      subStr = s.substring(l + 1, r);
    }
    return;
  };
  //check for every index if palindrome possible by expanding from those points
  for (let i = 0; i < s.length; i++) {
    //odd length
    utility(s, i, i);
    //even length
    utility(s, i, i + 1);
  }
  return subStr;
};
console.log(longestPalindrome("aaaaa"));
