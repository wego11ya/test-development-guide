function strStr(haystack, needle) {
    if (needle === "") return 0;
    if (needle.length > haystack.length) return -1;

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let j;
        for (j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                break;
            }
        }
        if (j === needle.length) {
            return i;
        }
    }

    return -1;
}

// Test cases
console.log(strStr("sadbutsad", "sad")); // Output: 0
console.log(strStr("leetcode", "leeto")); // Output: -1