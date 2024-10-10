class Solution {
  //Function to return a list of nodes visible from the top view
  //from left to right in Binary Tree.
  topView(root) {
    //your code here
    let map = new Map();
    let q = [];
    let res = [];

    if (root === null) return res;

    q.push([root, 0]);

    while (q.length !== 0) {
      let [node, level] = q.shift();

      if (!map.has(level)) {
        map.set(level, node.data);
      }

      if (node.left) {
        q.push([node.left, level - 1]);
      }

      if (node.right) {
        q.push([node.right, level + 1]);
      }
    }

    let entry = map.entries();
    let list = [];

    for (var ele of entry) list.push(ele);
    list.sort((a, b) => a[0] - b[0]);

    for (let [key, value] of list) {
      res.push(value);
    }

    return res;
  }
}
