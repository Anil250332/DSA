// function nPrint(n) {
//     if (n == 0) return;
//     console.log(n)

//     nPrint(n - 1);
// }
// nPrint(10)


// function nPrint(n) {
//     if (n == 0) return 0;
//     let sum = n % 10
//     return sum + nPrint(Math.floor(n / 10));
// }
// console.log(nPrint(987))


// let rev =0;
// function reverseValue(n) {
//     if(n === 0) return 0;
//     rev = (rev*10) + Math.floor(n%10)
//     return reverseValue(Math.floor(n/10))
// }
// reverseValue(64687)

// console.log(rev)



function fibonacci(n, first = 0, second = 1) {
    if (n === 0) return first;

    return fibonacci(
        n - 1,
        second,
        first + second
    );
}

console.log(fibonacci(10));
