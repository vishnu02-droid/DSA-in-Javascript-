function linearSearch(arr,key) {
    
    for (let i = 0; i < arr.length; i++ ){
        if(arr[i] === key ){
            return i+1 //you can return the index value also but in here i've returned the position of the item

            
        }
    }
    return -1
}

console.log(linearSearch(['a','b','c','d'],'d'));

//time O(n)

//########################################################################

function globalLinearSearch(arr, key){
    let results = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === key){
            results.push(i)
        }
    }
    if(!results){
        return -1
    }
    return results
}
// here i've considered the index of the elements
console.log(globalLinearSearch(['a','b','c','d'],'d'));

//time best O(1) worst O(n)