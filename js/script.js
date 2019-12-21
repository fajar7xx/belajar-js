// alert('hallo dunia!');
// var nama = prompt('masukkan nama anda: ');
// alert('nama saya adalah ' + nama);

// var konfirmasi = confirm('kamu yakin??');
// if (konfirmasi === true) {
//     alert('terima kasih');
// } else {
//     alert('bercanda');
// }

alert('selamat datang..');

var lagi = true;

while (lagi === true) {
    var nama = prompt('masukkan nama anda: ');
    alert('halo ' + nama);

    lagi = confirm('lanjut ?');
}

alert('terima kasih');