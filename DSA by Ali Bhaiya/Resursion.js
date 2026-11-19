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


let rev =0;
function nPrint(n) {
    if(n === 0) return 0;
    rev = (rev*10) + Math.floor(n%10)
    return nPrint(Math.floor(n/10))
}
nPrint(987)

console.log(rev)