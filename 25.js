//find power of a number with recursion

const power = (m,n) =>{
    if(n == 1)
    return m;
    return m * power(m,n-1)
}

console.log(power(10,4))