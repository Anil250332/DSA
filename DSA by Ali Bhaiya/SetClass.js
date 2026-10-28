let arr = [10,2,3,4,2,2,10,2,4];
let set = new Set();
for(let i=0;i<arr.length;i++){
  if(set.has(arr[i])){
    set.delete(arr[i])
  }else(set.add(arr[i]))
}
console.log(set)