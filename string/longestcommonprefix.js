// var longestCommonPrefix = function(strs) {
//     if (strs.length === 0) return "";
//     let prefix = strs[0];
//     for (let i = 1; i < strs.length; i++) {
//       while (strs[i].indexOf(prefix) !== 0) {
//         prefix = prefix.substring(0, prefix.length - 1);
//         if (prefix === "") return "";
//       }
//     }
//     return prefix;
// };

var longestCommonPrefix = function (strs) {
  "use strict";
  if (strs === undefined || strs.length === 0) {
    return "";
  }

  return strs.reduce((prev, next) => {
    let i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  });
};

longestCommonPrefix(["flower", "flow", "flight"]);
