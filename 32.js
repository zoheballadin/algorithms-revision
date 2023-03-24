//multiply two matrix

const arr1 = [
  [1, 2],
  [3, 4],
];
const arr2 = [
  [5, 6],
  [7, 8],
];

let prod = new Array(2).fill().map(item => new Array(2).fill(0))
console.log(prod)

for(let i=0; i<arr1.length; i++){
    for(let j=0;j<arr1.length;j++){
        for(let k=0;k<arr1.length;k++){
             prod[i][j] += arr1[i][k] * arr2[k][j]
        }
    }
}

console.log(prod)
