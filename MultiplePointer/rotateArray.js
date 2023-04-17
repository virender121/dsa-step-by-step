const nums = [1,2,3,4,5,6,7], k = 3
output = [5,6,7,1,2,3,4]

var rotate = function(nums,k){
    const n = nums.length;
    k %= n
    const newNums = new Array(n)

    for(let i=0; i<n; i++){
        newNums[(i+k)%n] =nums[i]
    }
    for(let i=0; i<n; i++){
        nums[i] = newNums[i]
    }
}