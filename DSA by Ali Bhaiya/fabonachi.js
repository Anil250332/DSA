// function fibo(n){
//  if(n==1 || n==0) return n;
//  return fibo(n-1) + fibo(n-2);   
// }

// console.log(fibo(10));


// function gcd(a,b){
//  while(a!=b){
//     if(a>b) a-=b;
//     else b-=a;
//  }   
//  console.log(b)
// }

// gcd(16,24);


// function gcd(a,b){
//     if(a==b) return a;
//    if(a>b) return gcd(a-b,b);
//   return gcd(a,b-a)
// }

// console.log(gcd(16,28))


function NucrelienAlogrithm(a,b){
    if(b==0) return a;
  return NucrelienAlogrithm(b,a%b)
}

console.log(NucrelienAlogrithm(16,28))