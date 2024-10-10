var maxScore = function (cardPoints, k) {
  let currentPick = cardPoints.slice(0, k).reduce((sum, a) => sum + a, 0);
  let maxPoints = currentPick;
  let [left, right] = [k - 1, cardPoints.length - 1];
  for (let i = 0; i < k; i++) {
    currentPick += cardPoints[right] - cardPoints[left];

    maxPoints = Math.max(maxPoints, currentPick);
    [left, right] = [left - 1, right - 1];
  }
  return maxPoints;
};

maxScore([1, 2, 3, 4, 5, 6, 1], 3);
