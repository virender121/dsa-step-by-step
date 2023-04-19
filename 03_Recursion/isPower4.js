/*
Given an integer n, return true if it is a power of four. Otherwise, return false.

An integer n is a power of four, if there exists an integer x such that n == 4x.
*/


var isPowerOfFour= function(n){
    if(n<=0) return false
    if(n===1) return true
    if(n%4===0){
        return isPowerOfFour(n/4)
    } else{
        return false
    }
}