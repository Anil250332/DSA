/* -------Shorting :-----

 1. Stable short - shorting ke baad jis order m dublicate element likhe the usi order m milenge
 2. UNstabke short - shorting ke baad jis order m dublicate element likhe the us order m milna pakka nahi rahta 

 */


//  ***************Bubble short*****************

// let arr = [23,34,5,3,65]
// let n = arr.length;

// for(let i=0;i<n-1;i++){
//     for(let j=0;j<n-1-i;j++){
//         if(arr[j]>arr[j+1]){
//         let temp=arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;
//         }
//     }
// }

// console.log(arr);





//**********Selection Short*********************** 



// let arr = [23,4,5,38,65]
// let n = arr.length;

// for(let i=0;i<n-1;i++){
//    let min = i;
//    for(let j=i+1;j<n;j++){
//     if(arr[j]<arr[min])
//         min = j;
//    }
//     if(min!=i){
//         [arr[min],arr[i]] = [arr[i],arr[min]]
//     }
  
// }

// console.log(arr);






//**********Insertion Sort*********************** 



let arr = [23,4,5,38,65]
let n = arr.length;

for(let i=1;i<n-1;i++){
  let key = arr[i];
  let j=i-1;
  while(j>=0 && arr[j]>key){
     arr[j+1] = arr[j];
     j--;
  }
  arr[j+1] = key;
}

console.log(arr);
