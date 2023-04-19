
  const voted = {}
const checkVoter = name =>{
    if(voted[name]) {
        console.log("kick them out")
    } else {
        voted[name] = true
        console.log('let them vote')
    }
}
checkVoter("mike")
checkVoter("pankaj")
checkVoter("pankaj")