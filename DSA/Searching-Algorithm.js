/*------------------------- Searching Algorithm-----------------*/
// 1. Linear searching   - ek ek krke search krna
// 2. Binary Searching   - hamesha shorted daa par use hita h or ye element ko part m divide krke searching krta h 

const PromptSync = require("prompt-sync");





//Linear search


// let prompt = require("prompt-sync")();
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let t = Number(prompt("enter the number you want to search : ")); 
// let index = -1;
// for(let i=0;i<arr.length;i++){
//     if(arr[i] == t){
//         index = i;
//         break;
//     }
// }
// console.log(index == -1? "not found" : "found at index : " + index);






//Binary Search



let prompt = PromptSync()
let arr = [1,2,3,4,5,6,7,8,9,10];
let t = Number(prompt("enter the number you want to search : ")); 
let index = -1;
let st = 0, en= arr.length-1;
while(st<=en){
   let mid = Math.floor((st+en)/2);
   if(arr[mid]==t){
    index = mid;
    break;
   }else if(arr[mid]<t){
    st = mid+1;
   }else{
    en = mid-1;
   }
}
console.log(index == -1? "not found" : "found at index : " + index);



