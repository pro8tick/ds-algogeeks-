/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
// var removeKdigits = function (num, k) {
//   const arr = num.split("");
//   const stack = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!stack.length || stack[stack.length - 1] <= arr[i] || k === 0) {
//       stack.push(arr[i]);
//     } else if (stack[stack.length - 1] > arr[i]) {
//       stack.pop();
//       k--;
//       i--;
//     }
//   }
//   while (k-- > 0) stack.pop();
//   while (stack[0] == 0 && stack.length > 0) stack.shift();
//   return stack.join("") || "0";
// };

var removeKdigits = function (num, k) {
  const stack = [];
  removed = 0;

  for (let n of num) {
    while (stack.length && n < stack[stack.length - 1] && removed < k) {
      stack.pop();
      removed++;
    }
    stack.push(n);
  }
  while (removed < k) {
    stack.pop();
    removed++;
  }

  while (stack.length && stack[0] === "0") {
    stack.shift();
  }

  return stack.length ? stack.join("") : "0";
};
console.log(removeKdigits("1432219", 3));
