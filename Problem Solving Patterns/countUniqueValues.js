function countUniqueValues(array) {
    let sortedArray = true;
    for (let i = 1; i < array.length; i++) {
        const previous = array[i - 1];
        const item = array[i];
        if (previous > item) {
            sortedArray = false;
        }
    }
    if (sortedArray) {
        console.log("This array is sorted.");
        uniqueValues(array);
    }
    else {
        console.log("This array isn't sorted.")
    }
}

function uniqueValues(array) {
    const values = {};
    let uniqueNumbers = 0;
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (!values[item]) {
            values[item]=true;
            uniqueNumbers += 1;
        }
    }
    console.log(uniqueNumbers);
}
countUniqueValues([1, 1, 1, 1, 1, 2]);
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
countUniqueValues([]);
countUniqueValues([-2, -1, -1, 0, 1]);
