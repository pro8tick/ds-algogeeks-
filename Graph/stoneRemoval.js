/**
 * @param {number[][]} stones
 * @return {number}
 */
const removeStones = (stones) => {
  const uf = new UnionFind();

  for (let i = 0; i < stones.length; i++) {
    let x = stones[i][0];
    let y = ~stones[i][1];
    uf.union(x, y);
  }
  return stones.length - uf.getCount();
};

class UnionFind {
  constructor() {
    this.parent = {};
    this.rank = {};
    this.count = 0;
  }

  getCount() {
    return this.count;
  }

  find(x) {
    if (this.parent[x] === undefined) {
      this.parent[x] = x;
      this.rank[x] = 1;
      this.count += 1;
    }
    if (this.parent[x] === x) {
      return x;
    }
    return (this.parent[x] = this.find(this.parent[x]));
  }

  union(x, y) {
    let parentX = this.find(x);
    let parentY = this.find(y);

    if (parentX === parentY) {
      return parentX;
    }

    this.count -= 1;
    if (this.rank[parentX] < this.rank[parentY]) {
      this.parent[parentX] = parentY;
      return parentY;
    } else if (this.rank[parentY] < this.rank[parentX]) {
      this.parent[parentY] = parentX;
      return parentX;
    } else {
      this.parent[parentY] = parentX;
      this.rank[parentX] += 1;
      return parentX;
    }
  }
}
