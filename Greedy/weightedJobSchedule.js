//https://www.geeksforgeeks.org/weighted-job-scheduling/

// A job has start time, finish time and profit
class Job {
  constructor(start, finish, profit) {
    this.start = start;
    this.finish = finish;
    this.profit = profit;
  }
}

function findMaxProfit(arr, n) {
  arr.sort((a, b) => a.finish - b.finish);

  let table = new Array(n).fill(null);
  table[0] = arr[0].profit;

  for (let i = 1; i < n; i++) {
    let incProfit = arr[i].profit;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j].finish <= arr[i].start) {
        incProfit += table[j];
        break;
      }
    }
    table[i] = Math.max(incProfit, table[i - 1]);
  }

  return table[n - 1];
}

// Driver code
let values = [
  [3, 10, 20],
  [1, 2, 50],
  [6, 19, 100],
  [2, 100, 200],
];
let arr = [];
for (let i of values) arr.push(new Job(i[0], i[1], i[2]));

let n = arr.length;

document.write("The optimal profit is ", findMaxProfit(arr, n), "</br>");
