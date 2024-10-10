var validPalindrome = function(s) {
    let left = 0,
      right = s.length - 1;
  
    const isPali = (s, l, r) => {
      while (l < r) {
        if (s[l] !== s[r]) {
          return false;
        }
        l++;
        r--;
      }
      return true;
    };
  
    while (left < right) {
      if (s[left] !== s[right]) {
        return isPali(s, left + 1, right) || isPali(s, left, right - 1);
      }
      left++;
      right--;
    }
  
    return true;
  };
  

  validPalindrome("abca")