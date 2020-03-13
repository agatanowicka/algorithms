function merge(array1, array2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < array1.length && j < array2.length) {
        if (array2[j] > array1[i]) {
            results.push(array1[i]);
            i++;
        } else {
            results.push(array2[j])
            j++;
        }
    }
    while (i < array1.length) {
        results.push(array1[i])
        i++;
    }
    while (j < array2.length) {
        results.push(array2[j])
        j++;
    }
    return results;
}

function mergeSort(array) {
    let middeleIndex = Math.floor(array.length / 2);
    let array1 = array.slice(middeleIndex);
    let array2 = array.slice(0, middeleIndex);
    if (array.length <= 1) {
        return array;
    }
    let returnArray1 = mergeSort(array1)
    let returnArray2 = mergeSort(array2);
    return merge(returnArray1, returnArray2);
}

console.log(mergeSort([50, 12, 41, 37,100,25,11,3,48]));