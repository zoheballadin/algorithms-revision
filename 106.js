function left(n,d){
    return (n<<d) | (n>>(8-d))
}

function right(n,d){
    return (n>>d) | (n<<(8-d))
}

console.log(left(16,2))
console.log(right(16,2))