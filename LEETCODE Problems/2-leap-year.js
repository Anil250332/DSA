let year = 2028
let isleap = false;

if((year%4 ==0 && year %100 !=0)){
    isleap = true;
}else if (year%400 == 0){
    isleap = true;
} else{
    isleap = false;
}

console.log(isleap);