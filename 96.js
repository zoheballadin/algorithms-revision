let n=5
let sum=0
for(let i=1;i<=n;i++){
    if(i%2==0)
    sum-= i/(i+1)
    else sum += i/(i+1)


}

console.log(sum)