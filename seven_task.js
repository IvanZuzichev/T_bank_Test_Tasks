function findMissingNumber(arr) {
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 4, 5, 6]));
console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5]));
console.log(findMissingNumber([1]));