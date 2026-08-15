// let n=1;
// while(n<=10){
//     console.log("hello world")
//     n++;
// }




/******************reverse number*********** */


// let prompt = require("prompt-sync")()
// let n = Number(prompt("enter number = "))

// let rev =0;

// while(n>0){
//     rev = rev * 10 + (n%10);
//     n = Math.floor(n/10);
// }
// console.log(rev);








let prompt = require("prompt-sync")()
let com = Math.floor((Math.random()*100)+1);
let user;
while(user!=com){
     user = Number(prompt("enter the number = "))
    if(user>com) console.log("too large")
    else if(user<com) console.log("too small")
    else if (user=com) console.log ("congratulations ")
    else{
console.log("invalid input")
}
}

