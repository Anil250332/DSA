let arr = [1, 2, 30, 4, 5];
let maxScore = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxScore) {
        maxScore = arr[i];
    }
}
console.log("The maximum element in the array is: " + maxScore);