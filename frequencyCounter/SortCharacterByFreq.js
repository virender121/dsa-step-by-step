const s = 'tree'
const output = 'eert'
var frequencySort = function(s){
    let freqMap = new Map()
    for(let char of s){
        freqMap.set(char,(freqMap.get(char)||0)+1)
    }
    const sortedChars = [...freqMap.keys()].sort((a,b)=>freqMap.get(b)-freqMap.get(a))
    let sortedString = '';
    for(let char of sortedChars){
        sortedString += char.repeat(freqMap.get(char))
    }
    return sortedString
}