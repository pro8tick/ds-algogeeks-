var nextPermutation = function(nums) {
   
    let n= nums.length,i,j;

    for(i=n-2;i>=0;i--){
        if(nums[i]<nums[i+1]){
            break;
        }
    }

    if(i<0){
        nums.reverse();
    }

    else{
        for(j=n-1;j>i;j--){
            if(nums[j]>nums[i]){
                break;
            }
        }
    }


    //swap

    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;

    let arr1= nums.slice(i+1,n);
    arr1.reverse();
    nums.splice(i+1,n,...arr1)

}
let nums=[1,5,6,4]
nextPermutation(nums)

console.log(nums)
