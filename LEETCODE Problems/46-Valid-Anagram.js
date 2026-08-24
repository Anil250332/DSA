// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 


 var isAnagram = function(s, t) {

    if (s.length !== t.length) {
        return false;
    }

    let s1 = s.split("").sort();
    let t1 = t.split("").sort();

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== t1[i]) {
            return false;
        }
    }

    return true;
};