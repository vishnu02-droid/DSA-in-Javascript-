let selectionSort = (inputArr) => {
    let n = inputArr.length;
    for(let i = 0; i < n; i++){
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]){
                min = j;
            }
        }
        if(min != i){
            let temp = inputArr[i];
            inputArr[i] = inputArr[min];
            inputArr[min] = temp;
            }
        }
        
    
    return inputArr;
}

console.log(selectionSort( [6,3,5,9]));
//time O(n2)