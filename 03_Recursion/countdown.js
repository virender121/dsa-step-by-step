const countDown = (i) => {
   console.log(i)
   //base case
   if(i<=0) return;
   countDown(i-1)
}
countDown(5)