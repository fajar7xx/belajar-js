// const judul = document.getElementById('judul');
// judul.innerHTML = 'fajar siagian';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = '<div><p>Paragraf</p></div>';

// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';

// const judul = document.getElementsByTagName('h1')[0];

// // menambahkan atribut baru
// judul.setAttribute('name', 'fajar');

// const a = document.querySelector('section#a a');
// a.setAttribute('id', 'link');

// const p2 = document.querySelector('.p2');
// // p2.classList.add()


// buat elemen baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('paragraf baru');

// simpan tulisan ke dalam paragraf
pBaru.append(teksPBaru);

// simpan pBaru d akhir section a
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('element baru');

liBaru.append(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)')

ul.insertBefore(liBaru, li2);

const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(teksLiBaru);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';