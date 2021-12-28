function primeFactor(n) {
    function is_prime(n) {
        for (let i = 2; i <= Math.sqrt(n); i++){
            if(n % i === 0) {
                return false;
            }
        }
        return true;
    }
    const result = [];
    for(let i = 2; i <= n; i++){
        while(is_prime(i) && n % i === 0) {
            if(!result.includes(i)) {
                result.push(i);
            }
            n /= i;
        }
    }
    return result;
}

console.log(primeFactor(101));