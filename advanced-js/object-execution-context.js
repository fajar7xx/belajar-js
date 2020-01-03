// console.log(nama);
// var nama = 'Fajar Siagian';

// craetion phase pada context global
// nama var = undefined
// nama function = function()
// hoisting
// js mendefenisikan window = global object
// this = window


// var nama = 'fajar siagian';
// var umur = 23;

// console.log(sayHello());

// function sayHello(){
//     return(`Halo, nama saya ${nama}, saya ${umur} tahun.`);
// }

// function membuat local excecution contect
// yang di dalam nya terdapat creation dan execution phase
// window
// arguments
// hoisting


// let nama = 'fajar siagian';
// let username = 'fajar.siagian'

// function cetakUrl(username){
//     let instagramUrl = 'https://instagram.com/';
//     return instagramUrl + username;
// }

// console.log(cetakUrl(username));

function a(){
    console.log('ini a');

    function b(){
        console.log('ini b');

        function c(){
            console.log('ini c');
        }

        c();
    }
    b();
}
a();