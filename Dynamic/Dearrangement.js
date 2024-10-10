class Solution {
  /**
    * @param number n

    * @returns number
    */
  disarrange(n) {
    // code here
    if (n == 1 || n == 2) {
      return n - 1;
    }

    let prev = 0,
      curr = 1;

    for (let i = 3; i <= n; i++) {
      let next = ((i - 1) * (prev + curr)) % 1000000007;
      prev = curr;
      curr = next;
    }
    return curr;
  }
}

// You are given n balls numbered from 1 to n and there are n baskets numbered from 1 to n in front of you. The ith basket is
//meant for the ith ball. Calculate the number of ways in which no ball goes into its respective basket.
