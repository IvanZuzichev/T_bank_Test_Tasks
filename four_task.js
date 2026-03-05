function minCycleLength(str) {
    for (let i = 1; i <= str.length; i++) {
        if (str.length % i === 0) {
            const pattern = str.slice(0, i);
            if (pattern.repeat(str.length / i) === str) {
                return i;
            }
        }
    }
    return str.length;
}

console.log(minCycleLength('ababab'));
console.log(minCycleLength('aaaa'));
console.log(minCycleLength('abcabc'));
console.log(minCycleLength('hello'));