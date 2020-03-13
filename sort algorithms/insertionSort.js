function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let currentValue = array[i];
        for (let j = i-1 ; j >= -1; j--) {
            if (currentValue < array[j]) {
                array[j + 1] = array[j];
            } else {
                array[j+1] = currentValue;
                break;
            }
        }
    }
    return array;
}

console.log(insertionSort([50, 12, 41, 13, 5, 4]));