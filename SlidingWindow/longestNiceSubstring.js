/*
A string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase. For example, "abABB" is nice because 'A' and 'a' appear, and 'B' and 'b' appear. However, "abA" is not because 'b' appears, but 'B' does not.

Given a string s, return the longest substring of s that is nice. If there are multiple, return the substring of the earliest occurrence. If there are none, return an empty string.
*/

var longestNiceSubstring = function(s){
    if(s.length<2){
        return ""
    }
    const obj = {}
    for(let i=0; i<s.length;i++){
        obj[s[i]] = 1
    }
     for(let i=0; i<s.length; i++){
        var element = s[i]
        if(obj[element.toUpperCase()] && obj[element.toLowerCase()]){
            continue;
        }
        var left = s.substring(0,i)
        var right = s.substring(i+1)

        var ans1 = longestNiceSubstring(left)
        var ans2 = longestNiceSubstring(right)

        if(ans1.length>=ans2.length){
            return ans1
        } else{
            return ans2
        }
     }
     return s
}