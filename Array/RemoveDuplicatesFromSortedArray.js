const nums = [1,1,2];

function removeDuplicates(nums) {
    for(let i=0; i < nums.length - 1; i++){
        // console.log(nums , i)
       if(nums[i] == nums[i+1] ){
           nums.splice(i,1)
       }
    }
      console.log(nums)
}

removeDuplicates(nums);