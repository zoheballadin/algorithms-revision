for(let i=1;i<=5;i++){
    let str="";
    char = 70-i;
    for(let j=1;j<=i;j++){
        str+= String.fromCharCode(char++)
    }
    console.log(str)
}