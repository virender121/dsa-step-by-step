

const quickSort = (arr) =>{
    if(arr.length <2) return arr;  //baseCase 

    let pivot = arr[0]    //1.pick a pivot at index[0]

    let smallestThanpivot = arr.slice(1).filter(key => key <= pivot)  
       //partition the array into two subarray:- element less than the pivot and element greater than the pivot.
    console.log(smallestThanpivot)
    let biggerThanpivot = arr.slice(1).filter(key=> key > pivot)
    console.log(biggerThanpivot)
    //    call quicksort recursively on the two array.
    return[...quickSort(smallestThanpivot),
            pivot,
            ...quickSort(biggerThanpivot)
    ]

}

console.log(quickSort([10, 5, 2, 3]));