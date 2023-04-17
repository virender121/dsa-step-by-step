/*
A digit string is good if the digits (0-indexed) at even indices are even and the digits at odd indices are prime (2, 3, 5, or 7).

For example, "2582" is good because the digits (2 and 8) at even positions are even and the digits (5 and 2) at odd positions are prime. However, "3245" is not good because 3 is at an even index but is not even.
Given an integer n, return the total number of good digit strings of length n. Since the answer may be large, return it modulo 109 + 7.

A digit string is a string consisting of digits 0 through 9 that may contain leading zeros.
*/

let m = 1000000007;

function powFun(a,n){
    let ans = BigInt(1)

    if(n==0) return ans
    ans = powFun(a,Math.floor(n/2))
    ans = BigInt(ans)
    if(n%2==1){
        ans = (ans%m*ans%m)%m
        ans = (ans%m*BigInt(a)%m)%m

    } else{
        ans = (ans%m*ans%m)%m
    }
    return ans
}

var countGoodNumbers = function(n){
    var even =0, odd = 0;
    if(n%2==1){
        even = Math.floor(n/2)+1
        odd = Math.floor(n/2)
    } else{
        even = Math.floor(n/2)
        odd = Math.floor(n/2)

    }
    var ans = (powFun(5,even)%m*powFun(4,odd)%m)%m
    return ans
}