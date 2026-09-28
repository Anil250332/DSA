// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

 

// Example 1:

// Input: s = "Hello"
// Output: "hello"
// Example 2:

// Input: s = "here"
// Output: "here"
// Example 3:

// Input: s = "LOVELY"
// Output: "lovely"
 

// Constraints:

// 1 <= s.length <= 100
// s consists of printable ASCII characters.




/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let ans = "";
    for(let i=0;i<s.length;i++){
        let assci = s.charCodeAt(i);
        if(assci>= 65 && assci <=90){
            ans = ans + String.fromCharCode(assci + 32); 
       }
        else{
            ans = ans + String.fromCharCode(assci);
        }
    }
    return ans;
};