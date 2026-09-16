let num = 145;
let copy = num;
let ans = 0;
while(num>0){
  let d = num%10;
  let sum =1;
  for(let i=1;i<=d;i++){
    sum = sum*i;
  }
  ans =ans + sum;
  num = Math.floor(num/10);
}
ans == copy ? console.log("yes") : console.log("no")