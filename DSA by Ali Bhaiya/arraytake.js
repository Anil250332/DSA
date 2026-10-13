let prompt = require('prompt-sync')();
let n = prompt("enter the size or array:");
let arr = new Array(n);
for (let i = 0; i < n; i++) {
    arr[i] = prompt("enter the element of array:");
}
let sum = 0;
for (let i = 0; i < n; i++) {
    sum += Number(arr[i]);
}
console.log("The sum of the elements in the array is: " + sum);