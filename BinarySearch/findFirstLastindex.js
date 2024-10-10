class Solution {
  find(arr, n, x) {
    //code here
    function search(nums, target, firstIndex) {
      let ans = -1,
        start = 0,
        end = n - 1;

      while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] > target) {
          end = mid - 1;
        } else if (nums[mid] < target) {
          start = mid + 1;
        } else {
          ans = mid;
          if (firstIndex) {
            end = mid - 1;
          } else {
            start = mid + 1;
          }
        }
      }
      return ans;
    }

    return [search(arr, x, true), search(arr, x, false)];
  }
}
