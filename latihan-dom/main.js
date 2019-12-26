const tombol = document.getElementById('tUbahwarna');
// const body = document.getElementsByTagName('body')[0];

tombol.addEventListener('click', function(){
    // alert('ok');
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda');
});

// membuat tombol di js
const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('acak warna!');

tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');

tombol.after(tAcakWarna);

tAcakWarna.addEventListener('click', function(){
    // ketika di klik acak semua warna
    // reandom dari 1 sd 255
    // lalu di bulatkan ke atas
    const red = Math.round(Math.random() * 255 + 1);
    const green = Math.round(Math.random() * 255 + 1);
    const blue = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = 'rgb('+ red +', '+green+', '+blue+')'
});

const sliderMerah = document.querySelector('input[name=sMerah]');
const sliderHijau = document.querySelector('input[name=sHijau]');
const sliderBiru = document.querySelector('input[name=sBiru]');

sliderMerah.addEventListener('input', function(){
    // alert('oke slidernya');

    // ambil nilai dari input   
    // console.log(sliderMerah.value);
    // sliderMerah.value;

    const merah = sliderMerah.value;
    const hijau = sliderHijau.value; 
    const biru = sliderBiru.value
    document.body.style.backgroundColor = 'rgb('+ merah  +','+ hijau +','+ biru +')';
});

sliderHijau.addEventListener('input', function(){
    const merah = sliderMerah.value;
    const hijau = sliderHijau.value;
    const biru = sliderBiru.value
    document.body.style.backgroundColor = 'rgb('+ merah  +','+ hijau +','+ biru +')'; 
});

sliderBiru.addEventListener('input', function(){
    const merah = sliderMerah.value;
    const hijau = sliderHijau.value;
    const biru = sliderBiru.value
    document.body.style.backgroundColor = 'rgb('+ merah  +','+ hijau +','+ biru +')'; 
});

// membuat mengbah warna bg browser dengan pergerakan mouse
document.body.addEventListener('mousemove', function(event){
    // posisi mouse
    // sumbu x
    // console.log(event.clientX); 
    // sumbu y
    // console.log(event.clientY);
    // ukuran browser
    // console.log(window.innerWidth);
    const sumbuX = Math.round((event.clientX / window.innerWidth) * 255);
    // console.log(sumbuX); 
    const sumbuY = Math.round((event.clientY / window.innerHeight) * 255);

    document.body.style.backgroundColor = 'rgb('+sumbuX+', '+sumbuY+', 100)';

});