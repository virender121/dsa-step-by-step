let str1 ='madam'
let str2 = 'madam'

function isAnagram (str1, str2){
    if(str1.length !== str2.length){
        return false
    }
    let freq = {}
    for(let i=0; i<str1.length; i++){
        let char =str1[i]
        freq[char] = (freq[char] ||0)+1
    }
    for(let i=0; i<str2.length; i++){
        let char =str2[i]
        if(!freq[char]){
            return false
        }
        freq[char]--
    }
    return true
}
console.log(isAnagram(str1,str2))



