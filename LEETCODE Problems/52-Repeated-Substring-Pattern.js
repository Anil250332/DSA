// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

 

// Example 1:

// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.
// Example 2:

// Input: s = "aba"
// Output: false
// Example 3:

// Input: s = "abcabcabcabc"
// Output: true
// Explanation: It is the substring "abc" four times or the substring "abcabc" twice.
 

// Constraints:

// 1 <= s.length <= 104
// s consists of lowercase English letters.


 var repeatedSubstringPattern = function(s) {

    let arr = [];

    for (let i = 1; i < s.length; i++) {

        if (s[0] === s[i]) {

            let sub = s.slice(0, i);

            if (s.length % sub.length !== 0) {
                continue;
            }

            let str = "";

            for (let j = 0; j < s.length / sub.length; j++) {
                str += sub;
            }

            if (str === s) {
                return true;
            }
        }
    }

    return false;
};