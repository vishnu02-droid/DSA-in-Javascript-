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
//stupid sort
//Gnome Sort also called Stupid sort is based on the concept of a Garden Gnome sorting his flower pots. A garden gnome sorts the flower pots by the following method-  

//He looks at the flower pot next to him and the previous one; if they are in the right order he steps one pot forward, otherwise he swaps them and steps one pot backwards.
//If there is no previous pot (he is at the starting of the pot line), he steps forwards; if there is no pot next to him (he is at the end of the pot line), he is done.