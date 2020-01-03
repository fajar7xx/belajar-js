// ambil semua elemen video
// ubah menjadi array dari
const videos = Array.from(document.querySelectorAll('[data-duration]'));


// pilih hanya yang javascript lanjutan
// cari di dlam array video yang didlamnya terdapat javascript lanjutan
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi masing masing video
// panggil method yang mengunakan dataset
// chaining dari atas
.map(item => item.dataset.duration)

// ubah durasi menjadi float, ubah menit menjadi detik
// chaining lagi dari atas
.map(waktu => {
    //10:30 -> split jadi [10, 30]
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0] * 60) + parts[1];
})

// jumlahkan semua detiknya
// reduce(accumulator, value)
.reduce((total, detik) => total + detik);

// ubah formatnya jadi jam menit detik
// Math.floor -> pembulatan kebawah
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60; 


// simpan di dom
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;


// jumlah videos
const JmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${JmlVideo} Video.`;

console.log(videos);
console.log(jsLanjut);
console.log(jam);
console.log(menit);
console.log(detik);
console.log(JmlVideo);