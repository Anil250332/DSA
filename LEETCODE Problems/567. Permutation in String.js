// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

 

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false
 

// Constraints:

// 1 <= s1.length, s2.length <= 104
// s1 and s2 consist of lowercase English letters.


/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;

    let arr = new Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        arr[s1.charCodeAt(i) - 97]++;
    }

    let i = 0;
    let k = 0;

    while (k < s2.length) {

        arr[s2.charCodeAt(k) - 97]--;

        if (k - i + 1 === s1.length) {

            if (arr.every(x => x === 0)) {
                return true;
            }

            arr[s2.charCodeAt(i) - 97]++;
            i++;
        }

        k++;
    }

    return false;

};