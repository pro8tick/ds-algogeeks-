var lengthOfLongestSubstring = function (s) {
  let sLen = s.length,
    maxLen = 0,
    maxStr = "",
    temp,
    position,
    i;

  for (i = 0; i < sLen; i++) {
    temp = s[i];
    position = maxStr.indexOf(temp);

    if (position > -1) {
      maxStr = maxStr.substring(position + 1);
    }

    maxStr += temp;
    maxLen = Math.max(maxLen, maxStr.length);
  }

  return maxLen;
};

lengthOfLongestSubstring("abcabcbb");
