function reverseString(string) {
    if(string.length === 0) return string;
    return reverseString(string.substr(1)) + string.charAt(0)
}

console.time('start');
console.log(reverseString("dksjfsssssssssssssssssssssssssssssfdsfgewgrfflasjdflasfkdaf,zdnf,jdhfrefe,fmndskjfhkdgf"));
console.log(reverseString("Jo bhi hai achaa hai #12424 dsjfkhds wkejfhkd f k fkdjfsdsffd fkdsjf kds "));
console.log(reverseString("thi si slkdsjfdls lkfjd fqewlawiueewww98rrh l3829ri3 2r ifef b"));
console.timeEnd('start')
// console.log(reverseString("abhishek"))