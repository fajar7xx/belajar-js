var jlhAngkot = 10;
var angkotBeroperasi = 6;
var angkot = 1;

for (angkot; angkot <= jlhAngkot; angkot++) {
    if (angkot <= 6) {
        console.log('angkot no ' + angkot + ' sedang beroprasi');
    } else if (angkot === 8) {
        console.log('angkot no ' + angkot + ' sedang lembur');
    } else {
        console.log('angkot no ' + angkot + ' sedang tidak beroprasi');
    }
}