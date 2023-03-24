let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let x=0, y=0;

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[0].length;j++){
        if(i==j){
            x+= arr[i][j]
        }
        if((arr.length-i-1)==j){
            y+= arr[i][j]
        }
    }
}

console.log(x,y)