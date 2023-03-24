const checkNum = n =>{
    let prod = 4;
    let i=1;
    while(prod<=n){
        if(prod == n)
        return true
        prod = 4 ** i;
        i++;
    }
    return false
}

console.log(checkNum(1024))