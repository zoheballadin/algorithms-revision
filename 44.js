let num = 24;

const toBinary = n =>{
    let temp = n;
    let bin =0;
    let i=1;
    while(temp > 0){
        bin += (temp%2) * i;
        temp = Math.floor(temp/2) 
        i*=10
    }
    console.log(bin)
}

toBinary(10)

const toDecimal = n =>{
    let dec = 0;
    let i=0;
    while(n>0){
        dec += (n%10) * (2**i);
        n= parseInt(n/10)
        i++
    }
    console.log(dec)

}

toDecimal(1111)