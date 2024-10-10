/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function (nums, maxOperations) {
  const canAchieve = (penalty) => {
    let operationsNeeded = 0;
    for (let num of nums) {
      // Calculate the number of splits needed for the current bag
      // to ensure each part is <= penalty.
      // (num - 1) // penalty gives the number of splits required to
      // get all parts ≤ penalty.
      operationsNeeded += Math.floor((num - 1) / penalty);
      // Early exit if operations needed exceed maxOperations
      if (operationsNeeded > maxOperations) return false;
    }
    return true;
  };

  // Binary search to find the minimum possible penalty
  let left = 1;
  let right = Math.max(...nums);
  let minPenalty = right;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (canAchieve(mid)) {
      minPenalty = mid; // mid is a feasible penalty, try for smaller values
      right = mid - 1;
    } else {
      left = mid + 1; // mid is too small, try larger values
    }
  }

  return minPenalty;
};

/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function (nums, maxOperations) {
  let left = 1;
  let right = Math.max(...nums);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let c = 0;
    nums.forEach((n) => (c += Math.floor((n - 1) / mid)));

    if (c > maxOperations) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};
