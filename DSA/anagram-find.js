let s1="listen";
let s2 ="silett";
let anagram = true;
let frearr = new Array(123).fill(0);
if(s1.length != s2.length){
    anagram = false;
}else{
    for(let i=0;i<s1.length;i++){
        let assci = s1.charCodeAt(i);
        frearr[assci]=frearr[assci] +1;
    }
     for(let i=0;i<s2.length;i++){
        let assci = s2.charCodeAt(i);
        frearr[assci]=frearr[assci] -1;
    }
}
for(let i=0;i<frearr.length;i++){
    if(frearr[i]!=0){
        anagram= false;
        break;
    }
}

anagram==true? console.log("anagram") : console.log("not anagram");