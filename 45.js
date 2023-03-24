//convert negative decimal number to binary 2's compliment

const toBinary = n =>{
    let temp = n;
    let bin =0;
    let i=1;
    while(temp > 0){
        bin += (temp%2) * i;
        temp = Math.floor(temp/2) 
        i*=10
    }
    return bin
}

let num = toBinary(19)
num = num.toString().split("");

//ones complement

for(let i=0; i<num.length; i++){
    if(num[i] == 1)
    num[i] = 0
    else num[i] = 1
}

//twos complement
for(let i=num.length-1; i>=0 ; i--){
    if(num[i] == 0){
        num[i] = 1
        break;
    }
    else num[i] = 0;
    if(num[i] == 1 && i==0){
        num.unshift(1)
    }
    
}

//add signed bit
num.unshift(1)

console.log(num)

