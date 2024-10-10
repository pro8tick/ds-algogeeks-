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
 * @param {TreeNode} subRoot
 * @return {boolean}
 * https://leetcode.com/problems/subtree-of-another-tree/
 */
var isSubtree = function (root, subRoot) {
  if (!root) return false;
  if (dfs(root, subRoot)) {
    return true;
  }
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);

  function dfs(head, subRoot) {
    if (!head && !subRoot) return true;
    if (!head || !subRoot || head.val !== subRoot.val) {
      return false;
    }
    return dfs(head.left, subRoot.left) && dfs(head.right, subRoot.right);
  }
};
