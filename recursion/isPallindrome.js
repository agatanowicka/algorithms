function isPallindrome(text) {
    if (text.length === 1) {
        return text;
    }
    if(text.length%2===0 && text.length===2){
        return text;
    }

    let firstCharacter = text[0];
    let lastCharacter = text[text.length - 1];
    let box = text.substring(1, text.length - 1);
    let isPallindromeBoolean = true;
    let isPallindromeFunction = isPallindrome(box);
    if (firstCharacter === lastCharacter && isPallindromeFunction) {
        isPallindromeBoolean = true;
    } else {
        isPallindromeBoolean = false;
    }
    return isPallindromeBoolean;

}

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false
