var isValidBST = function (root) {
  var Validate = (node, lower, upper) => {
    if (!node) return true;
    if (lower < node.val && node.val < upper) {
      return (
        Validate(node.left, lower, node.val) &&
        Validate(node.right, node.val, upper)
      );
    } else {
      return false;
    }
  };
  return Validate(root, -Infinity, Infinity);
};
