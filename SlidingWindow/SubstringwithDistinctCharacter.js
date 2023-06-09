/*
A string is good if there are no repeated characters.

Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

A substring is a contiguous sequence of characters in a string.
*/

var countSubstring =function(s){
    let count =0

    for(let i=0; i<s.length-2; i++){
        let next = s.substring(i, 3+i)

        if(new Set(next.split('')).size===3){
            count++
        }
    }
    return count
}