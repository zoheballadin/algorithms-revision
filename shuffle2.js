let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let arr2 = [];
let num = 20

for(let i=0;i<20;i++){
    let ele = arr.splice(Math.floor(Math.random()*num--),1)
    
    arr2.push(...ele)
}

console.log(arr2)