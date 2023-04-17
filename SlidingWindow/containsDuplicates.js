/*
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 
*/

var containsDuplicates = function(nums,k){
let set = newSet();

for(let i=0;i<nums.length; i++){
    if(i>k){
        set.delete(nums[i])
    }
    if(set.has(nums[i])){
        return true
    }
    set.add(nums[i])
}
return false
}