/*Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
*/

var productExceptSelf = function(nums){
    let n = nums.length;
    const answer = new Array(n);
    let left = 1;
    let right = 1;

    for(let i=0; i<n; i++){
        answer[i] = left
        left *=nums[i]
    }
    for(let i=n-1; i>=0; i--){
        answer[i] *= right
        right *= nums[i]
        
    }
    return answer
   
}
let nums = [3,4,5,6,7]
console.log( [3,4,5,6,7])