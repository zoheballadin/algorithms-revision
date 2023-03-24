const fib = n =>{
    if(n<2)
    return n;
    return fib(n-1) + fib(n-2)
}

let i=0;

while(fib(i) <= 25){
    console.log(fib(i));
    i++
}