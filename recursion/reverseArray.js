function reverseArray(array) {
    if(array.length === 1 ) return array;
    return [array.pop()].concat(reverseArray(array))
}

console.log('getting data', reverseArray([1,2,3,4]));