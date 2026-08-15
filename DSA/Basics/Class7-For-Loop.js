/***********************loop****************/
//type of loop

//1. entry controlled loop (for, while) -  entriy krte waqt control laga diya 
//2. exit controlled loop (do-while) - ek bar chal jane ke baad jab dobara chalta h jab condition check krta h 
//3. infinite loop  -  jab condition kabhi galat na ho 


/*********************prime or not prime **************/


let prompt = require("prompt-sync")()
let n = Number(prompt("Enter number "));

if(n<=1) console.log("not prime");

else if(n==2) console.log("prime");

else if(n%2==0) console.log("not prime");

else {
    let isPrime = true;
    for(let i=0;i<=Math.floor(Math.sqrt(n));i+=2){
    if(n%i==0){
        isPrime = false;
        break;
    }
    }
    console.log(isPrime?"prime":"not prime");
}

