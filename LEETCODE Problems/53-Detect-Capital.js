// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

 

// Example 1:

// Input: word = "USA"
// Output: true
// Example 2:

// Input: word = "FlaG"
// Output: false
 

// Constraints:

// 1 <= word.length <= 100
// word consists of lowercase and uppercase English letters.




var detectCapitalUse = function(word) {

    let arr = [];
    for (let i = 0; i < word.length; i++) {
        arr.push(word.charCodeAt(i));
    }

    let capital = 0;
    let small = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 65 && arr[i] <= 90) {
            capital++;
        } else {
            small++;
        }
    }
    if (capital === word.length) {
        return true;
    }
    if (small === word.length) {
        return true;
    }
    if (capital === 1 && arr[0] >= 65 && arr[0] <= 90) {
        return true;
    }
    return false;
};