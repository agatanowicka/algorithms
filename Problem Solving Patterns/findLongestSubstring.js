function findLongestSubstring(string) {
    if (string.length === 0) {
        return 0;
    }
    let currentSubstring = [string[0]];
    let sizeOfTheLongestSubstring = currentSubstring.length;
    let differentCharakter = false;
    let elementsToSplice;
    for (let i = 1; i < string.length; i++) {
        const character = string[i];
        for (let j = 0; j < currentSubstring.length; j++) {
            const symbol = currentSubstring[j];
             elementsToSplice= j+1;
            if (symbol !== character) {
                differentCharakter = true;
            } else {
                differentCharakter = false;
                break;
            }
        }
        if (differentCharakter) {
            currentSubstring.push(character);
            if (currentSubstring.length > sizeOfTheLongestSubstring) {
                sizeOfTheLongestSubstring = currentSubstring.length;
            };
        } else {
            currentSubstring.splice(0, elementsToSplice);
            currentSubstring.push(character);
        }
    }
    console.log(currentSubstring)
    return sizeOfTheLongestSubstring;
}

console.log(findLongestSubstring(''));
console.log(findLongestSubstring('rithmschool'));
console.log(findLongestSubstring('thisisawesome'));
console.log(findLongestSubstring('thecatinthehat'));
console.log(findLongestSubstring('bbbbb'));
console.log(findLongestSubstring('longestsubstring'));
console.log(findLongestSubstring('thisishowwedoit'));