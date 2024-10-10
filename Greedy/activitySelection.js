/**
 * @param {number} n
 * @param {number[]} start
 * @param {number[]} end
 * @returns {number}
 */

class Solution {
  // Function to find the maximum number of meetings that can
  // be performed in a meeting room.
  maxMeetings(n, start, end) {
    // code here
    let ans = [];

    for (let i = 0; i < n; i++) {
      ans.push([start[i], end[i]]);
    }

    ans.sort((a, b) => a[1] - b[1]);

    let i = 0;
    let tasks = 1;
    for (let j = 1; j < n; j++) {
      if (ans[j][0] > ans[i][1]) {
        tasks++;
        i = j;
      }
    }
    return tasks;
  }
}
