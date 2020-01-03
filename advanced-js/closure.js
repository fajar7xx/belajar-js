// teknik yang sangat penting

// ini clousure karena mengakses function induknya
// function init(){
//     let nama = 'fajar siagian';
//     function tampilNama(){
//         console.log(nama);
//     }
//     tampilNama();
// }
// init();

// alternatifd diatas
// function init(){
//     let nama = 'fajar siagian';
//     return function (nama){
//         console.log(nama);
//     }
// }
// let panggilNama = init();
// panggilNama('muhammad ali');
// panggilNama('fajar');


// contoh closure factory function
// function ucapkanSalam(waktu){
//     // inner function
//     return function(nama){
//         console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
//     }
// }

// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('siang');
// let selamatMalam = ucapkanSalam('malam');

// selamatPagi('Fajar siagian');
// selamatSiang('ali');
// selamatMalam('nadiah');

// private method mengunakan imemdiately function yang 
// functionya di bungkus dengan (function(){})()
let add = (function(){
    let counter = 0;
    return function(){
        return ++counter;
    } 
        
})();

// let a = add();
// counter = 100;

console.log(add());
console.log(add());
console.log(add());