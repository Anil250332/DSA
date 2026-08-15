//------sum of two integer ------------

let a = 10;
let b = 20;
console.log(a + b);


//string + string = string (concatenation)

let s1 = "hello";
let s2 = "dsa";
console.log(s1+s2);


//string + integer = string (concatenation)

let s3 = "hello";
let val = 10;
console.log(s3+val);
console.log(typeof(s3+val));



//int + int = int (arthemetic operation )

let int1 = 10 ;
let int2 = 20;  
console.log(int1+int2)



//different type adition 


// add ke symboll (+) ke 2 kaam hote h concationation krna or add krna and jab string se int add kiya jata h to string milti h or jab string se int minus krte h to int milta h kyoki minus (-) ka sorf ek kaam hota h subtraction krna 
//js engine bolta h ki jab mujhe 2 operatnt mile h or ek operator to bo phle solve krne lagta h 

let x = 10;
let y = 20;
console.log("the sum of " + x + "and" + y + "is :" + x + y); // the sum of 10and20is :1020 
console.log(+ x + y + "the sum of " + x + "and" + y); // 30the sum of 10and20
console.log("the sum of " + x + "and" + y + "is :" + (x + y)); // the sum of 10and20is :30

console.log(x + y + " sum"); // 30 sum
console.log(x + " sum " + y); // 10 sum 20





// ----------type coreson


 console.log("1"+1)    //11 (sring - concatination)
 console.log("1"-1)      //0 ( int - subtrction -- kyokijeese ki hm jante h ki subtract ka ek ho kaam hota h subtraction krna )
 console.log("1"*1)      //1 ( int - multipalication -- kyokijeese ki hm jante h ki multipalication ka ek ho kaam hota h multipalication krna )
 console.log("1"/1)      //1 ( int - divison -- kyokijeese ki hm jante h ki divison ka ek ho kaam hota h divison krna )
 console.log("1"%1)     //0 ( int - modulous -- kyokijeese ki hm jante h ki modulous ka ek ho kaam hota h modulous krna )
 
 


//***************accept value from terminal (npm install prompt-sync)*************************

// let prompt = require('prompt-sync')();
// let num3 = prompt("enter first number");
// let num1 = Number(prompt("enter first number"));
// let num2 = Number(prompt("enter second number"));
// console.log(num1+num2);





//*********************swap two value (3 method)*****************************



//first method using third variable



 /*let value1 = 10 ;
 let value2 = 20;
  console.log("value of value1 " +value1);
 console.log("value of value2 " +value2);


 let temp = value1 ;
 value1 = value2;
 value2 = temp;
 console.log("swaped value of value1 " +value1);
 console.log("swaped value of value2 " +value2);
*/



//second method mathamatic operation


/*let value1 = 10 ;
 let value2 = 20;
  console.log("value of value1 " +value1);
 console.log("value of value2 " +value2);

  value1 = value1+value2;
  value2 = value1-value2;
  value1 = value1-value2;

 console.log("swaped value of value1 " +value1);
 console.log("swaped value of value2 " +value2);
 */



 //third method
 
 
 let value1 = 10 ;
 let value2 = 20;
  console.log("value of value1 " +value1);
 console.log("value of value2 " +value2);

[value1,value2]= [value2,value1];

 console.log("swaped value of value1 " +value1);
 console.log("swaped value of value2 " +value2);