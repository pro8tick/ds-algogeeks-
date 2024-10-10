var longestSubstring = function (s, k) {
  for (var char of Array.from(new Set(s))) {
    if (s.match(new RegExp(char, "g")).length < k) {
      return Math.max(...s.split(char).map((str) => longestSubstring(str, k)));
    }
  }
  return s.length;
};

longestSubstring("aaabb", 3);

console.log();
