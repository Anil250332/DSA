// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

const PromptSync = require("prompt-sync");


// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
 

// Constraints:

// -231 <= x <= 231 - 1
let prompt = PromptSync();
let x = Number(prompt("enter the number"))
let val = 0;
    while(x!==0){
        let d = x%10
        val = val*10 + d
        x =Math.trunc(x/10)
    }
if (val > 2147483647 || val < -2147483648) {
    console.log(0);
}else {
    console.log(val)
}