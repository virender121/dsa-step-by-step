

const findSmallestIndex=(array) =>{
   let smallestElement = array[0]  //store the smallest value
   let smallestIndex = 0;   // store the index of the smallest value

   for(let i=0; i<array.length-1; i++){
    if(array[i] < smallestElement){
        smallestElement = array[i]
        smallestIndex = i;
    }
   }
   return smallestIndex;
}




const selectionSort = (array) =>{
    const sortedArray = [];
    const copyArray = [...array]

    for(let i=0; i<array.length; i++){
              // Finds the smallest element in the array
        let smallestIndex = findSmallestIndex(copyArray);
               // Adds the smallest element to new array
        sortedArray.push(copyArray.splice(smallestIndex,1)[0]);
    }
    return sortedArray
}

const sourtedArray = selectionSort([5, 3, 6, 2, 10]);

console.log(selectionSort(sourtedArray))