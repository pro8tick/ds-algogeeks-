var findPeakElement = function (arr, min = 0, max = arr.length - 1) {
  if (min > max) {
    return max;
  }
  const pivot = Math.round((max + min) / 2);
  if (arr[pivot] > arr[pivot - 1] && arr[pivot] > arr[pivot + 1]) return pivot;
  if (arr[pivot] < arr[pivot - 1]) return findPeakElement(arr, min, pivot - 1);
  else return findPeakElement(arr, pivot + 1, max);
};

console.log(findPeakElement([1, 2]));
