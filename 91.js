let fact = n =>{
    if(n<=1){
        return 1
    }
    return n * fact(n-1)
}

let n=5;

let sum=0;

for(let i=1;i<=n;i++){
    sum += fact(i)
}

console.log(sum)
