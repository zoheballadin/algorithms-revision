let arr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let arr2 = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];

const checkIdentity = m =>{
    for(let i=0;i<m.length;i++){
        for(let j=0;j<m[0].length; j++){
            if(i==j){
                if(m[i][j] != 1)
                return false
            }else {
                if(m[i][j] != 0)
                return false
            }
        }
    }
    return true
}

console.log(checkIdentity(arr2))