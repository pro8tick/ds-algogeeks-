function merge(arr1, arr2, n, m) {
  //your code here
  let i = 0,
    j = 0,
    res = [];
  while (i < n && j < m) {
    if (arr1[i] > arr2[j]) {
      res.push(arr2[j++]);
    } else {
      res.push(arr1[i++]);
    }
  }
  if (i < n) {
    res.push(...arr1.slice(i));
  } else if (j < m) {
    res.push(...arr2.slice(j));
  }
  return res;
}

console.log(merge([1, 3, 5, 7], [0, 2, 6, 8, 9], 4, 5));
