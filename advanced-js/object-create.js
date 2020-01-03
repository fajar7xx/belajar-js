// 2.function declaration
// tidak perlu buat duplikast seperti diatas
const methodMahasiswa = {
    makan : function(porsi){
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan`);
    },

    main : function(jam){
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain`);
    },

    tidur : function(jam){
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, selmat bobo ya`);
    }
};


function Mahasiswa(nama, energi){
    // deklarasikan dlu untuk membaut 
    // sebuah objek
    // bisa mengisi obejek dengan parameternya bisa mengacu
    // ke parent objeknya

    let mahasiswa = Object.create(methodMahasiswa);
    // properti = disiini dengna parameter diatas
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
       
    // kita harus objek nya
    return mahasiswa;
};

// kita harus instansisasi dlu
let fajarsiagian = Mahasiswa('fajar siagian', 100);
let ali = Mahasiswa("M Ali", 80);