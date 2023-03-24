/*
shift n-1 disks from A to B using C
shift last disk from A to C 
shift n-1 disks from B to C using A

*/

const tower = (n,from,to,using) =>{
    if(n==1){
        console.log(`Shift Disk 1 from ${from} to ${to}`)
        return
    }
    
    tower(n-1, from, using, to)
    console.log(`Shift Disk ${n} from ${from} to ${to}`)
    tower(n-1, using, to, from)
}

tower(3, "A", "C", "B")