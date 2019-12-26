// const p3 = document.querySelector('.p3');

// function ubahWarna(){
//     p2.style.backgroundColor = 'lightblue';
// }

// const p2 = document.querySelector('.p2');

// // gak usah pake () karna akan langsung menjalankan fungsi
// p2.onclick = ubahWarna;

// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function(){
//     // alert('ok');
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const teksLiBaru = document.createTextNode('item baru');
//     liBaru.appendChild(teksLiBaru);
//     ul.appendChild(liBaru);

// });

const p3 = document.querySelector('.p3');

// ketiak menggunakan event handler maka event terakhir yang dieksekusi
// p3.onclick = function(){
//     p3.style.backgroundColor = 'lightblue';
// }

// p3.onclick = function(){
//     p3.style.color = 'red';
// }

// kalau mengugnakan eventlistener dia akan menajalansemua event
p3.addEventListener('click', function(){
    p3.style.backgroundColor = 'lightblue';
});

p3.addEventListener('click', function(){
    p3.style.color = 'red';
});