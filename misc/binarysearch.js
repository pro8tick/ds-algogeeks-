var search = function(nums, target) {
    let l = 0, r = nums.length - 1;
    let m = 0;
    
    while (l <= r){

        m = Math.floor((r + l) / 2)
        if (target < nums[m]) {
            r = m - 1;
        } else if (target > nums[m]) {
            l = m + 1;
        } else {
            return m;
        }
    }
    return -1;
};

console.log(search([-1,0,3,5,9,12],-2));