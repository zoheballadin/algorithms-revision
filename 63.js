for(let i=0;i<4;i++){
    let str="";
    for(let j=1;j<=4-i;j++){
        str+=j
    }
    for(let j=1;j<=2*i;j++){
        str+= "*"
    }
    for(let j=4-i; j>=1;j--){
        str+=j
    }
    console.log(str)
}