var jlhAngkot = 10;
var angkotBeroperasi = 6;
var angkot = 1;
while (angkot <= angkotBeroperasi) {
    console.log('Angkot no. ' + angkot + ' beroperasi dengan baik');
    angkot++;
}
// for (angkot = angkotBeroperasi + 1; angkot <= jlhAngkot; angkot++) {
//     console.log('angkot no ' + angkot + ' sedang tidak beroprasi');
// }

for (angkot; angkot <= jlhAngkot; angkot++) {
    console.log('angkot no ' + angkot + ' sedang tidak beroprasi');
}