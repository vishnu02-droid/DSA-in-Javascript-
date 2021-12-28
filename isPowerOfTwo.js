let isPowerOfTwo = (n) => {
    if(typeof n != 'number'){
        return 'Not a number';
    }
    return n && (n & (n-1)) === 0
} 
console.log(isPowerOfTwo(8));

