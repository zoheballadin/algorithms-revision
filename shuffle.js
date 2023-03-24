let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

for(let i=0;i<10000;i++){
    let i1 = Math.floor(Math.random()*arr.length);
    let i2 = Math.floor(Math.random()*arr.length);
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp
}

console.log(arr)