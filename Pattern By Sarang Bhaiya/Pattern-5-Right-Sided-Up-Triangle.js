// for (let i = 0; i < 5; i++) {
//   let str = "";
//   for (let j = 0; j < 4 - i; j++) {
//     str = str + " ";
//   }
//   for (let r = 0; r <= i; r++) {
//     str += "*";
//   }
//   console.log(str);
// }

//    *
//    **
//   ***
//  ****
// *****






// for (let i = 1; i <= 5; i++) {
//   let str = "";
//   for (let j = 1; j <= 5 - i; j++) {
//     str = str + " ";
//   }
//   for (let r = 1; r <= i; r++) {
//     str += i;
//   }
//   console.log(str);
// }


//     1
//    22
//   333
//  4444
// 55555







for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= 5 - i; j++) {
    str = str + " ";
  }
  for (let r = 1; r <= i; r++) {
    str += r;
  }
  console.log(str);
}