let a=1,b=3,c=4;

console.log(a)
console.log(b)

for(let i=3;i<=10;i++){
    let sum = a+b+c;
    console.log(sum)
    a=b;
    b=c;
    c=sum;
}