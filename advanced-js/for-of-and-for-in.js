// // for of
// // creates a loop iterating over iterable object
// // iterabel
// //     string
// //     argumants/ nodelist
// //     typedArray
// //     map
// //     set
// //     user defined iterables

// // array
// const mhs = ['adi', 'zamuel jabri', 'lek cuok'];

// // mhs.forEach(m => console.log(m));

// for(const m of mhs){
//     console.log(m);
// }


// // string
// const nama = ' fajar siagian';
// for(const n of nama){
//     console.log(n);
// }

// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mahasiswa ke - ${i + 1}`);
// });

// console.log(``);

// // alternatifnya
// for(const [i, m] of mhs.entries()){
//     console.log(`${m} adalah mahassiwa ke - ${i + 1}`);
// }

// console.log(``);


// // nodelist
// const liNama = document.querySelectorAll('.nama');
// liNama.forEach(n => console.log(n.textContent));

// console.log(``);

// for(n of liNama){
//     console.log(n.innerHTML);
// }

// // arguments
// function jumlahkanAngka(){
//     let jumlah = 0;
//     for(a of arguments){
//         jumlah += a;
//     }

//     return(jumlah);
// }

// console.log(jumlahkanAngka(1,2,3,4,5));



// // for in
// // creates a loop only iterating over enumerable
// // enurable ini maksudnya properti pada objek

const mhs = {
    nama : 'fajar siagian',
    umur : 23,
    email : 'djar7xx@gmail.com'
}

for(m in mhs){
    // mengambalikan nilai properti
    console.log(mhs[m]);

    // hanya propertinya saja
    console.log(m);
}



