var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    else if (
      (nums[left] <= target && target < nums[mid]) ||
      (nums[left] > nums[mid] && (nums[left] <= target || target < nums[mid]))
    )
      right = mid - 1;
    else left = mid + 1;
  }
  return -1;
};
