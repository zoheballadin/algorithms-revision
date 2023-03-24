const hcf = (a,b) =>{
    if(b%a == 0)
    return a;
    return hcf(b%a, a)
}

let arr = [8,16,32]

let gcd = arr[0]

for(let i=1;i<arr.length; i++){
    gcd = hcf(gcd, arr[i])
    
}

console.log(gcd)