
const hcf = (a,b) =>{
    if(b%a == 0)
    return a;
    return hcf(b%a, a)
}

console.log(hcf(64,48))