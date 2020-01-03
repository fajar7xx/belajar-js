const angka = [-1, 0, 6, 9 , 8, 19, 9,10, -100, 2, 9 , 10, 85, -1];

// mencari angka >= 3
// for

// const newAngka = [];

// for(let i = 0; i< angka.length; i++){
//     if(angka[i] >= 3){
//         newAngka.push(angka[i]);
//     }
// }

// console.log(newAngka);


// filter 

// const newAngka = angka.filter(a =>  a >= 3);

// console.log(newAngka);

// map
// kalikan semua angka dengan 2

// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);

// reduce
// melakukan sesuau terhadapseluruh elemen pada array
// jumlah seluruh elemen pada array
// const newAngka  = angka.reduce((accumulator, currentValue) => accumulator + currentValue);

// console.log(newAngka);


// method chaining
// menggabungkan semua fungsi sekali jalan
// cari angka yang lebih besar dari 5
// setalah itu hasilnya kali 3
// baru jumlahkan

const hasil = angka.filter(a => a > 5)
    .map(a => a * 3)
    .reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(hasil);
