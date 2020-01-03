// const tampilPesan = function(nama){
//     return `Halo, ${nama}`;
// }

// console.log(tampilPesan('Fajar Siagian'));

// // implisit reeturn
// satu parameter dan isinya hanya return 
// dan tidak ada baris lain
// const tampilNama = nama =>  `Halo, ${nama}`;
// console.log(tampilNama('Fajar Siagian'));

// const tampilNama2 = (waktu, nama) => {
//     return `Selamat ${waktu}, ${nama}`;
// }

// const halo = () => 'Halo dunia';
// console.log(halo());

// console.log(tampilNama2('pagi', 'Bembeng'));

// let mahasiswa = [
//     'Fajar setiawan siagian',
//     'Abil abbas habibi',
//     'bambang gustiawan'
// ]

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.table(jumlahHuruf);

// let jumlahHurufObjek = mahasiswa.map(nama => ({
//     nama,
//     jmlHuruf : nama.length
// }));

// console.table(jumlahHurufObjek);



// konsep this pada arrow function
// const Mahasiswa = function(){
//     this.nama = 'fajar siagian';
//     this.umur = 33;

//     console.log(this);

//     this.sayHello = function(){
//         console.log(`Halo nama saya ${this.nama}, dan sya berumur ${this.umur} tahun.`);
//     }
// }

// const fajar = new Mahasiswa();

// mengubahnya ke arrow function

// ini gak akan jalan
// const Mhs = function (){
//     this.nama = 'Abil Abbas Habibi';
//     this.umur = 23;
//     this.sayHi = () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya berumur ${this.umur} tahun`);
//     }

//     // function declaration
//     // kena hoisting
//     // dan carinya diluar
//     // makanya undefined nan
//     setInterval(() => {
//         // console.log(this.umur++);
//     }, 500);
// }
// const abil = new Mhs();


// 0bjek litetal

// const mhs1 = {
//     nama : 'fajar siagian',
//     umur : 23,
//     sayHy : () => {
//         console.log(`Halo nama saya ${this.nama}, dan saya saat ini berumur ${this.umur} tahun`);
//     }
// }

// mengambil element kotak 
// menggunakan dom selection

const box = document.querySelector('.box');

// ketika box d klik kita lakuka nsesuatu
box.addEventListener('click', function(){
    // console.log(this);
    let satu = 'size';
    let dua = 'caption'

if(this.classList.contains(satu)){
    [satu, dua] = [dua, satu];
}

    this.classList.toggle(satu);

    setTimeout(() => {
        this.classList.toggle(dua);
        // console.log(this);
    }, 600)
});