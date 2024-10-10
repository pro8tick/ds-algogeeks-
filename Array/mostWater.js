var maxArea = function (height) {
  let max = 0;
  let left = 0,
    right = height.length - 1;

  while (left < right) {
    let area;
    if (height[left] <= height[right]) {
      area = height[left] * (right - left);
      left++;
    } else {
      area = height[right] * (right - left);
      right--;
    }
    max = Math.max(area, max);
  }

  return max;
};
