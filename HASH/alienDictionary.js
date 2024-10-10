var isAlienSorted = function (words, order) {
  let map = new Map();
  order.split("").forEach((el, i) => map.set(el, i));

  for (let i = 0; i < words.length - 1; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (j >= words[i + 1].length) return false;
      if (words[i][j] === words[i + 1][j]) continue;
      let pos1 = map.get(words[i][j]);
      let pos2 = map.get(words[i + 1][j]);
      if (pos1 < pos2) break;
      else return false;
    }
  }
  return true;
};
