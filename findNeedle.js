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
    return haystack.indexOf(needle);
}

// Test cases
console.log(findNeedle("sadbutsad", "sad")); // Output: 0
console.log(findNeedle("leetcode", "leeto")); // Output: -1