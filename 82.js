for(let i=0;i<5;i++){
    let str="";
    let char = 65+i;
    for(let j=0;j<=i;j++){
        str+= String.fromCharCode(char--)
    }
    console.log(str)
}