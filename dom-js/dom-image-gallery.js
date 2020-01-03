const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e){
    // cek apakah yang di klik adalah thumb
    if(e.target.className == 'thumb'){
        jumbo.src = e.target.src;
        jumbo.classList.add('fade1');

        // kasih timeout agar class tertentu hilang
        setTimeout(function(){
             jumbo.classList.remove('fade1');
        }, 500);

        thumbs.forEach(function(thumb){
            // if(thumb.className.containts('active')){
            //     thumb.classList.remove('active');
            // }

            // cara malasnya
            thumb.className = 'thumb';
        });

        e.target.classList.add('active');
    }

});

