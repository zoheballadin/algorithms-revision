//set bits
let n = 50

let c=0;

while(n>0){
    if(n&1 == 1) c++
    n=n>>1
}

console.log(c)