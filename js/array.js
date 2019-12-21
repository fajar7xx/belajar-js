// manipulasi array

// 1.memambah isi array
// var arr = ['A', 1, true];

var arr = [];
arr[0] = "sandika";
arr[1] = "galih";
arr[2] = "fjar";
console.log(arr);

// 2. menghapus isi array
var arr1 = ['fajar', 'setiawan', 'siagian'];
arr1[1] = undefined;
console.log(arr1);

// 3.menampilkan isi array
arr2 = ['fajar', 'setiawan', 'siagian', 'fani'];
for(var i =0; i<arr2.length; i++){
    console.log('Mahasiswa ke- '+ (i+1) + ' : ' + arr2[i]);
}

// method pada array
// 1.join
var arr4 = ['fajar', 'setiawan', 'siagian'];
console.log(arr4.join(' '));

// 2. push&pop
var arr5 = ['fajar', 'setiawan', 'siagian'];
arr5.push('sangat ganteng', 'tapi', 'boong');
// arr5.pop();
console.log(arr5.join(' '));

// unshift dan shift
var arr6 = ['fajar', 'setiawan', 'siagian'];
// arr6.push('sangat ganteng', 'tapi', 'boong');
// arr6.pop();
arr6.unshift('saya adalah'); //masukkan elemen d awal array
arr6.shift(); //hapus elemen array pertama
console.log(arr6.join(' '));