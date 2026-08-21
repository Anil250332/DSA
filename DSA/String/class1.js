// let name = "siddharth";
// for(let i = 0 ; i<name.length;i++){
//     console.log(name[i]);
// }


// functions of array
// slice()
// substring()
// trim()
// charAt(index)
// toUpperCase()
// toLowerCase()
// indexOf()
// lastIndexOf()
// replace()
// replaceAll()
// split()
// join()
// concat()
// includes()
// startsWith()
// endsWith()
// trimStart()
// trimEnd()
// trimStart()
// trimEnd()
// trimStart()
// trimEnd()
// trimStart()
// trimEnd()
// trimStart()
// trimEnd()
// trimStart()
// trimEnd()
// trimStart()
// trimEnd()



//ouestion 1:----

// let str = "   sid   ";
// console.log(str.trim());

// quession 2

// let str = "siddharth";
// for(let i=0;i<str.length;i++){
//   console.log(str[i]);
// }



// quession 3



// let str = "siddharth";
// for(let i=str.length-1;i>=0;i--){
//   console.log(str[i]);
// }


// quession 4   (Palindrone)

// let str = "naman";
// let i=0,j=str.length-1;
// while(i<j){
//     if(str[i]!=str[j]){
//         console.log("not a palindrome");
//         break;
//     }
//     i++;
//     j--;
// }
// if(i>=j){
//     console.log("palindrome");
// }




// Quession 5:       (lower case and upper case conversion)

// let prompt = require("prompt-sync")();
// let s = prompt("enter youe string");

// let ans = "";
// for(let i=0;i<s.length;i++){
//     let ch = s.charCodeAt(i)
//     if(ch >= 65 && ch<=90){
//         ans+=String.fromCharCode(ch+32)
//     }  else { ans+=String.fromCharCode(ch-32)}
  
//     }
// console.log(ans)




//question 6:        (start with chack)

// let arr = ["attention","atack","heck","hello","attention",]

// let check = "at"
// for(let i=0;i<arr.length;i++){
//     if(arr[i].startsWith(check)){
//         console.log(arr[i])
//     }
// }




let str = "sello bha kya hak chakker he"
let arr= str.split(" ");
let ans = "";

for(let i=0;i<arr.length;i++){
    let word =  arr[i];
    let first = word.charAt(0).toUpperCase();   
    let middle = word.substring(1,word.length-1);
    let last = word.charAt(word.length-1).toUpperCase()
    ans =ans+(first + middle + last) + " ";
}
console.log(ans)