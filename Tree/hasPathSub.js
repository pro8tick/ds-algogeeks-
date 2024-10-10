// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  if (root.val == targetSum && root.left == null && root.right == null)
    return true;
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};
