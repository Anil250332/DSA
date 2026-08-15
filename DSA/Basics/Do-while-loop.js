// let i=0;
// do{
//     console.log("hello world");
//     i++;
// }while(i<=5);


// let prompt = require("prompt-sync")()
// let com = Math.floor((Math.random()*100)+1);
// let user;
// do{
//      user = Number(prompt("enter the number = "))
//     if(user>com) console.log("too large")
//     else if(user<com) console.log("too small")
//     else if (user=com) console.log ("congratulations ")
//     else{
// console.log("invalid input")
// }
// }while(user!=com)





let prompt = require("prompt-sync")()
let n;
do{
   console.log("enter 1 for add");
   console.log("enter 2 for substract")
   console.log("enter 3 for multiply");
   console.log("enter 4 for divide");
   n=Number(prompt("enter your choice = "))
   let a;
   let b;
   switch(n){
    case 1: 
      a = Number(prompt("enter first number = "))
      b = Number(prompt("enter second number = "))
     console.log("add = ",a+b)
    break;
    case 2: 
        a = Number(prompt("enter first number = "))
        b = Number(prompt("enter second number = "))
        console.log("substract = ",a-b)
    break;
    case 3: 
         a = Number(prompt("enter first number = "))
         b = Number(prompt("enter second number = "))
        console.log("multiply = ",a*b)
    break;
    case 4: 
         a = Number(prompt("enter first number = "))
         b = Number(prompt("enter second number = "))
        console.log("divide = ",a/b)
    break;
  
    default: console.log("invalid input")
   }
   n=Number(prompt("press 10 for exit "))

}
while(n!=10)
console.log("thank you for using calculator")
