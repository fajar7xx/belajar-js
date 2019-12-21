var jlhAngkot = 10;
var angkotBeroperasi = 6;
var angkot = 1;

// for (angkot; angkot <= jlhAngkot; angkot++) {
//     if (angkot <= 6) {
//         if (angkot === 5) {
//             console.log('angkot no ' + angkot + ' sedang lembur');
//         } else {
//             console.log('angkot no ' + angkot + ' sedang beroprasi');
//         }
//     } else if (angkot === 8 || angkot === 10) {
//         console.log('angkot no ' + angkot + ' sedang lembur');
//     } else {
//         console.log('angkot no ' + angkot + ' sedang tidak beroprasi');
//     }
// }

for (angkot; angkot <= jlhAngkot; angkot++) {
    if (angkot <= 6 && angkot !== 5) {
        console.log('angkot no ' + angkot + ' sedang beroprasi');
    } else if (angkot === 8 || angkot === 10 || angkot === 5) {
        console.log('angkot no ' + angkot + ' sedang lembur');
    } else {
        console.log('angkot no ' + angkot + ' sedang tidak beroprasi');
    }
}