function analyzeCode(n, k) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        if (i % k === 0) {
            result += i;
        }
    }
    return result;
}

console.log(analyzeCode(5, 3));