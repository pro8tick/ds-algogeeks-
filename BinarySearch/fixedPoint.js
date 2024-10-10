function binarySearch(nums, left, right) {
  if (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (mid + 1 == nums[mid]) {
      result.push(mid);
    } else if (mid + 1 <= nums[right]) {
      binarySearch(nums, mid + 1, right);
    } else if (mid - 1 >= nums[left]) {
      binarySearch(nums, left, mid - 1);
    }
  }
}
const arr = [15, 2, 45, 12, 7];
arr.sort((a, b) => a - b);
let result = [];
binarySearch(arr, 0, arr.length - 1);
console.log(result);
