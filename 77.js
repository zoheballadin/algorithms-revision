for(let i=1;i<=5;i++){
    let str="";

    for(let j=1;j<=5-i;j++){
        str+=" "
    }
    for(let j=1;j<=2*i-1;j++){
        str+="*"
    }
    console.log(str)
}

for(let i=4;i>=1;i--){
    let str=""
    for(let j=4;j>=i;j--){
        str+=" "
    }
    for(let j=1;j<=2*i-1;j++){
        str+="*"
    }
    console.log(str)
}