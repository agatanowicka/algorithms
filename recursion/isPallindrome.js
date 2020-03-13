function isPallindrome(text) {
    if (text.length === 1) {
        return true;
    }
    if(text.length === 0) {
        return true;
    }
    let firstCharacter = text[0];
    let lastCharacter = text[text.length - 1];
    let box = text.substring(1, text.length - 1);
    
    return firstCharacter === lastCharacter && isPallindrome(box);

}

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false
