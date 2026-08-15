// let arr = [10,20,30,40,50];
// console.log(arr);

// arr.push(100)     // Add element at the end of the array
// console.log(arr)
// arr.pop()         // Remove element from the end of the array
// console.log(arr)
// arr.unshift(5)  // Add element at the beginning of the array
// console.log(arr)
// arr.shift()       // Remove element from the beginning of the array
// console.log(arr)

// arr.slice(2)
// console.log(arr)

// arr.splice(2, 0, 25)   // Insert 25 at index 2
// console.log(arr)

// arr.splice(1, 3)    // Remove 3 elements starting from index 1
// console.log(arr)

// arr.concat([60, 70, 80])  // Add multiple elements at the end of the array
// console.log(arr)

// arr.reverse()      // Reverse the array
// console.log(arr)

// arr.sort()        // Sort the array
// console.log(arr)




// let prompt = require("prompt-sync")()
// let n = prompt("Enter the number of elements in the array: ")
// let arr = []
// for (let i = 0; i < n; i++) {
//     arr.push(prompt("Enter the " + i + "th element: "))
// }
// console.log(arr)


// let prompt = require("prompt-sync")()
// let n = prompt("Enter the number of elements in the array: ")
// let arr = new Array(n)
// for (let i = 0; i < n; i++) {
//     arr[i] = prompt("Enter the " + i + "th element: ")
// }
// console.log(arr)



/*-----------------------sum of array element--------------*/

// let arr = [12, 20, 30, 40, 50]
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]
// }
// console.log(sum)





/*-----------------------max element of array--------------*/

// let arr = [12, 20, 430, 40, 50]
// let max = arr[0]

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]
//     }
// }

// console.log(max)




/*-----------------------second largest element of array--------------*/
//  let arr = [12, 20, 430, 4440, 50]
// let max = arr[0]
// let smax = arr[1]
// for (let i = 2; i < arr.length; i++) {
//     if (arr[i] > max) {
//         smax = max;
//         max = arr[i];
//     } else if (arr[i] < max && arr[i] > smax) {
//         smax = arr[i];
//     }
// }

// console.log(smax)   





/*-----------------------second largest element of array--------------*/
//  let arr = [12, 20, 430, 4440, 50]
// let max = arr[0]
// let smax = arr[1]
// for (let i = 2; i < arr.length; i++) {
//     if (arr[i] > max) {
//         smax = max;
//         max = arr[i];
//     } else if (arr[i] < max && arr[i] > smax) {
//         smax = arr[i];
//     }
// }

// console.log(smax)   





/*-----------------------third largest element of array--------------*/
 let arr = [12, 20, 430, 4440, 50]

let max3 = -Infinity;
let smax3 = -Infinity;
let tmax3 = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max3) {
        tmax3 = smax3;
        smax3 = max3;
        max3 = arr[i];
    } else if (arr[i] < max3 && arr[i] > smax3) {
        tmax3 = smax3;
        smax3 = arr[i];
    } else if (arr[i] < smax3 && arr[i] > tmax3) {
        tmax3 = arr[i];
    }
}

console.log("Third Max: " + tmax3);


