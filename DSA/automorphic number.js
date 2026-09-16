let n = 25;
let copy = n
let count = 0 ;
let sq = n*n

while(n>0){
  count ++
  n=Math.floor(n/10)
}
if(sq%Math.pow(10,count)== copy){
  console.log("hai bhai ye ")
}else{
  console.log("nhi hai  bhai ye ")
}