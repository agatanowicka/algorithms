function averagePair(array, average) {
    let average_pair = false;
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) {
            let averageValue = (array[i] + array[j]) / 2;
            if (averageValue === average) {
                return true;
            }
        }
    }
    return false;
}
averagePair([1,2,3],2.5);
averagePair([1,3,3,5,6,7,10,12,19],8);
averagePair([-1,0,3,4,5,6],4.1);
averagePair([],4);