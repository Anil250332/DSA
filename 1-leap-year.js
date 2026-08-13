let year = 2024

let isleap ;

if(year%4==0){
    if(year%100==0){
        if(year%400==0){
            isleap = true;
        }else{
            isleap = false
        }
    }else{ 
        isleap=true
        }
}else{
    isleap = false
}

console.log(isleap)