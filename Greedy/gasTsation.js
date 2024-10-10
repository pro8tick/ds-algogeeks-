var canCompleteCircuit = function (gas, cost) {
  let currentTank = 0,
    totalTank = 0,
    pos = 0;

  for (let i = 0; i < gas.length; i++) {
    currentTank += gas[i] - cost[i];
    totalTank += gas[i] - cost[i];
    if (currentTank < 0) {
      currentTank = 0;
      pos = i + 1;
    }
  }
  return totalTank < 0 ? -1 : pos;
};
