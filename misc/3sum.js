var threeSum = function (nums) {
  const results = [];
  if (nums.length < 3) return results;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const target = 0 - nums[i];
    let left = i + 1;
    let right = nums.length - 1;
    while (right > left) {
      const sum = nums[left] + nums[right];
      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        results.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }
  return results;
};

let nums = [-4, -1, -1, 0, 1, 2];

let result = threeSum(nums);
console.log(result);

// var twoSum = (numbers,target)=>{
//     let lower=0;
//     let upper= numbers.length-1;
//     while(upper>lower){
//         let sum= numbers[lower] +numbers[upper]
//         if(sum<target){
//             lower++;
//         }else if(sum>target){
//             upper--;
//         }else{
//             return [lower+1,upper+1]
//         }
//     }
// }
