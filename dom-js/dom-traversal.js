// event handling

const tClose = document.querySelector('.close');
const card = document.querySelector('.card');

// tClose.addEventListener('click', function(){
//     card.style.display = 'none'; 
// });

// dom traversal
// const close = document.querySelectorAll('.close');
// // console.log(close);
// // for(let i = 0; i<close.length; i++){
// //     close[i].addEventListener('click', function(e){
// //         // alert('tombol ke - ' + i);
// //         // ambil element close ke i dan telusuri siapa parent node nya
// //         // close[i].parentElement.style.display = 'none';

// //         // parentElement -> dom traversal
// //         // e berisi event yang sedang terjadi

// //         // console.log(e.target);
// //         e.target.parentElement.style.display = 'none';
// //     });
// // }

// // dom traversal 
// close.forEach(function(el){
//     el.addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none';

//         // panggil object event
//         // dan hentikan event defaultnya
//         e.preventDefault();

//         // eventbubling
//         // ketika kita klik close makan event alert ok tidak akan jalan
//         e.stopPropagation();
//     });
// });

// // const nama = document.querySelector('.nama');
// // console.log(nama.nextElementSibling);

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card){
//     card.addEventListener('click', function(e){
//         alert('ok');
//     });
// });

const container = document.querySelector('.container');

container.addEventListener('click', function(e){
    // console.log(e.target);
    if(e.target.className == 'close'){
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});