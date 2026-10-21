// You are given a string s consisting of lowercase English letters.

// In one operation, you can select any substring of s that is not the entire string and sort it in non-descending alphabetical order.

// Return the minimum number of operations required to make s sorted in non-descending order. If it is not possible, return -1.

 

// Example 1:

// Input: s = "dog"

// Output: 1

// Explanation:​​​​​​​

// Sort substring "og" to "go".
// Now, s = "dgo", which is sorted in ascending order. Thus, the answer is 1.
// Example 2:

// Input: s = "card"

// Output: 2

// Explanation:

// Sort substring "car" to "acr", so s = "acrd".
// Sort substring "rd" to "dr", making s = "acdr", which is sorted in ascending order. Thus, the answer is 2.
// Example 3:

// Input: s = "gf"

// Output: -1

// Explanation:

// It is impossible to sort s under the given constraints. Thus, the answer is -1.
 

// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.
 


/**
 * @param {string} s
 * @return {number}
 */

var minOperations = function(s) {
    let n = s.length;
    let sorted = true;

    for (let i = 1; i < n; i++) {
        if (s[i] < s[i - 1]) {
            sorted = false;
            break;
        }
    }

    if (sorted) {
        return 0;
    }

    if (n === 2) {
        return -1;
    }

    let minChar = s[0];
    let maxChar = s[0];

    for (let i = 1; i < n; i++) {
        if (s[i] < minChar) {
            minChar = s[i];
        }

        if (s[i] > maxChar) {
            maxChar = s[i];
        }
    }
    if (s[0] === minChar || s[n - 1] === maxChar) {
        return 1;
    }

    for (let i = 1; i < n - 1; i++) {
        if (s[i] === minChar || s[i] === maxChar) {
            return 2;
        }
    }
    return 3;
};
