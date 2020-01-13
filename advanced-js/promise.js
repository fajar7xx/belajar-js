// promise => menangani callback hell
// atau banyak promise

// req api menggunakan ajax
// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=300a8db6&s=avengers',
//     success: movies => console.log(movies)
// });

// murni menggunaan js vanilla murni
// emnggunakan fetch

// const movies = fetch('http://www.omdbapi.com/?apikey=300a8db6&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response));

// console.log(movies);

// promise
// sebuah objek yang merepresntasi
// keberhasilan/ kegagalan dari sebuah event 
// yang asynchronous di masa yang akan dtang
// janji yang terpenuhi/ ingkar => state
// states(fulfilled/ rejected/ pending)
// callback (resolve/ reject/ finally)
// aksi (then/ cacth)

// let ditepati = true;
// const janji = new Promise((resolve, reject) => {
//     if(ditepati){
//         resolve('janji telah ditepati');
//     }else{
//         reject('Ingkar Janji....')
//     }
// });

// // console.log(janji);

// janji
//     .then(response => console.log(`OK! : ${response}`))
//     .catch(response => console.log(`Not OK : ${response}`));


    // resolve di tangkap oleh then
    // reject d tangkap oleh catch

// let lunas = true;
// const janji2 = new Promise((resolve, reject) => {
//     if(lunas){
//         setTimeout(() => {
//             resolve('Utang mu lunas setelah sekian detik');
//         }, 2000);
//     }else{
//         setTimeout(() => {
//             resolve('janji palsu lama');
//         }), 2000;
//     }
// });

// console.log('mulai');
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//     .finally(() => console.log(`Selesai menunggu!`))
//     .then(response => console.log(`OK, ${response}`))
//     .catch(response => console.log(`Not OK, ${response}`));
// console.log('selesai');

const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'avengers',
            sutradara: 'fajar',
            actor: 'dody, petet'
        }])
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'medan',
            temp: 30,
            kondisi: 'Cerah Berawan'
        }]);
    }, 500);
});

// jalanin sekaligus
Promise.all([film, cuaca])
    .then(response => {
        const[film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    });