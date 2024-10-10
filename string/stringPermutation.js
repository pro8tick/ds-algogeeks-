const stringPermutations = (str) => {
  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
  return str
    .split("")
    .reduce(
      (acc, letter, i) =>
        acc.concat(
          stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(
            (val) => letter + val
          )
        ),
      []
    );
};

console.log(stringPermutations("abc"));

class Solution {
  find_permutation(S) {
    //code here
    if (S.length < 2) return S;
    let result = [];

    for (let i = 0; i < S.length; i++) {
      let letter = S[i];
      if (S.indexOf(letter) !== i) continue;
      let remain = S.slice(0, i) + S.slice(i + 1);
      for (let permu of this.find_permutation(remain)) {
        result.push(letter + permu);
      }
    }

    return result.sort();
  }
}
