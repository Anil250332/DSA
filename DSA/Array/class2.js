/*----------left rotation by 1------------*/


// let arr = [1,2,3,4,5,6];
// let temp = arr[0];

// for(let i=1; i<arr.length;i++){
//     arr[i-1]=arr[i];
// }
// arr[arr.length-1]=temp;
// console.log(arr);


/*----------right rotation by 1------------*/



// let arr = [1,2,3,4,5,6];
// let temp = arr[arr.length-1];

// for(let i=arr.length-1; i>0;i--){
//     arr[i]=arr[i-1];
// }
// arr[0]=temp;
// console.log(arr);


/*----------left rotation by n------------*/


// let arr = [1,2,3,4,5,6];
// let k=7;
// k=k%arr.length;
// for(let j=1; j<=k;j++){
//     let temp = arr[0];
// for(let i=1; i<arr.length;i++){
//     arr[i-1]=arr[i];
// }
// arr[arr.length-1]=temp;
// }
// console.log(arr);




/*----------subbarray------------*/


// let arr = [1,2,3,4,5,6];
// let t=6;
// let count = 0;
// for(let i=0; i<arr.length;i++){
//     let sum =0;
//     for(let j=i; j<arr.length;j++){
//         sum += arr[i];
//         if(sum==t){
//             count++;
//         }
//     }
// }
// console.log(count); 




let prompt = require("prompt-sync")();
let n = Number(prompt());
let arr = prompt().split(" ").map(Number);

let sum = 0;

for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        sum += Math.abs(arr[i] - arr[j]);
    }
}

console.log(sum);