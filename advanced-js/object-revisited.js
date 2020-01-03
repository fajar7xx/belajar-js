// cara membuat objek pada JS
// 1. object literal
// let mahasiswa = {
//     // property : method
//     nama : 'fajar setaiwan siagian',
//     energi : 100,
//     makan : function(posri){
//         this.energi = this.energi + posri;
//         // menggunakan backtik `` bisa memasukakn variabel tanpa keluar dari backtiknya
//         console.log(`halo ${this.nama}, selamat makan!`);
//     }
// }

// let mahasiswa1 = {
//     // property : method
//     nama : 'muhammad ali',
//     energi : 100,
//     makan : function(posri){
//         this.energi = this.energi + posri;
//         // menggunakan backtik `` bisa memasukakn variabel tanpa keluar dari backtiknya
//         console.log(`halo ${this.nama}, selamat makan!`);
//     }
// }

// 2.function declaration
// tidak perlu buat duplikast seperti diatas
// function Mahasiswa(nama, energi){
//     // deklarasikan dlu untuk membaut 
//     // sebuah objek
//     let mahasiswa = {};
//     // properti = disiini dengna parameter diatas
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     }

//     mahasiswa.main = function(jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain`);
//     }

//     // kita harus objek nya
//     return mahasiswa;
// }

// // kita harus instansisasi dlu
// let fajarsiagian = Mahasiswa('fajar siagian', 100);
// let ali = Mahasiswa("M Ali", 80);



// 3. constructor function
// sbetulnya mirip banget dengan function declaration
// keyword new
function Mahasiswa(nama, energi){

    // properti = disiini dengna parameter diatas
    this.nama = nama;
    this.energi = energi;

    this.makan = function(porsi){
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan`);
    }

    this.main = function(jam){
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain`);
    }
}

// cara penggilnya
let fajarsiagian = new Mahasiswa('fajar siagian', 100);

// akan menggunakan constructor function kedapannya
// karena menggunakan ini akan memudahkan untuk membuat prototype
// akan lebih jelas ketiak membuat Object.create()