//remove duplicates

let arr = [2,3,4,4,6,6,8,9,10,10, 11, 12,12,13,13,13,14,14,14]

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if(arr[i] == arr[j] && i!=j){
            arr.splice(i,1)
        }
    }
}

console.log(arr)