// global scope /window scope
// variabel global
var a = 4;

function tes() {
    // function scope
    // apapun variable yang d buat d dlm 
    // function ini hanya berlaku d dlm 
    // function ini
    // tapi d dlm function kita dapat
    // akses variabel global

    var a = 2;
    console.log(a);

    // kalau seperti ini yang kita maksud var global
    console.log(window.a);
}

tes();