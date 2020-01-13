$.ajax({
    url: 'http://www.omdbapi.com/?apikey=300a8db6&s=avengers',
    success: result =>{
        // console.log(result);
        const movies = result.Search;
        // console.log(movies);
        let cards = '';

        movies.forEach(m => {
            cards += showCards(m);
        });

        // kasih tahu jquery tolong carikan saya element
        // calss movie-container lalu isi kontainer nya
        // pakai cards
        $('.movie-container').html(cards);

        // ketika tombol detail d klik
        $('.modal-detail-btn').on('click', function(){
            // console.log($(this).data('imdbid'));

            let imdbId = $(this).data('imdbid');
            $.ajax({
                url: 'http://www.omdbapi.com/?apikey=300a8db6&i=' + imdbId,
                success:  m => {
                    // console.log(m);
                    const movieDetail = showMovieDetail(m);
                    
                    // cari classnya
                    // tambahkan const diatas
                    $('.movie-detail').html(movieDetail);
                },
                error: (e) => {
                    console.log(e.responseText);
                }
            });
        });
    },
    error: (e) => {
        console.log(e.responseText);
    }
});

$('.search-btn').on('click', function(){
    // ambil hasil input class input-keyword
    const kw = $('.input-keyword').val();

    
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=300a8db6&s=' + kw,
        success: result =>{
            // console.log(result);
            const movies = result.Search;
            // console.log(movies);
            let cards = '';
    
            movies.forEach(m => {
                cards += showCards(m);
            });
    
            // kasih tahu jquery tolong carikan saya element
            // calss movie-container lalu isi kontainer nya
            // pakai cards
            $('.movie-container').html(cards);
    
            // ketika tombol detail d klik
            $('.modal-detail-btn').on('click', function(){
                // console.log($(this).data('imdbid'));
    
                let imdbId = $(this).data('imdbid');
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=300a8db6&i=' + imdbId,
                    success:  m => {
                        // console.log(m);
                        const movieDetail = showMovieDetail(m);
                        
                        // cari classnya
                        // tambahkan const diatas
                        $('.movie-detail').html(movieDetail);
                    },
                    error: (e) => {
                        console.log(e.responseText);
                    }
                });
            });
        },
        error: (e) => {
            console.log(e.responseText);
        }
    });
});



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