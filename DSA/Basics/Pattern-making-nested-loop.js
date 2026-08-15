/******************strong number find ******************** */

//n = 145
// !1+!4+!5 =145      -- so 145 is strong number 




// let prompt = require("prompt-sync")()
// let n=Number(prompt("enter the number = "))
// let temp =n;
// let sum=0;

// while(n>0){
//     let rem = n%10;
//     let fact =1;
//     for (let i=1;i<=rem;i++){
//         fact=fact*i;
//     }
//     sum=sum+fact;
//     n=Math.floor(n/10);
// }
// if (sum==temp) console.log("strong number");
// else console.log("not a strong number")







//-------------------pattern programming-------------





// let prompt = require("prompt-sync")()
// let n=Number(prompt("enter the number = "))

// for(let i=1;i<=n;i++){
//     process.stdout.write("*");
// }





//---------------square using nested loop ************

// let prompt = require("prompt-sync")()
// let n = Number(prompt("enter the number = "))

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//         process.stdout.write("*");

//     }
//     console.log()
// }




//-------------right Angel triangle  using nested loop **********



// let prompt = require("prompt-sync")()
// let n = Number(prompt("enter the number = "))

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("*");

//     }
//     console.log()
// }






// let prompt = require("prompt-sync")()
// let n = Number(prompt("enter the number = "))

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(String.fromCharCode(64 + j) + " ");

//     }
//     console.log()
// }

// output 
// enter the number = 5
// A 
// A B 
// A B C 
// A B C D 
// A B C D E 






// let prompt = require("prompt-sync")()
// let n = Number(prompt("enter the number = "))

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n-i+1; j++) {
//         process.stdout.write(j+ " ");

//     }
//     console.log()
// }

// output 
// enter the number = 5
// 1 2 3 4 5 
// 1 2 3 4
// 1 2 3
// 1 2
// 1





// let prompt = require("prompt-sync")()
// let n = Number(prompt("enter the number = "))

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n-i; j++) {
//         process.stdout.write(" ");
//     }
//      for (let j = 1; j <= i; j++) {
//         process.stdout.write("*");
//     }
//     console.log()
// }

// output :
// enter the number = 5
//     *
//    **
//   ***
//  ****
// *****






// let prompt = require("prompt-sync")()
// let n = Number(prompt("enter the number = "))

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n-i; j++) {
//         process.stdout.write(" ");
//     }
//      for (let j = 1; j <= i; j++) {
//         process.stdout.write("* ");
//     }
//     console.log()
// }

// output :
// enter the number = 5
//      *
//     * *
//    * * *
//   * * * *
//  * * * * *








// let prompt = require("prompt-sync")()
// let n = Number(prompt("enter the number = "))

// for (let i = 1; i <= n; i++) {
//      for (let j = 1; j <= n; j++) {
//        if(i==j ||(i+j==n+1)){
//         process.stdout.write("* ")
//        }else{
//         process.stdout.write("  ")
//        }

//     }
//     console.log()
// }

// output 
// enter the number = 5
// *       * 
//   *   *
//     *
//   *   *
// *       *







// let prompt = require("prompt-sync")();
// let n = Number(prompt("enter the number = "));

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= 2 * n - 1; j++) {
//         if (j === i || j === (2 * n - i)) {
//             process.stdout.write("* ");
//         } else {
//             process.stdout.write("  ");
//         }
//     }
//     console.log();
// }

// output 
// enter the number = 5
// *               *
//   *           *
//     *       *
//       *   *
//         *
