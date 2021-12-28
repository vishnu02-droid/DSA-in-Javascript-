function insertionSort(array) {
    let n = array.length;
    for(let i = 1; i < n; i++){ //consider the second element
        let current = array[i];
        let j = i - 1;
        while((j > -1) && (current < array[j])){
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = current;


    }
    return array;
}

console.log(insertionSort([6,3,8,4,1]));
//time O(1)