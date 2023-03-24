for(let i=1;i<=5;i++){
    let char = 65;
    let str="";
    for(let j=1;j<=6-i;j++){
        str+= String.fromCharCode(char++)
    }
    console.log(str)
}