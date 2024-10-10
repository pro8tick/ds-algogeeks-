/**
 * @param {Job[]} arr
 * @param {number} n
 * @returns {number[]}
 */

/*
class Job{
    constructor(id, dead, profit){
        this.id = id;
        this.dead = dead;
        this.profit = profit;
    }
}
*/

class Solution {
  //Function to find the maximum profit and the number of jobs done.
  JobScheduling(arr, n) {
    // code here
    arr.sort((a, b) => b.profit - a.profit);

    let res = 0,
      count = 0;

    let slot = new Array(n).fill(false);
    let result = new Array(n);

    for (let i = 0; i < n; i++) {
      for (let j = Math.min(arr[i].dead, n) - 1; j >= 0; j--) {
        if (slot[j] == false) {
          slot[j] = true;
          result[j] = i;
          break;
        }
      }
    }

    for (let i = 0; i < n; i++) {
      if (slot[i]) {
        res += arr[result[i]].profit;
        count++;
      }
    }
    return [count, res];
  }
}
