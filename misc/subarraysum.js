var subarraySumHashMap = function(nums, k) {
    let map = new Map();
    let sum = 0;
    let count = 0;
    map.set(0,1);
    for (let i=0;i<nums.length;i++) {
        sum += nums[i];
        if (map.has(sum-k)) count += map.get(sum-k);
        if (map.has(sum)) map.set(sum, map.get(sum)+1);
        else map.set(sum, 1);
    }
    return count;
}



console.log(subarraySumHashMap([2,1,3,4,5,1],6))


const separateDigits = nums => {
    return Array.from(nums.join(''), Number)
};