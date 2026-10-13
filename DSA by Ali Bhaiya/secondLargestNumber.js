let arr = [1, 2, 3, 4, 5];
let firstmax = arr[0];
let secondmax = arr[0];
for(let i=0; i<arr.length; i++){
    if(arr[i] > firstmax){
        secondmax = firstmax;
        firstmax = arr[i];
    }
    else if(arr[i] > secondmax && arr[i] != firstmax){
        secondmax = arr[i];
    }
}
console.log("The second largest " + secondmax);