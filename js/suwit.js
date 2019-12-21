var tanya = true;

while (tanya) {
    // pilhan dari player
    var p = prompt('pilih: gajah, semut, orang');


    // pilihan dari computer
    // membangkitkan bilangan random
    var comp = Math.random();
    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp <= 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }
    // console.log(comp);


    var hasil = '';
    // menentukan rules
    if (p == comp) {
        hasil = 'SERI';
    } else if (p == 'gajah') {
        // if (comp == 'orang') {
        //     hasil = 'MENANG';
        // } else {
        //     hasil == 'KALAH!';
        // }

        // alternatif menggunakn operator ternary
        hasil = (comp == 'orang') ? 'MENANG' : 'KALAH!';
    } else if (p == 'orang') {
        // if (comp == 'gajah') {
        //     hasil = 'KALAH!';
        // } else {
        //     hasil = 'MENANG';
        // }

        hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG';
    } else if (p == 'semut') {
        hasil = (comp == 'orang') ? 'KALAH!' : 'MENANG';
    } else {
        hasil = 'Kamu memasukkan pilihan yang salah!!';
    }

    // tampilkan hasilnya
    alert('Kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\n maka hasilnya : kamu ' + hasil);

    tanya = confirm('main lagi ?');

}

alert('kapan kapan main lagi yuk');