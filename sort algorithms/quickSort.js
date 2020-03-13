function myQuickSort(array, start, end){
let pivot = array[start];
let valueSmallIndex = start+1;
if(end - start <= 1){
    return array;
}
for (let i = start+1; i <= end; i++) {
    let element = array[i];
    if (element <= pivot) {
        let temp = element;
        array[i] = array[valueSmallIndex];
        array[valueSmallIndex] = temp;
        valueSmallIndex++;
    }
}
let valuePivot= pivot;
array[start]=array[valueSmallIndex-1];
array[valueSmallIndex-1]=valuePivot;
myQuickSort(array,start,valueSmallIndex-2);
myQuickSort(array,valueSmallIndex,end);
return array;
}


function quickSort(array) {
    return myQuickSort(array, 0, array.length);
}




console.log(quickSort([50, 12, 41,100,75, 13, 5, 4]));