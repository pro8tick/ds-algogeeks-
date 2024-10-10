var sortedSquares = function (nums) {
    let left = 0 
    let right = nums.length - 1
    let result = []
    let position = nums.length - 1
  
while (left <= right) {
    if (nums[left] ** 2 > nums[right] ** 2) {
        result[position] = nums[left] ** 2
        position--
        left++ 
    }
    else{
        result[position] = nums[right] ** 2
        position--
        right--
      
    }
}

return result
};

console.log(sortedSquares([-4,-1,0,3,10,13,14]));