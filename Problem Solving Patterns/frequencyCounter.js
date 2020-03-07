function validAnagram(word1, word2) {
    if (word1.length !== word2.length) return false;
    else {
        let symbol = {};
        for (let i = 0; i < word1.length; i++) {
            let letter = word1[i]
            if (symbol[letter]) {symbol[letter] += 1;}
            else {symbol[letter] = 1;}
        }
        for (let i = 0; i < word2.length; i++) {
            let letter = word2[i]
            if (!symbol[letter]) return false;
            else { symbol[letter] -= 1; }
        }
        return true;
    }
}
console.log(validAnagram("azz", "zaa"));
console.log(validAnagram("anagram", "nagaram"));