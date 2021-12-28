//leftArr and rightArr are sorted
const merge = (leftArr,rightArr) => {
    const output = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < leftArr.length && rightIndex < rightArr.length){
        const leftEl = leftArr[leftIndex];
        const rightEl = rightArr[rightIndex];

        if(leftEl < rightEl){
            output.push(leftEl);
            leftIndex++;
        }
        else {
            output.push(rightEl);
            rightIndex++;
        }
    }
    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
};

//recursive function
const mergeSort = array => {
    if(array.length <= 1){
        return array;
    }

    const middleIndex = Math.floor(array.length / 2);
    const leftArr = array.slice(0,middleIndex);
    const rightArr = array.slice(middleIndex);

    return merge(
        mergeSort(leftArr),
        mergeSort(rightArr)
        );    
};

console.log(mergeSort([1,4,5,2,9,6]));

//###################################################################

function mErge(left, right) {
    let arr = []
// Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
// Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
// Concatenating the leftover elements
// (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
    }

function mErgeSort(array) {
    const half = array.length / 2
// Base case or terminating case
    if(array.length < 2){
       return array 
    }
    
    const left = array.splice(0, half)
    return mErge(mErgeSort(left),mErgeSort(array))
   }

array = [4, 8, 7, 2, 11, 1, 3];
console.log(mErgeSort(array));
