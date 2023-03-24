//sort matrix rows and columns

const transpose = (m) => {
  let tr = Array(m.length)
    .fill()
    .map(() => Array(m.length));
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m.length; j++) {
      tr[j][i] = m[i][j];
    }
  }
  return tr;
};

let arr = [
  [3, 5, 5],
  [9, 9, 8],
  [4, 2, 2],
];


//sort each row > transpose > sort again > transpose

for(let i=0;i<arr.length;i++){
   arr[i] = arr[i].sort()
}

arr = transpose(arr);

for(let i=0;i<arr.length;i++){
   arr[i] = arr[i].sort()
}

arr = transpose(arr)

console.log(arr)
