var subtractProductAndSum = function(n) {
    let d = 1 ;
    let s = 0 ;
   
    while(n>0){
        let digit = n%10;
        d = d * digit;
        s = s + digit;
        n = Math.floor(n/10)

    }
    return d-s;
    
};