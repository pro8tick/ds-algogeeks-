var subarraysDivByK = function (nums, k) {
  let map = new Array(k).fill(0);
  map[0] = 1;
  let sum = 0;
  let count = 0;
  for (let num of nums) {
    sum = (sum + (num % k) + k) % k;
    count += map[sum];
    map[sum]++;
  }
  return count;
};
