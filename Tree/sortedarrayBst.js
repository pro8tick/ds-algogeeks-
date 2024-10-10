var sortedArrayToBST = function (nums) {
  return convertToBst(nums, 0, nums.length - 1);
};

var convertToBst = function (nums, beg, end) {
  if (beg > end) return null;
  let mid = Math.floor((beg + end) / 2);
  let root = new TreeNode(nums[mid]);
  root.left = convertToBst(nums, beg, mid - 1);
  root.right = convertToBst(nums, mid + 1, end);

  return root;
};
