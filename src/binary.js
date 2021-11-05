arr = [10,20,35,48,58,59,72,81,97];
//0: 10, 1: 20, 2: 35, 3: 48, 4: 58, 5: 59, 6: 72, 7: 81, 8: 97

function BinarySearch(num=0,arr=[],start=0,end=arr.length-1){
    if(start>end){
        return -1;
    }
    let mid = Math.floor((start+end)/2); //absolute value of mid
    if(arr[mid]===num){
        return mid;
    }
    else if(arr[mid]>num){
        return BinarySearch(num,arr,start,mid-1);
    }
    else{
        return BinarySearch(num,arr,mid+1,end);
    }
}

console.log(`the number 35 was find on position ${BinarySearch(35,arr)}`);

//ordenar array, QSort, Bublesort, Bublesort "double Wing"