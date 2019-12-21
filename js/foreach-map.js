// foreach
var angka = [1,2,3,4,5,6,7,8,9];
var nama = ['sandika', 'galih', 'nofa'];

angka.forEach(function(e){
    console.log(e);
});

nama.forEach(function(e, i){
    console.log('Mahasiswa ke ' + (i+1) + ' adalah : ' + e);
});

// map mengembalikan array
var angka1 = [1,2,3,4,5,6,7,8,9,0];
var angka2 = angka.map(function(e){
    return e*2;
});

console.log(angka2.join(' - '));

// sort
var angka3 = [1,2,5,6,2,66,1,88,90,123,9];
console.log(angka3.join(' - '));
angka3.sort(function(a,b){
    return a-b;
});
console.log(angka3.join(' - '));