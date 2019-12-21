// // pengelolaan penumpang
// penumpang naik dengan tambahPenumpang()
// penumpang turun dengan hapusPenumpang()

// rules
// jika angkot kosong, penumpang naik duduk di kursi pertama
// penumpang berikutnya duduk di kursi berikutnya secara berurutan
// jika ada kursi kosong, penumpang naik yang berikutnya di kuris kosong terlebih dahulu
// asuksi kursi tidak akan penuh dan akan bertambah terus jika ada penumpang naik
// nama penumpang tidak boleh StorageManager, untuk menghindari kebinungan ketika nanti penumpang turun

// var penumpang = ['fajar', undefined, 'siagian'];

var penumpang = [];

var tambahPenumpang = function(namaPenumpang, penumpang){
    // jika angkot kosong
    if(penumpang.length == 0){
        //     tambah oenumoang di awal array
        penumpang.push(namaPenumpang);
        //     kembalikan isi array & keluar dari function
        return penumpang;
    }
    else{
    // else
    //     telusuri seluruh kursi dari awal
        for(var i =0; i < penumpang.length; i++){
            //         jika ada kursi kosong
            if(penumpang[i] == undefined){
                //             tambah penumpang di kursi tersebut
                //             kembalikan isi arry & keluar dari function
                penumpang[i] = namaPenumpang;
                return penumpang;
            }
            else if(penumpang[i] == namaPenumpang){
                //         jika sudah ada nama yang nama
                //             tampilkan pesan kesalahan
                //             kembalikan isi array & keluar dari function
                //         jika seluruh kursi terisi
                console.log(namaPenumpang + ' Sudah ada dialam angkot.');
                return penumpang;
            }
            else if(i == penumpang.length - 1){
                //             tambah penumpang di akhir array
                //             kembalikan isi array & keluar dari function
                penumpang.push(namaPenumpang);
                return penumpang;
            }

        }
    }
}

var hapusPenumpang = function(namaPenumpang, penumpang){
    if(penumpang.length == 0){
        console.log('angkot masih kosong.');
    }else{
        for(var i = 0; i < penumpang.length; i++){
            if(penumpang[i] == namaPenumpang){
                penumpang[i] = undefined;
            }
            else if(i == penumpang.length - 1){
                console.log(namaPenumpang + ' tidak ada didalam angkot lek.');
            }
        }
    }

    return penumpang;
}