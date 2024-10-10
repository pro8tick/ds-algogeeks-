function largestOfFour(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(gretestInArray(arr[i]));
  }
  return result;
}

const gretestInArray = (arr1) => {
  if (arr1.length == 1) return arr1[0];
  return Math.max(arr1[0], gretestInArray(arr1.slice(1)));
};

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
