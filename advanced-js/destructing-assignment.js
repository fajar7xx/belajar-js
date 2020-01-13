// const coba = ['satu', 'dua', 'tiga'];

// const mhs = {
//     nama : 'fajar siagian',
//     umur : 23,
//     email : 'fjar7xx@gmail.com'
// };

// const {nama, umur, email} = mhs;
// console.log(nama);
// console.log(umur);
// console.log(email);


// destructuring variable/assignment

// destructuring array
const perkenalan = ['halo', 'nama', 'saya', 'fajar siagian'];

// const [salam, satu, dua, nama] = perkenalan;

// skip item dengan cara mengosongkan d array
// const [salam, , ,nama] = perkenalan

// console.log(salam);

// // swap item
// let a = 1;
// let b = 2;

// console.log(a);
// console.log(b);

// [a,b] = [b,a];

// console.log(a);
// console.log(b);

// return value pada function
// function coba(){
//     return [1,2];
// }

// const [a,b] = coba();
// console.log(a);


// rest parameter
// const [a,...values] = [1,2,2,3,4,5,6,11,22,23,12,32];
// console.log(a);
// console.log(values);

// destructuring object
// const mhs = {
//     nama : 'fajar siagian',
//     umur : 23
// }


// // nama di dalam kurung harus sama dengan properti 
// // pada method
// const {nama, umur} = mhs;
// console.log(nama);
// console.log(umur);


// asignment tanpa deklarasi object

// ({nama, umur} = {
//     nama: 'fajar siagian',
//     umur : 23
// });
// console.log(nama);
// console.log(umur);

// asigne ke variabel baru
// const mhs = {
//     nama : 'fajar siagian',
//     umur : 23
// }

// const {nama: n, umur: u} = mhs;
// console.log(u);
// console.log(n);

// memberikan default value
// const mhs = {
//     nama : 'fajar siagian',
//     umur : 23,
//     email : 'aku@fajarsiagian.com'
// }

// const{nama, umur, email = 'fajar7xx@gmail.com'} = mhs;
// console.log(email);


// membari nilai default + assign ke variable baru
// const mhs = {
//     nama : 'fajar siagian',
//     umur : 23,
//     email : 'aku@fajarsiagian.com'
// }

// const {nama: n, umur:u, email:e = 'fajarsiagian@gmail.com'} = mhs;
// console.log(e);


// rest parameter
// const mhs = {
//     nama : 'fajar siagian',
//     umur : 23,
//     email : 'aku@fajarsiagian.com'
// }

// const {nama, ...values} = mhs;
// console.log(values);

// mengambil field pada object, 
// setelah dikirim sebagai parameter untuk function

const mhs ={
    id : 512,
    nama : 'fajar siagian',
    umur : 23,
    email : 'fajar7xx@gmail.com'
}

function getIdMhs({id, nama}){
    return mhs.id + ' ' + mhs.nama;
}

console.log(getIdMhs(mhs));