/*
A string is considered beautiful if it satisfies the following conditions:

Each of the 5 English vowels ('a', 'e', 'i', 'o', 'u') must appear at least once in it.
The letters must be sorted in alphabetical order (i.e. all 'a's before 'e's, all 'e's before 'i's, etc.).
For example, strings "aeiou" and "aaaaaaeiiiioou" are considered beautiful, but "uaeio", "aeoiu", and "aaaeeeooo" are not beautiful.

Given a string word consisting of English vowels, return the length of the longest beautiful substring of word. If no such substring exists, return 0.

A substring is a contiguous sequence of characters in a string.
*/

var longestBeautifulSubstring = function(word){
    const vowels = ['a','e','i','o','u'];
    let maxLength = 0;
    let currentLength = 0;
    let start = 0;

    for(let end=0; end<word.length; end++){
        if(end>0 && word[end]< word[end-1]){
            start = end
            currentLength = 0
        }
        if(word[end]===vowels[currentLength]){
            currentLength++
        }
        if(currentLength === 5){
            maxLength = Math.max(maxLength, end-start+1)
        }
    }
    return maxLength
}