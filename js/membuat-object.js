// membuat objek
// cara 1
// object literal

var mhs = {
    // key : nilainya
    nama : "fajar setiawan siagian",
    nim : "141112699",
    email : 'fajar@mail.com',
    jurusan : "teknik informatika"
    
};

var mhs2 = {
    // key : nilainya
    nama : "Abil abbas",
    nim : "141112688",
    email : 'abil@mail.com',
    jurusan : "teknik informatika"
    
};

// cara 2
// mengunkana function declaration

function buatObjectMahasiswa(nama, nim, email, jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;

    return mhs;
}

var mhs3 = buatObjectMahasiswa('bambang gustiawan', '148879878', 'bam,bang@mail.com', 'teknik informatika');
var mhs4 = buatObjectMahasiswa('laura mestika', '149876523', 'laura@mail.com', 'teknik informatika');


// cara ke3
// constructor function yang berguna untuk mmebuta objek\

// biasanya nama function menggunakan capitalize tiap kata
function Mahasiswa(nama, nim, email, jurusan){
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
}

// cara manggilnya
var mhs5 = new Mahasiswa('jonson', '201118798', 'jonson@maile.com', 'sistem informasi');








