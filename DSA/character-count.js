// count the all caracter in a string

let str ="malayam";
let frearr = new Array(123).fill(0);
for(let i=0;i<str.length;i++){
    let assci = str.charCodeAt(i);
    frearr[assci]= frearr[assci] +1;
}
for(let i=0;i<frearr.length;i++){
    if(frearr[i]>0){
        console.log(String.fromCharCode(i) + " " + frearr[i]);
    }
}