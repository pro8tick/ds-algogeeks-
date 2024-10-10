var peakIndexInMountainArray = function (arr, min = 0, max = arr.length - 1) {
  const pivot = Math.round((max + min) / 2);
  if (arr[pivot] > arr[pivot - 1] && arr[pivot] > arr[pivot + 1]) return pivot;
  if (arr[pivot] < arr[pivot - 1])
    return peakIndexInMountainArray(arr, min, pivot - 1);
  if (arr[pivot] < arr[pivot + 1])
    return peakIndexInMountainArray(arr, pivot + 1, max);
};

//Given a mountain array arr, return the index i such that arr[0] < arr[1] < ... < arr[i - 1]
//< arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

var peakIndexInMountainArray = function (arr) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    const mid = Math.floor((right + left) / 2);
    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};
