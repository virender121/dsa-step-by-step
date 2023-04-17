const nums = [1,1,1,2,2,3] 
const k =2

var topKFrequent = function(nums,k){
    const map = new Map()
    for(let i=0;i<nums.length; i++){
        const num = nums[i]

        map.set(num,(map.get(num) ||0)+1)

    }

    const pairs= Array.from(map.entries())
    return pairs.slice(0,k).map(pair=>pair[0])
}
