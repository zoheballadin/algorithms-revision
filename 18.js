//perfect number, sum of factors excluding the number = number itself

let num = 8120;

let arr = [];

let i=1;

while(i<num){
    if(num%i == 0)
    arr.push(i);
    i++;
};

let sum = 0
arr.forEach(item => sum+=item)

console.log(sum == num)