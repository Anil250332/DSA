// let arr = [1,2,3,1,2,3,4,8,6,4,2,2];
// let count =0;
// let target =4;
// let res = [];
// for(let i=0;i<arr.length;i++){
//     let sum = arr[i]+arr[i+1];
//     if(sum===target){
//         count+=1;
//         res.push([arr[i], arr[i+1]])
//     } 
    
// }
// console.log(res);
// console.log(count)


// output : 
// [ [ 3, 1 ], [ 2, 2 ] ]
// 2



let arr = [1, 2, 3, 4, 5, 6];
let sum = 6;

let count = 0;

for (let i = 0; i < arr.length; i++) {
    let total = 0;

    for (let j = i; j < arr.length; j++) {
        total += arr[j];

        if (total === sum) {
            count++;
        }
    }
}

console.log(count);
