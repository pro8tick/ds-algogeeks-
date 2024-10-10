var rob = function(nums) {
    let maxAtTwoBefore= 0;
    let maxAtOneBefore= 0;

    for(let i=0;i<nums.length;i++){
        const maxAtCurrent = Math.max(nums[i]+maxAtTwoBefore,maxAtOneBefore);
        maxAtTwoBefore=maxAtOneBefore;
        maxAtOneBefore=maxAtCurrent;
    }
    return maxAtOneBefore;
};


console.log(rob([2,1,1,4,1,2]))