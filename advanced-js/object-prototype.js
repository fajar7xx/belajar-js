// 2.function declaration
// tidak perlu buat duplikast seperti diatas

// mebuat objek dengna konsek prototype
// function Mahasiswa(nama, energi){

//     this.nama = nama;
//     this.energi = energi;

// };

// Mahasiswa.prototype.makan = function(posri){
//     this.energi += posri;
//     return `Halo ${this.nama}, Selamat makan!`;
// }
// Mahasiswa.prototype.main = function(jam){
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat bermain`;
// }
// Mahasiswa.prototype.tidur = function(jam){
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, selamat istirahat!`;
// }

// // kita harus instansisasi dlu
// let ali = new Mahasiswa("M Ali", 80);

// ==========================================================
// versi class
class Mahasiswa{
    constructor(nama, energi){
        this.nama = nama;
        this.energi = energi;
    }

    makan(posri) {
        this.energi += posri;
        return `Halo ${this.nama}, Selamat makan!`;
    }
    main(jam) {
        this.energi -= jam;
        return `Halo ${this.nama}, selamat bermain`;
    }
    tidur(jam) {
        this.energi += jam * 2;
        return `Halo ${this.nama}, selamat istirahat!`;
    }
}
let fajarsiagian = new Mahasiswa('fajar siagian', 100);


// class ini yang terjadi d background adalah prototype
// di console akan tertulis __proto__