/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const result = [],
    queue = [root];
  let leftToRight = true;
  while (queue.length) {
    let width = queue.length;
    let level = [];
    while (width-- > 0) {
      let temp = queue.shift();

      if (leftToRight) level.push(temp.val);
      else level.unshift(temp.val);
      if (temp.left) queue.push(temp.left);
      if (temp.right) queue.push(temp.right);
    }
    leftToRight = !leftToRight;
    result.push(level);
  }
  return result;
};
