function wordFrequency(str){
    const words = str.split("")
    const freq ={}

    for(let i=0; i<words.length; i++){
        const word = words[i].toLowerCase()
        if(freq[word]){
          freq[word]++
        }else{
            freq[word]=1
        }
    }
    return freq
}

const str='komal is bad girl she everytime do wrong things'
const freq= wordFrequency(str)
for(const word in freq){
    console.log(`${word} : ${freq[word]}`)
}