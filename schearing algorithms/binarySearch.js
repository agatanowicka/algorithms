function binarySearch(array, value) {
    let middleIndex = Math.floor(array.length / 2);
    let middleValue = array[middleIndex];
    let returnIndex = 0;
    if (array.length === 0) {
        return -1;
    } 
    else if (middleValue < value) {
        array = array.splice(middleIndex+1);
        returnIndex = binarySearch(array, value);
        if(returnIndex !== -1) {
            returnIndex = returnIndex + middleIndex+ 1;
        }
    } else if (middleValue > value) {
        array = array.splice(0, middleIndex);
        returnIndex = binarySearch(array, value);
    } else {
        return value === middleValue ? middleIndex: -1;
    }
    return returnIndex;    
}

console.log(binarySearch([1, 2, 3, 4, 5], 2));
console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5], 5));
console.log(binarySearch([1, 2, 3, 4, 5], 6));
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10));
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95));
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100));