function maxSubarraySum(array, num) {
    if (array.length < num) {
        return null;
    } else if(num===0){return 0;
    } else{
        let maxSum = 0;
        let sum;
        for (let i = 0; i < array.length - (num - 1); i++) {
             sum = array[i];
            for (let j = i+1; j < num+i; j++) {
                sum += array[j]
            }
            if (sum > maxSum) {
                maxSum = sum;
            }
        }
        return maxSum;
    }
}
console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubarraySum([2, 3], 3));