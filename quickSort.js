function quickSort(arr) {
    if(arr.length <= 1 ) return arr;
    else {
        var left = [];
        var right = [];
        var newArray = [];
        var pivot = arr.pop();
        var length = arr.length;
        
        for(var i = 0; i < length; i++){
            if(arr[i] <= pivot){
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return newArray.concat(quickSort(left),pivot,quickSort(right));
    }
}

console.log(quickSort([1,7,3,5,8]));

//time complexity is O(n2)
// const quickSort = arr => {
//     const a = [...arr];
//     if (a.length < 2) return a;
//     const pivotIndex = Math.floor(arr.length / 2);
//     const pivot = a[pivotIndex];
//     const [lo, hi] = a.reduce(
//       (acc, val, i) => {
//         if (val < pivot || (val === pivot && i != pivotIndex)) {
//           acc[0].push(val);
//         } else if (val > pivot) {
//           acc[1].push(val);
//         }
//         return acc;
//       },
//       [[], []]
//     );
//     return [...quickSort(lo), pivot, ...quickSort(hi)];
//   };
   
// console.log(quickSort([1, 6, 1, 5, 3, 2, 1, 4]));
  