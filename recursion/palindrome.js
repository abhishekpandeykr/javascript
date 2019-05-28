function isPalindrome(isPalinStrng) {
    if(isPalinStrng.length < 2) {
        return true;
    } else {
        const strLen = isPalinStrng.length;
        const [firstChar, lastChar] = [isPalinStrng.charAt(0), isPalinStrng.charAt(strLen-1)];
        if(firstChar === lastChar) {
            const modifiedString = isPalinStrng.substr(1, strLen-2);
            return isPalindrome(modifiedString);
        } else {
            return false;
        }
    }
}

console.log(isPalindrome('abhishek'));
console.log(isPalindrome('12321'));
console.log(isPalindrome('1221'));