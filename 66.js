let num = 1;

for(let i=0;i<5;i++){
    let str="";
    for(let j=1;j<=5-i;j++){
        str+= num;
    }
    if(i<2)
    num++
    else num--
    console.log(str)
}