// const nama = 'fajar siagian';
// const umur = 23;

// console.log(`Halo, nama saya ${nama} dan saat ini berumur ${umur} tahun`);
// // console.log(`${alert('Halo')}`);

// const x = 10;
// console.log(`${(x % 2 == 0)? 'genap': 'ganjil'}`);

// // html fragments

// const mhs = {
//     nama : 'fajar siagian',
//     umur : 23,
//     nim : '141112699',
//     email : 'fajar7xx@gmail.com'
// };


// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nim}</span>
// </div>`;

// console.log(el);

// 1. html fragments

// const mhs = {
//     nama : 'fajar setiawan siagian',
//     nim : '141112699',
//     umur : 23,
//     email : 'fajar7xx@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nim">${mhs.nim}</span>
// </div>`;


// 2. looping
// const mhs = [
//     {
//         nama : 'fajar setiawan siagian',
//         nim : '141112699'
//     },
//     {
//         nama : 'Azhari Pradana Siagian',
//         nim : '151112690'
//     },
//     {
//         nama : 'Nadiah Syahputri Siagian',
//         nim : '171118999'
//     }
// ];


// const el = `<div class="mhs">
//     ${mhs.map(m => `
//         <ul>
//             <li>${m.nama}</li>
//             <li>${m.nim}</li>
//         </ul>
//     `).join('')}
// </div>`;




// 3. conditionals
// ternary

// const lagu = {
//     judul : 'Tetap dalam jiwa',
//     penyanyi : 'Isyana Sarasvati',
//     feat : 'Rayi Putra'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`


// 4. nested
// html fragment bersarang
const mhs = {
    nama : 'fajar siagian',
    semester : 5,
    mataKuliah : [
        'REkayasa Web',
        'Analisis dan Perancangan Sistem Informasi',
        'Pemrograman sistem Interaktif',
        'Perancangan Sistem Berorientasi Objek'
    ]
};

function cetakMataKuliah(mataKuliah){
    return `
    <ol>
        ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester : ${mhs.semester}</span>
    <h4>Mata Kuliah :</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}

</div>`



document.body.innerHTML = el;