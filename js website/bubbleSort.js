function bubbleSort(inputArr){
    let n = inputArr.length;
    let sorted = false;

    for(let i = 0; i < n; i++){
        for(let i = 0; i < n; i++){
            //comparing and swapping elements
            if(inputArr[i] > inputArr[i+1]){
                let t = inputArr[i];
                inputArr[i] = inputArr[i+1];
                inputArr[i+1] = t;
                
            }
        }
    }
    return inputArr;
}
console.log(bubbleSort([1,65,23,87,5,3,6]));
//time O(n2)
//#########################################################################

function globalBubbleSort(inputArray){
    let n = inputArray.length;
    let sorted = false;
    while(!sorted) {
        sorted = true;
        for(let i = 0; i < n; i++){
            if(inputArray[i] > inputArray[i+1]){
                let t = inputArray[i];
                inputArray[i] = inputArray[i+1];
                inputArray[i+1] = t;
                sorted = false;
            }
        }
    }
    return inputArray;
}
console.log(globalBubbleSort([1,65,23,87,5,3,6]));
//time O(n2)

//with respect to the number of iterations

function iterationBubbleSort(arr){
    let n = arr.length;
    let sorted = false;
    let numOfIterations = 0;

    while(!sorted){
        sorted = true;
        for(let i = 0; i < n-numOfIterations+1; i++){
            if(arr[i] > arr[i+1]){
                let t = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = t;
                sorted = false;
                numOfIterations++;
            }
        }
    }
    return arr;
}

// console.log(iterationBubbleSort([7,4,5,2,1,2,9]));
let arr = [7,4,5,1,9];

console.log(iterationBubbleSort(arr));

//major drawback is that it tends to complete the sorting at exactly one iteration
// Cocktail Shaker Sort 

function cocktailShakerSort(array){
    let n = array.length;
    let sorted = false;

    while (!sorted){
        sorted = true;
        for(let i = 0; i < n-1 ; i++){
            if(array[i] > array[i+1]){
                let tmp = array[i];
                array[i] = array[i+1];
                array[i+1] = tmp;
                sorted = false;
            }
        }
    
    if(sorted)
        break;
    }
    sorted = true;

    for(let j = n-1; j > 0; j--){
        if(array[j-1] > array[j]){
            let tmp = array[j];
            array[j] = array[j+1];
            array[j+1] = tmp;
            sorted = false;

        }
    }

    return array;

}

console.log(cocktailShakerSort([1,9,2,27,3])); //33% faster in performance