const checkSign = (a,b) =>{
    if((a^b) < 0) return false;
    return true
}

console.log(checkSign(100,500))