// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]
 

// Constraints:

// 1 <= n <= 8

var generateParenthesis = function(n) {
    let result = [];

    function check(str) {
        let count = 0;

        for (let ch of str) {
            if (ch === "(") {
                count++;
            } else {
                count--;
            }

            if (count < 0) return false;
        }

        return count === 0;
    }

    let arr = [""];

    for (let i = 0; i < 2 * n; i++) {
        let temp = [];

        for (let str of arr) {
            temp.push(str + "(");
            temp.push(str + ")");
        }

        arr = temp;
    }

    for (let str of arr) {
        if (check(str)) {
            result.push(str);
        }
    }

    return result;
};