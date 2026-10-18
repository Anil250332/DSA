// You are given an array nums of distinct positive integers. You need to sort the array in increasing order based on the sum of the digits of each number. If two numbers have the same digit sum, the smaller number appears first in the sorted order.

// Return the minimum number of swaps required to rearrange nums into this sorted order.

// A swap is defined as exchanging the values at two distinct positions in the array.

 

// Example 1:

// Input: nums = [37,100]

// Output: 1

// Explanation:

// Compute the digit sum for each integer: [3 + 7 = 10, 1 + 0 + 0 = 1] → [10, 1]
// Sort the integers based on digit sum: [100, 37]. Swap 37 with 100 to obtain the sorted order.
// Thus, the minimum number of swaps required to rearrange nums is 1.
// Example 2:

// Input: nums = [22,14,33,7]

// Output: 0

// Explanation:

// Compute the digit sum for each integer: [2 + 2 = 4, 1 + 4 = 5, 3 + 3 = 6, 7 = 7] → [4, 5, 6, 7]
// Sort the integers based on digit sum: [22, 14, 33, 7]. The array is already sorted.
// Thus, the minimum number of swaps required to rearrange nums is 0.
// Example 3:

// Input: nums = [18,43,34,16]

// Output: 2

// Explanation:

// Compute the digit sum for each integer: [1 + 8 = 9, 4 + 3 = 7, 3 + 4 = 7, 1 + 6 = 7] → [9, 7, 7, 7]
// Sort the integers based on digit sum: [16, 34, 43, 18]. Swap 18 with 16, and swap 43 with 34 to obtain the sorted order.
// Thus, the minimum number of swaps required to rearrange nums is 2.
 

// Constraints:

// 1 <= nums.length <= 105
// 1 <= nums[i] <= 109
// nums consists of distinct positive integers.
 


/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
let arr = [];
for (let i = 0; i < nums.length; i++) {
    let dig = nums[i].toString();
    let sum = 0;
    for (let j = 0; j < dig.length; j++) {
        sum += Number(dig[j]);
    }
    arr.push([nums[i], sum, i]);
}
arr.sort((a, b) => {
    if (a[1] !== b[1]) {
        return a[1] - b[1];
    }
    return a[0] - b[0];
});
let target = [];

for (let i = 0; i < arr.length; i++) {
    target[arr[i][2]] = i;
}

let visited = new Array(nums.length).fill(false);
let swaps = 0;

for (let i = 0; i < nums.length; i++) {
    if (visited[i]) continue;

    let j = i;
    let count = 0;

    while (!visited[j]) {
        visited[j] = true;
        j = target[j];
        count++;
    }

    if (count > 1) {
        swaps += count - 1;
    }
}

return swaps

};