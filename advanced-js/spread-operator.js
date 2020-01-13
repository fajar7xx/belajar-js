// spread oprator yang memecah (expand/unpack) iterables
// menjadi single elemetn

// const mhs = ['fajar siagian', 'dodi sigit', 'erik punomo'];

// // ini hanya membuat referensi saja
// // const mhs1 = mhs;

// const mhs1 = [...mhs];

// console.log(...mhs);

// // mengggabungkan 2 array
// const dosen = ['marwandy', 'julus', 'sandika'];
// const orang = [...mhs, ...dosen];

// console.log(mhs);
// console.log(mhs1);

// const liMhs = document.querySelectorAll('li');

// // isinya yang node List
// // kita spreaad 
// // dan kita ubah ke Array
// const mhs = [...liMhs].map(m => m.textContent);

// console.log(mhs);

const name = document.querySelector('.name');
const huruf = [...name.textContent].map(h => `<span>${h}</span>`).join('');

name.innerHTML = huruf;

console.log(huruf);