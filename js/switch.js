// var angka = parseInt(prompt('masukkan angka anda: '));

var item = prompt('masukkan nama makanan/minuman; \n (ct: nasi, daging, susu, hamburger, softdrink)');

// switch (item) {
//     case 'nasi':
//         alert('maknan / minuman sehat');
//         break;
//     case 'daging':
//         alert('maknan / minuman sehat');
//         break;
//     case 'susu':
//         alert('maknan / minuman sehat');
//         break;
//     case 'hamburger':
//         alert('maknan / minuman tidak sehat sehat');
//         break;
//     case 'softdrink':
//         alert('maknan / minuman tidak sehat');
//         break;
//     default:
//         alert('anda memasukkan makanan/minuman yang tidak ada di list');
//         break;;
// }


// cara alternatif
switch (item) {
    case 'nasi':
    case 'daging':
    case 'susu':
        alert('maknan / minuman sehat');
        break;
        // artinya dari pada buat aksi yang sama karena nilai untuk aksi nya sama satukan gini aja seperti kalau 1 ByteLengthQueuingStrategy
        // 2 benar atau 3 baner 
        // kan yang d cetak sama aja
    case 'hamburger':
    case 'softdrink':
        alert('maknan / minuman tidak sehat');
        break;
    default:
        alert('anda memasukkan makanan/minuman yang tidak ada di list');
        break;;
}



// if (angka === 1) {
//     alert('anda memasukkan angka 1');
// } else if (angka === 2) {
//     alert('anda memasukkan andka 2');
// } else {
//     alert('anda bukan angka');
// }

// switch (angka) {
//     case 1:
//         alert('anda memasukkan angka 1');
//         break;
//     case 2:
//         alert('anda memasukkan angka 2');
//         break;
//     case 3:
//         alert('anda memasukkan angka 3');
//         break;
//     default:
//         alert('anda tidak memasukkan angka yang disebutkan');
//         break;

// }