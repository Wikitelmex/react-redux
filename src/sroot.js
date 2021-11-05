arr = [10,20,35,48,58,59,72,81,97];
//0: 10, 1: 20, 2: 35, 3: 48, 4: 58, 5: 59, 6: 72, 7: 81, 8: 97

function SquareRoot(number=0,start=0,end=number) {
    if(start>end) return -1;
    let mid = Math.floor((start+end)/2);
    if(mid*mid==number) return mid;
    if(mid*mid<number) return SquareRoot(number,mid+1,end);
    if(mid*mid>number) return SquareRoot(number,start,mid-1);
}

console.log(SquareRoot(7056));
