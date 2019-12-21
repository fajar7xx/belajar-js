var angka = [1,2,3,4,5,1,12,23,12,56,78,55,1234,90];
var angka2 = angka.filter(function(x){
    return x > 50;
});

console.log(angka2.join(' - '));

var angka3 = angka.find(function(x){
    return x>50;
});
console.log(angka3);