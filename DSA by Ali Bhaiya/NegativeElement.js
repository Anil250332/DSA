let arr = [1, 2, 3, 4, 5,-4,-34,-345,-3456,-34567];
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
    
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
}
}
console.log(arr)