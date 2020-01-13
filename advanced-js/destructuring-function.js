// destructuring
// function kalkulasi(a,b){
//     return [a +b, a-b, a*b, a/b];
// }

// // const jumlah = penjumlahanPerkalian(2,3);
// // console.log(jumlah);

// // const[jumlah, kali] = penjumlahanPerkalian(2,3);
// // console.log(jumlah);
// // console.log(kali);

// const [jumlah, kurang, kali, bagi = 'NN'] = kalkulasi(4, 9);
// console.log(bagi);


// jika tidak perduli dengan urutan
// gnakan objek destructuring
// function kalkulasi(a,b){
//     return{
//         tambah : a+b,
//         kurang : a-b,
//         kali : a*b,
//         bagi : a/b
//     }
// }

// const {bagi, kali, tambah, kurang} = kalkulasi(10, 5);

// console.log(kali);

// desctructuring function argumanet
const mhs1 = {
    nama : 'fajar siagian',
    umur : 23,
    email : 'fajarsiagian@mail.com',
    nilai : {
        tugas : 80,
        uts : 85,
        uas: 79,
    }
}

// memecah objek di dajalm objek dengan 
// asasignment bersarang
function cetakMhs({nama, umur,nilai:{tugas, uts, uas} }){
    return `Halo, nama sya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalahh ${uas}.`;
}

console.log(cetakMhs(mhs1));