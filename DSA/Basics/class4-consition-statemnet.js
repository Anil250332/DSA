// let prompt = require('prompt-sync')();
// let age = Number(prompt("enter your age : "));

// if(age<=18){
//     console.log("child");
// }else if(age>18 && age<=40){
//     console.log("young");
// }else{
//     console.log("old");
// }






// let prompt = require('prompt-sync')()
// let n = Number(prompt("Enter your number : "));
// if(n%2==0) console.log("even")
//     else console.log("odd")





let prompt = require('prompt-sync')()
let ammount = Number(prompt("Enter your number : "));
 let dis = 0;
 
 if(ammount<=5000){
    dis=0;
 }else if(ammount>5001 && ammount<=7000){
    dis=5;
 }else if(ammount>7001 && ammount<=10000){
    dis=10;
 }else if(ammount>10001){
    dis=20;
 }
 console.log("Payable Amount : " + (ammount-(ammount*dis/100)));
