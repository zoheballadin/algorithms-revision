//check even or odd using bitwise operators


const isEven = n =>{
    if((n&1) == 0)
    return "even number"
    else return "odd number"
}

console.log(isEven(4))