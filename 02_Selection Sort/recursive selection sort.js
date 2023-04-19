

const findSmallestIndex =(arr) =>{
    
    let smallestElement = arr[0];
    let smallestIndex = 0;

    for(let i = 1; i <arr.length; i++){

        if(arr[i] < smallestElement){
            smallestElement = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex
}


function selectionSort (arr){
    if(!arr.length) return [];

    const copyArray = [...arr]
    const smallest = copyArray.splice(findSmallestIndex(copyArray),1)

    return smallest.concat(selectionSort(copyArray))
}

const sourtedArray = selectionSort([5, 3, 6, 2, 10]);

console.log(selectionSort(sourtedArray))