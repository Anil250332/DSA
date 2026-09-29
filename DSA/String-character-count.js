// // count the all caracter in a string

// let str ="malayam";
// let frearr = new Array(123).fill(0);
// for(let i=0;i<str.length;i++){
//     let assci = str.charCodeAt(i);
//     frearr[assci]= frearr[assci] +1;
// }
// for(let i=0;i<frearr.length;i++){
//     if(frearr[i]>0){
//         console.log(String.fromCharCode(i) + " " + frearr[i]);
//     }  
// }





// count the all caracter in a string second method

// let str ="gfghanilanil";
// let frearr = new Array(123).fill(0);
// for(let i=0;i<str.length;i++){
//     let assci = str.charCodeAt(i);
//     frearr[assci]= frearr[assci] +1;
// }


// for(let i=0;i<str.length;i++){
//     let firstval = str.charCodeAt(i);
    
//     console.log(String.fromCharCode(firstval) + " " + frearr[firstval]);

// }





//another method using new array

let str ="anilanil";
let count = [];
let char = []; 
for(let i=0;i<str.length;i++){
    let val = str.charCodeAt(i);
    if(count[val] == undefined){
        count[val] = 1;
        char.push(str[i]);
    }else{
        count[val] = count[val] + 1;
    }
}
for(let i=0;i<char.length;i++){

    console.log(char[i] + " " + count[char[i].charCodeAt(0)]);
}