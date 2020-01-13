//  callback 
//  function yang dikirimkan sebagai parameter pada function lain

// call 
// function yang di eksekusi setelah function lainnya dijalankan


// syncronous callback
// function halo(nama){
//     alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback){
//     const nama = prompt(`Masukkan Nama: `);
//     callback(nama);
// }

// tampilkanPesan(nama => alert(`Halo, ${nama}`));


// asyncronous callback

// const mhs = [
//     {
//         'nama' : 'fajar setiawan siagian',
//         'nim': '141112699',
//         'email': 'fajar7xx@gmail.com',
//         'jurusan': 'Teknik Informatika',
//         'idDosenWali': 1
//     },
//     {
//         'nama': 'zhari prada siagian',
//         'nim': '145551234',
//         'email': 'azhari@mail.com',
//         'jurusan': 'Teknik Bangunnan',
//         'idDosenWali': 2
//     },
//     {
//         'nama': 'Nadiah Syahputri',
//         'nim': '142131234',
//         'email': 'nadia@mail.com',
//         'jurusan': 'Teknik Informatika',
//         'idDosenWali': 1
//     }
// ];

// cara menampla hanya nama mahasiswanya saja 
// dengan menggunakan higher order function

// mhs.forEach(m => {
    
//     console.log(m.nama)
// });

// asynchronous callback
// function getDataMahasiswa(url, success, error){
    
//     // ajax menggunakan vanilla js atau js murni
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function(){
//         // 4 itu ok
//         if(xhr.readyState === 4){
//             // ini status ok
//             if(xhr.status === 200){
//                 success(xhr.response);
//             }else if(xhr.status === 404 ){
//                 error();
//             }
//         }
//     }
//     xhr.open('get', url);
//     xhr.send()
// }

// // function success(){

// // }
// // function error(){

// // }

// // ganti parameter success dan error mengugnakan anonimus function

// // getDataMahasiswa('data/mahasiswa.json', success, error);

// console.log('mulai');
// getDataMahasiswa('../data/mahasiswa.json', result => {
//     // console.log(JSON.parse(result));
//     const mhs = JSON.parse(result);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {

// });
// console.log('selesai');


// alternatif menggunakan jquery
console.log(`mulai`);
$.ajax({
    url: 'data/mahasiswa.json',
    success: (mhs) => {
        // console.log(mhs)
        mhs.forEach(m => console.log(m.nama));
    },
    error:(e) => {
        // kasih variabel untuk menangkap
        // lalu ubah ke text kalau ada erro
        console.log(e.responseText);
    }
});
console.log(`selesai`);

// alternatif memakai fetch untuk ajax 
// js terbari

fetch('https://api.github.com/users')
    .then(res => res.json())//response type
    .then(data => console.log(data)); //log the data;