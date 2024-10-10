/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, minutes) {
  let satisfied = 0,
    grumpySatiesfied = 0;
  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 0) {
      satisfied += customers[i];
      customers[i] = i === 0 ? 0 : customers[i - 1];
      continue;
    }
    if (i > 0) {
      customers[i] += customers[i - 1];
    }
    let grumpyInWindow =
      minutes <= i ? customers[i] - customers[i - minutes] : customers[i];
    grumpySatiesfied = Math.max(grumpySatiesfied, grumpyInWindow);
  }

  return satisfied + grumpySatiesfied;
};
