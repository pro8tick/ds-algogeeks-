/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) {
    return [];
  }

  const map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const rtn = [];
  const dfs = function (index, word) {
    if (word.length < digits.length) {
      let number = digits[index];
      map[number].forEach((letter) => {
        dfs(index + 1, word + letter);
      });
    } else {
      rtn.push(word);
    }
  };
  dfs(0, "");
  return rtn;
};

console.log(letterCombinations("234"));
