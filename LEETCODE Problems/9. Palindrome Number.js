// Given an integer x, return true if x is a palindrome, and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Constraints:

// -231 <= x <= 231 - 1
 

// Follow up: Could you solve it without converting the integer to a string?


/**
 * @param {number} x
 * @return {boolean}
 */
    
var isPalindrome = function(x) {

    if (x < 0) return false;

    let original = x;
    let reverse = 0;
    function solve(n) {
        if (n === 0) {
            return;
        }
        let lastDigit = n % 10;
        reverse = reverse * 10 + lastDigit;
        solve(Math.floor(n / 10));
    }

    solve(x);
   return original === reverse;
};