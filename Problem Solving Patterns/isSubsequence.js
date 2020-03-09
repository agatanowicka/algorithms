function isSubsequence(string1, string2) {
    let newString = '';
    let start=0;
    for (let i = 0; i < string1.length; i++) {
        for (let j = start; j < string2.length; j++) {
            let letterStr1=string1[i];
            let letterStr2=string2[j]
            if (letterStr1 === letterStr2) {
                newString+=[letterStr2];
                start= j;
                break;
            }
        }
    }
    if (newString === string1) {
        return true;
    } else {
        return false;
    }
}

console.log(isSubsequence("abc", "aaaaacb"));
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc","abracadabra"));
console.log(isSubsequence("abc", "acb"));