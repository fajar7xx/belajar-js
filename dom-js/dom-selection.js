// // DOM selection
// // document.getElementById ->mengembalikan element

// // const judul = "variabel yang tidak akan di ubah ubah lagi";

// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = 'grey';
// judul.innerHTML = "Halo ganteng"; 


// // menyeleksi menggunakan
// // document.getElementsByTagName -> htmlcollection

// const paragraf = document.getElementsByTagName('p');
// for(let i = 0; i<paragraf.length; i++){
//     paragraf[i].style.backgroundColor = 'lightblue';
// }

// // document.getElementsByClassName
// // cari elemen berdasarkan classnya 
// // ->htmlcollection

// const paragraf1 = document.getElementsByClassName('p1')[0];
// paragraf1.innerHTML = "ini di ubah javascript";
// paragraf1.style.textAlign = "center";

// // document.querySelector() -> menhasilkan elemetn

// const paragraf4 = document.querySelector('#b p');
// paragraf4.style.color = 'green';
// paragraf4.style.fontSize = '24px';
// paragraf4.style.textAlign = 'center';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// const para1 = document.querySelector('p');
// para1.innerHTML = 'ini diubah berkat query selector js';

// document.querySelectorAll()
// const p = document.querySelectorAll('p');
// for(let i=0; i<p.length; i++){
//     p[i].style.backgroundColor = 'lightblue';
// }