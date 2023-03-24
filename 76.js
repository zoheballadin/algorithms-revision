for(let i=0;i<5;i++){
    let str=""
    for(let j=1;j<=5-i;j++){
        str+= "*"
    }
    for(let j=1;j<=2*i;j++){
        str+=" "
    }
    for(let j=1;j<=5-i;j++){
        str+= "*"
    }
    console.log(str)
}

for(let i=0;i<4;i++){
    let str="";
    for(let j=0;j<=i+1;j++){
        str+="*"
    }

    for(let j=1;j<=6-2*i;j++){
        str+=" "
    }
    for(let j=0;j<=i+1;j++){
        str+="*"
    }
    console.log(str)
}