// function tampilAngka(n) {
//     console.log(n);
//     return tampilAngka(n - 1);
// }

// tampilAngka(10);
// rekursif di atas infinity looping

// function cetakAngka(n) {

//     // gunakan base case
//     if (n === 0) {
//         return n;
//     }
//     // end base case

//     console.log(n)
//     return cetakAngka(n - 1);
// }

// cetakAngka(10);


// contoh lain faktorial
function faktorial(n) {
    if (n === 0) return 1;
    return n * faktorial(n - 1);

}

console.log(faktorial(11));