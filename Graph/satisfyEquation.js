/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
  let parent = new Array(26).fill().map((_, i) => i);
  let rank = new Array(26).fill(0);

  const find = (x) => {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  };
  const union = (a, b) => {
    let parentA = find(a);
    let parentB = find(b);

    if (parentA === parentB) return;
    else if (rank[parentA] > rank[parentB]) {
      parent[parentB] = parentA;
      rank[parentA] += rank[parentB];
    } else {
      rank[parentB] += rank[parentA];
      parent[parentA] = parentB;
    }
  };

  for (let equ of equations) {
    let oper = equ.substring(1, 3);
    if (oper === "==") {
      union(equ.charCodeAt(0) - 97, equ.charCodeAt(3) - 97);
    }
  }

  for (let equ of equations) {
    let oper = equ.substring(1, 3);
    if (
      oper === "!=" &&
      find(equ.charCodeAt(0) - 97) === find(equ.charCodeAt(3) - 97)
    ) {
      return false;
    }
  }
  return true;
};
