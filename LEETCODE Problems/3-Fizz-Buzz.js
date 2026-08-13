let n = 5;
let arr =  [];

for(let i = 0 ; i<=n; i++){

    if (i%3==0 && i%5==0){ 
        arr.push("FizzBuzz")
    } else if (i%3==0){
        arr.push("fizz")
    }
   else if (i%5==0){
        arr.push("Buzz")
    }
    else{
       arr.push(i.toString())
    }

};

retunr(arr);