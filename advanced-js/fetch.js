// fetch : api pada js modern yang bertugas mengambl data secara ajax 
// sebiah method pada API javascript untuk mengambil resource dari jaringan
// , dan mengembalikan PROMISE  yang selesai (fulfilled)
// ketika da response yang tersedia
// sumber mdn
// fetch(resouce, init/ konfigurasi tambahan)
// resources : 
// 1. URL
// 2. request OBject

// init (optional) :
// konfigurasi tambhan pada sebuah requeat dalam bentuk header

// response hasil dari fetch
// headers
// ok 
// redirected
// status
// statusTExt
// type
// url
// body


// alternatif ajax menggunakan fetch js
// const searchBtn = document.querySelector('.search-btn');

// searchBtn.addEventListener('click', function(){
    
//     // jalankan method fetch
//     const keyword = document.querySelector('.input-keyword')

//     fetch('http://www.omdbapi.com/?apikey=300a8db6&s=' + keyword.value)
//         .then(response => response.json())
//         .then(response => {
//             const movies = response.Search;
//             let cards = '';
//             movies.forEach(m => cards += showCards(m));
            
//             const movieContainer = document.querySelector('.movie-container');
//             movieContainer.innerHTML = cards;

//             // ketika tombol detail di klik
//             const modalDetailBtn = document.querySelectorAll('.modal-detail-btn');
//             modalDetailBtn.forEach(btn => {
//                 btn.addEventListener('click', function(){
//                     // console.log(this);
//                     const imdbId = this.dataset.imdbid;
//                     // console.log(imdbId);
//                     fetch('http://www.omdbapi.com/?apikey=300a8db6&i=' + imdbId)
//                         .then(response => response.json())
//                         .then(m => {
//                                 const movieDetail = showMovieDetail(m);
//                                 const modalBody = document.querySelector('.modal-body');
//                                 modalBody.innerHTML = movieDetail;
//                         });
//                 });
//             });
//         });
// });

// fetch refactor agar coding lebih mudah d baca
const searchButton = document.querySelector('.search-btn');
searchButton.addEventListener('click', async function(){
    try{

        // fungsi callback ini ada sesuatu yang 
        // asyncronous
        const inputKeyword = document.querySelector('.input-keyword');
        
        // abstraksi biar gampang di baca
        // yang ini yang asyncrhonous
        const movies = await getMovies(inputKeyword.value);
        
        // yang kembali adalah array of object
        // console.log(movies);
        
        updateUI (movies);
    }catch(err){
        // console.log(err);
        alert(err);
    }
});

// ketika tombol detail detail di klik
// gunakan event bnding digunakan ketika ngaish elemen ketiak elemanya sudah 
// tidak akan jalan ketiak elemennya tidak ada
// event binding
document.addEventListener('click', async function(e){
    if(e.target.classList.contains('modal-detail-btn')){
        // console.log('ok');
        const imdbId = e.target.dataset.imdbid;

        // kasih await pada fungsi yang 
        // asyncronous
        const movieDetail = await getMovieDetail(imdbId);
        updateUIDetail(movieDetail);
    }
});

function getMovies(keyword){
    return fetch('http://www.omdbapi.com/?apikey=300a8db6&s=' + keyword)
    .then(response => {
        if(!response.ok){
            throw new Error(response.statusText);
        }

        return response.json();
    })
    .then(response => {
        // cek response untuk mengetahui kita mau apakan
        // console.log(response);
        if(response.Response === "False"){
            throw new Error(response.Error);
        }

        return response.Search
    });
}

function updateUI(movies){
    let cards = '';
    movies.forEach(m => cards += showCards(m));
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
}

function getMovieDetail(imdbId){
    return fetch('http://www.omdbapi.com/?apikey=300a8db6&i=' + imdbId)
        .then(response => response.json())
        .then(m => m);
}

function updateUIDetail(m){
    const movieDetail = showMovieDetail(m);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
}

function showCards(m){
    return `<div class="col-md-3 my-2">
                <div class="card text-left">
                <img class="card-img-top" src="${m.Poster}" alt="">
                <div class="card-body">
                    <h4 class="card-title">${m.Title}</h4>
                    <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                    <a href="" class="btn btn-primary modal-detail-btn" data-toggle="modal" data-target="#movieDetailModal" data-imdbid ="${m.imdbID}">Show Detail</a>
                </div>
                </div>
            </div>`;
}

function showMovieDetail(m){
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-3">
                        <img src="${m.Poster}" class="img-fluid">
                    </div>
                    <div class="col">
                        <ul class="list-group">
                            <li class="list-group-item">${m.Title} (${m.Year})</li>
                            <li class="list-group-item"><strong>Genre: </strong>${m.Genre}</li>
                            <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
                            <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
                            <li class="list-group-item"><strong>Plot : </strong> <br> ${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
}