function largestInteger(num){
  let s= num+''
  let n=s.length;
  let odd =[];
  let even =[];
  for(let i=0;i<n;i++){
    let x = s[i]-'0'
    if(x%2==0){
        even.push(s[i])
    }else{
        odd.push(s[i])
    }
  }
  even.sort((a,b)=>b-a)
  odd.sort((a,b)=>b-a)
  let i=0;
  let j=0;
  let ans = "";
  for(let index=0;index<n;index++){
    let x = s[index]-'0'
    if(x%2==0){
        ans = ans+even[i]
        i++
    }else{
        ans =ans+odd[j]
        j++
    }
  }
  return parseInt(ans)
}
console.log(largestInteger(1,2,3,4))