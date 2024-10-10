const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

var kSmallestPairs = function (nums1, nums2, k) {
  const minHeap = new MinPriorityQueue({ priority: (obj) => obj.sum[0] });

  for (let i = 0; i < nums1.length; i++) {
    const num1 = nums1[i];
    const num2 = nums2[0];

    minHeap.enqueue({ sum: [num1 + num2, i, 0] });
  }

  const n = nums2.length;
  const res = [];

  while (k > 0 && !minHeap.isEmpty()) {
    const {
      sum: [num, idx1, idx2],
    } = minHeap.dequeue().element;

    res.push([nums1[idx1], nums2[idx2]]);

    if (res.length === k) return res;

    if (idx2 < n - 1) {
      minHeap.enqueue({ sum: [nums1[idx1] + nums2[idx2 + 1], idx1, idx2 + 1] });
    }
  }

  return res;
};

kSmallestPairs([1, 7, 11], [2, 4, 6], 3);
