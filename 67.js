for(let i=1;i<=5;i++){
    let str="";
    for(let j=5;j>=1;j--){
        if(i==j){
            str+="*"
        }
        else str+= j
    }
    console.log(str)
}