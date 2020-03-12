function capitalizeWords(array) {
    if (array.length === 1) {
        return [array[0].toUpperCase()];
    }
    let capitalizeWordsFunction = capitalizeWords(array.slice(0, -1));
    capitalizeWordsFunction.push(array.slice(array.length - 1)[0].toUpperCase())
    return capitalizeWordsFunction;
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']