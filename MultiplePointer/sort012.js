let arr = [2,0,0,1,0,1,0,2,0,1,2,0,1,2,1,0,2,1,0]

let n = arr.length
let l =0
let r=n-1
let i=0
while(i<=r){
    if(arr[i]==2){
        let temp =arr[i]
        arr[i] = arr[r]
        arr[r] = temp
        r--
    }
    else if(arr[i]==0){
       let temp = arr[i]
       arr[i] = arr[l]
       arr[l] = temp
       i++
       l++
    }
    else i++
}
console.log(arr)