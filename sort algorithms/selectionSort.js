function selectionSort(array) {
    function swap(array, index1, index2) {
        let temp = array[index2];
        array[index2] = array[index1];
        array[index1] = temp;
    }
    for (let i = 0; i < array.length; i++) {
        let index1 = i;
        let minimumValue = array[index1];
        let index2 = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < minimumValue) {
                minimumValue = array[j];
                index2 = j;
            }
        }
        if (index1 !== index2) {
            swap(array, index1, index2);
        }
    }
    return array;
}

console.log(selectionSort([50, 12, 41, 13, 5, 4]));