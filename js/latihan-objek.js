// latihan juragan angkoatdengan
// pengelolaan penumpanng 
// pengelolaan angkoat dengen menggunakan objek
    // 1. sopir
    // 2. trayek
    // 3. kas
    // 4. penumpan
        // a penumpang naik
        // b penumpang turun

// sopir : fajar siagian
// trayek : tembung - Amplas
// penumpang : kosong
// kas : 0

// membuat objek angkoat
// cara constructor
function Angkot(supir, trayek, penumpang, kas){
    this.supir = supir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar){
        if(this.penumpang.length === 0){
            alert('angkot masih kosng');
            return false;
        }

        for(var i = 0; i < this.penumpang.length; i++){
            if(this.penumpang[i] == namaPenumpang){
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }
}

var angkot1 = new Angkot('Ucok', ['tembung', 'medan mall'], [], 0);
var angkot2 = new Angkot('juned', ['makmur', 'carefour'], [], 0);