//hcf(a,b) * lcm(a,b) = ab

//lcm(a,b) = ab/hcf

const hcf = (a,b) =>{
    if(b%a == 0)
    return a;
    return hcf(b%a, a)
}

const lcm = (a,b) =>{
    return ((a*b)/hcf(a,b))
}

let arr = [2,3,4,6];

let ans =arr[0]

for(let i=1;i<arr.length;i++){
    ans = lcm(ans, arr[i])
}

console.log(ans)