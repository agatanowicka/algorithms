function sumMaxElments(array, num) {
    if (array.length < num) {
        return null;
    } else {
        let maxNumberArray = []
        let maxNumberIndex = 0;
        let sum=0;
        for (let i = 0; i < num; i++) {
            let maxNumber = array[0];
            for (let j = 0; j < array.length; j++) {
                if (array[j] >= maxNumber) {
                    maxNumber = array[j];
                    maxNumberIndex = j;
                }
            }
            maxNumberArray.push(maxNumber);
            array.splice(maxNumberIndex, 1)
        }
        for (let i = 0; i < maxNumberArray.length; i++) {
            sum += maxNumberArray[i];
        }
        return sum;
    }
}
console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([3, -2, 7, 4, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubarraySum([2, 3], 3));