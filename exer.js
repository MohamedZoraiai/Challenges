function linearSearch(a, target) {
    // Scan left to right until the target appears
    for (let i = 0; i < a.length; i++) {
        if (a[i] === target) return true;
    }
    return false;
}

const nums = [7, 3, 9, 1, 5, 8, 2];
console.log(linearSearch(nums,44));
