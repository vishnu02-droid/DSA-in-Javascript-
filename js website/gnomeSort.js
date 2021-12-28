function gnomeSort(array){
    let n = array.length;
    let index = 0;
    while( index < n){
        if(index == 0){
            index++;
        }
        if(array[index] >= array[index-1]){
            index++;
        }
        else{
            let temp = 0;
            temp = array[index];
            array[index] = array[index-1];
            array[index-1] = temp;
            index--;
        }
    }
    return array;
}

console.log(gnomeSort([34, 2, 10, -9]));

//time O(n)