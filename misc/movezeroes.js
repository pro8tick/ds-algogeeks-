var moveZeroes = function (nums) {
    let low=0
    let high=low+1
    while (high<nums.length) {
      if (nums[low] !==0) {
        low++;
        high++;
      }else{
        if(nums[high]!==0){
            [nums[high],nums[low]]=[nums[low],nums[high]]
            low++
        }
        high++
      } 
    }
  
  }

  nums=[1,0,2,0,21,3]

  moveZeroes(nums)
  console.log(nums)
