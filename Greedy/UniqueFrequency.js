var minDeletions = function (s) {
  const arr = Array(26).fill(0);
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    let index = s[i].charCodeAt(0) - "a".charCodeAt(0);
    arr[index]++;
  }

  arr.sort((a, b) => b - a);

  for (let i = 1; i < 26; i++) {
    //to make the array strictly decreasing
    while (arr[i] && arr[i] >= arr[i - 1]) {
      arr[i]--;
      res++;
    }
  }

  return res;
};

// A string s is called good if there are no two different characters in s that have the same frequency.

// Given a string s, return the minimum number of characters you need to delete to make s good.

// The frequency of a character in a string is the number of times it appears in the string. For example, in the string "aab", the frequency of 'a' is 2, while the frequency of 'b' is 1.
