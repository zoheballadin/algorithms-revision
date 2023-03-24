//armstrong

let n = 343
let temp = n
let d = (n + "").length

let sum = 0;

while(temp > 0){

    let i = temp%10;
    temp= parseInt(temp/10)
    
    sum += i**d
}

console.log(sum == n)