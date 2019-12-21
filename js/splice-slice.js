// splice(indexAwal, maudihapus berapa, element baru1, elemen baru2,......)

var arr = ['sandika', 'galih', 'nova'];
arr.splice(2,0,'dody', 'fitri');
console.log(arr.join(' - '));


// slice(awal ,akhir)
var arr1 = ['fajar', 'setiawan', 'siagian', 'ganteng'];
var arr2 = arr1.slice(1,3);
console.log(arr2.join(' - '));
