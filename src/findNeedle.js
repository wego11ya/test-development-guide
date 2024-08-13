/*Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.

**Example 1:**

- Input: `haystack = "sadbutsad"`, `needle = "sad"`
- Output: `0`

**Example 2:**

- Input: `haystack = "leetcode"`, `needle = "leeto"`
- Output: `1`

**Constraints:**

- 1 < `haystack.length`, `needle.length` <= 10⁴
- `haystack` and `needle` consist of only lowercase English characters.
*/

function findNeedle(haystack, needle) {
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

module.exports = findNeedle;
