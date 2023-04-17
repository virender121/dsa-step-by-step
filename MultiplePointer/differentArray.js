/*

Q1 Given two sorted arrays and a number x, find the pair whose sum is closest to x and the pair has an element from each array. 
a).
Input:  ar1[] = {1, 4, 5, 7};
        ar2[] = {10, 20, 30, 40};
        x = 32      
Output:  1 and 30

b).
Input: arr[] = {10, 22, 28, 29, 30, 40}, x = 54

Output: 22 and 30
*/

var a = [1,4,5,7]
var b = [10,20,30,40]

var n = a.length;
var m = b.length

var target = 32

let i=0;
let j = m-1;

let x = a[i]
let y = b[j]

while(i<n && j>=0){
    let diff = Math.abs((a[i] +b[j])-target)
    if(diff<(Math.abs((x+y)-target))){
        x=a[i]
        y = b[j]
    }
    if(a[i]+b[j]==target){
        break;
    }else if(a[i]+b[j]>target){
        j--
    } else{
        i++
    }
}
console.log(x,y)

function findSum(arr,z){
    let left =0;
    let right = arr.length-1;
    while(left<right){
        if(arr[left]+arr[right]===z){
            return [arr[left],arr[right]]
        }else if(arr[left]+arr[right]<z){
            left++
        }else{
            right--
        }
    }
    return [arr[left],arr[right]]
}
const arr =[10,22,28,29,30,40]
const z = 54;
console.log(findSum([10,22,28,29,30,40]))