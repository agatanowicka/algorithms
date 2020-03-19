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
    if (array.length <= 1) {
        return array;
    }
    let middleIndex = Math.floor(array.length / 2);
    let leftArray = array.slice(middleIndex);
    let rightArray = array.slice(0, middleIndex);
    
    let sortedLeftArray = mergeSort(leftArray)
    let sortedRightArray = mergeSort(rightArray);
    return merge(sortedLeftArray, sortedRightArray);
}

console.log(mergeSort([50, 12, 41, 37,100,25,11,3,48]));