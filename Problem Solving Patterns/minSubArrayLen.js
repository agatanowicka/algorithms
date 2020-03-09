function minSubArrayLen(array, endSum) {
    let sum;
    let minLength = array.length+1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= endSum) {
            minLength = 1;
        } else {
            sum = array[i];
            for (let j = i + 1; j <= array.length - 1; j++) {
                sum += array[j];
                if (sum >= endSum) {
                    length = j - i+1;
                    if (length < minLength) {
                        minLength = length;
                    }
                }
            }
        
        }
    } 
    if(array.length<minLength){
        return 0;
    }
    return minLength;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));