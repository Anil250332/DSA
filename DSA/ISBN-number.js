let t = 978316148410;

    let sum =0;
    for(let i=0; i<t.length ;i++){
        sum += ( t[i] *(i+1) );
    }
    sum = sum%11;
    sum == 0 ? console.log("valid isbn number") : console.log("invalid isbn number");
