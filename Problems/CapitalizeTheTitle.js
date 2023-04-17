let s = "LeaRNinG Is neVER Done wiTHouT Errors anD deFeat"

function capitalize(s){
  let ans =""
  let word =""
  let n = s.length;
  for(let i=0;i<n;i++){
    if(s[i]==" "){
        word = word.toLowerCase()
        if(word.length<3){
            ans +=word
            ans+= " "
        } else{
            let x = word[0].toUpperCase()+word.slice(1)
            ans+=x
            ans+=" "
        }
        word =" "
    } else{
        word +=s[i]
    }
  }
  word= word.toLowerCase()
  if(word.length<3){
    ans+=word
  } else{
    let x = word[0].toUpperCase()+word.slice(1)
    ans+=x
  }
  return ans
}
console.log(capitalize("LeaRNinG Is neVER Done wiTHouT Errors anD deFeat"))