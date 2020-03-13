function bubbleSort(array) {
    let noSwap;
    function swap(array, index1, index2) {
        let temp = array[index2];
        array[index2] = array[index1];
        array[index1] = temp;
        noSwap=false;
    }
    for (let j = 0; j < array.length; j++) {
        noSwap=true;
        for (let i = 0; i < array.length - 1; i++) {
            let index1 = i;
            let index2 = i + 1;
            if (array[index1] > array[index2]) {
                swap(array, index1, index2);
            }
        }
        if(noSwap){
            break;
        }
    }
    return array;
}
console.log(bubbleSort([50, 12, 41, 13, 5, 4]));