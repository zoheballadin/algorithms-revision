const ascending = ar => {
    for(let i=0;i<ar.length;i++){
        for(let j=0;j<ar.length-i-1;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }
    return ar
}
const descending = ar => {
    for(let i=0;i<ar.length;i++){
        for(let j=0;j<ar.length-i-1;j++){
            if(arr[j] < arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }
    return ar
}

let arr = [3,5,1,3,6,3,7,2]

console.log(descending(arr))