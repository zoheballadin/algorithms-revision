let c =1;
for(let i=1;i<=3;i++){
    let str=""
    for(let j=1;j<=3-i;j++){
        str+="  "
    }
    for(let j=1;j<=2*i-1;j++){
        str+= c++ + " "
    }
    console.log(str)
}