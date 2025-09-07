$(document).ready(function() {
    let latestTextData = [
        {
            titleEn: "Movie 2",
            titleFa: "فیلم دوم",
            sub: "داستان یک ماجراجویی هیجان‌انگیز در دنیای ناشناخته‌ها.",
            genere: "ماجراجویی - فانتزی",
            actors: "Tom Hanks - Emma Watson",
            director: "Steven Spielberg",
            imdb: "6.8",
            rotten: "75",
            bgimage: "BHB-Big.jpg"
        },
        {
            titleEn: "Movie 3",
            titleFa: "فیلم سوم",
            sub: "یک داستان عاشقانه در دل جنگ.",
            genere: "درام - عاشقانه",
            actors: "Leonardo DiCaprio - Kate Winslet",
            director: "James Cameron",
            imdb: "7.2",
            rotten: "80",
            bgimage: "alto-Big.jpg"
        },
        {
            titleEn: "Movie 4",
            titleFa: "فیلم چهارم",
            sub: "ماموریتی برای نجات دنیا از خطر قریب‌الوقوع.",
            genere: "اکشن - علمی‌تخیلی",
            actors: "Chris Hemsworth - Scarlett Johansson",
            director: "Christopher Nolan",
            imdb: "8.0",
            rotten: "90",
            bgimage: "MIFR-Big.jpg"
        },
        {
            titleEn: "Movie 5",
            titleFa: "فیلم پنجم",
            sub: "ماجراجویی در اعماق اقیانوس.",
            genere: "ماجراجویی - علمی‌تخیلی",
            actors: "Johnny Depp - Natalie Portman",
            director: "Ron Howard",
            imdb: "6.5",
            rotten: "60",
            bgimage: "BHB-Big.jpg"
        },
        {
            titleEn: "Movie 6",
            titleFa: "فیلم ششم",
            sub: "داستان یک قهرمان غیرمنتظره.",
            genere: "اکشن - کمدی",
            actors: "Ryan Reynolds - Dwayne Johnson",
            director: "Shawn Levy",
            imdb: "7.0",
            rotten: "70",
            bgimage: "F1-Big.jpg"
        },
        {
            titleEn: "Movie 7",
            titleFa: "فیلم دهم",
            sub: "داستان یک رویای غیرممکن.",
            genere: "فانتزی - درام",
            actors: "Timothée Chalamet - Zendaya",
            director: "Denis Villeneuve",
            imdb: "8.2",
            rotten: "92",
            bgimage: "F1-Big.jpg"
        },
        {
            titleEn: "Movie 8",
            titleFa: "فیلم هفتم",
            sub: "رازهای یک خانواده مرموز.",
            genere: "رازآلود - درام",
            actors: "Benedict Cumberbatch - Tilda Swinton",
            director: "Wes Anderson",
            imdb: "7.5",
            rotten: "85",
            bgimage: "alto-Big.jpg"
        },
        {
            titleEn: "Movie 9",
            titleFa: "فیلم هشتم",
            sub: "مبارزه برای عدالت در دنیایی آشوب‌زده.",
            genere: "اکشن - درام",
            actors: "Denzel Washington - Viola Davis",
            director: "Spike Lee",
            imdb: "7.8",
            rotten: "88",
            bgimage: "MIFR-Big.jpg"
        },
        {
            titleEn: "Movie 10",
            titleFa: "فیلم نهم",
            sub: "سفر در زمان برای تغییر سرنوشت.",
            genere: "علمی‌تخیلی - درام",
            actors: "Matt Damon - Jessica Chastain",
            director: "Ridley Scott",
            imdb: "7.3",
            rotten: "82",
            bgimage: "BHB-Big.jpg"
        },
        {
            titleEn: "F1 : The Movie",
            titleFa: "فرمول یک",
            sub: "یک راننده فرمول یک پس از بازنشستگی دوباره به میدان برمی گردد تا راهنما و همراه راننده ای جوان باشد.",
            genere: "اکشن - هیجان‌انگیز - ورزشی",
            actors: "Brad Pitt - Angelina Jolie - Al Pacino",
            director: "Brad Pitt",
            imdb: "5.7",
            rotten: "33",
            bgimage: "F1-Big.jpg"
        }
    ];

    // Initialize buttons with data and set focus
    function initializeMovieButtons() {
        $('.latestMovieContSingle').each(function(index) {
            if (index < latestTextData.length) {
                $(this).data('movie-index', index);
                $(this).find('img').attr('src', `./img/movies/${latestTextData[index].bgimage}`);
            }
        });

        // Set initial focus and active state
        $('.latestMovieContSingle').last().addClass('active');
        updateMovieDetails(9);
    }

    // Update movie details with fade effect
    function updateMovieDetails(index) {
        const data = latestTextData[index];

        if(index <= 5 && index >=2){
            $('.latestMovieCont').animate({ left: '-1500px' }, 300);
        }
        else if(index <= 1){
            $('.latestMovieCont').animate({ left: '-2215px' }, 300);
        }
        else{
            $('.latestMovieCont').animate({ left: '0px' }, 300);
        }
        
        // Fade out current content
        $('.movieBigBg, .latestMovieTxt, .latestMovieTxtGenere, .latestMovieTxtArtist').fadeOut(300, function() {
            // Update background image
            $('.movieBigBg').attr('src', `./img/movies/${data.bgimage}`).addClass('active');
            
            // Update text content
            $('.latestMovieTxtTitleMian').text(data.titleEn);
            $('.latestMovieTxtTitleSub').text(data.titleFa);
            $('.latestMovieTxtDesc').text(data.sub);
            $('.latestMovieTxtRateSingleRot').eq(0).text(data.imdb);
            $('.latestMovieTxtRateSingleRot').eq(1).html(`<span>${data.rotten}</span>%`);

            // Update genres
            $('.latestMovieTxtGenere').empty();
            data.genere.split(' - ').forEach(genre => {
                $('.latestMovieTxtGenere').append(`<button class="latestMovieTxtGenereSingle LMIBTN">${genre}</button>`);
            });

            // Update actors
            $('.latestMovieTxtArtist').eq(0).find('button').remove();
            data.actors.split(' - ').forEach(actor => {
                $('.latestMovieTxtArtist').eq(0).append(`<button class="latestMovieTxtArtistSingle LMIBTN">${actor}</button>`);
            });

            // Update director
            $('.latestMovieTxtArtist').eq(1).find('button').remove();
            $('.latestMovieTxtArtist').eq(1).append(`<button class="latestMovieTxtArtistSingle LMIBTN">${data.director}</button>`);

            // Fade in new content
            $('.movieBigBg, .latestMovieTxt, .latestMovieTxtGenere, .latestMovieTxtArtist').fadeIn(300);
        });
    }

    let prevCur = 9;
    let genInd = 0;
    let actInd = 0;
    let headInd = 0;

    function normalizeIndex(ind, count) {
        return (ind % count + count) % count;
    }

    $(document).on('keydown', function(e) {
        const $current = $('.LMIBTN.active');
        const $genres = $('.latestMovieTxtGenereSingle');
        const genreCount = $genres.length;
        const $actors = $('.latestMovieTxtArtistSingle');
        const actorCount = $actors.length;
        const $headerBtns = $('.bottomContHeader .MIBTN'); // header area MIBTN count (dynamic)
        const headerCount = $headerBtns.length;

        // Clear all active classes
        $('.LMIBTN').removeClass('active');

        if (e.key === "Enter") {
            $(".active").trigger("click");
        } else if ($current.hasClass('latestMovieContSingle')) {
            const currentIndex = $current.data('movie-index');
            if (e.key === 'ArrowLeft') {
                let newIndex = (currentIndex + 1) % latestTextData.length;
                $('.latestMovieContSingle').eq(newIndex).addClass('active');
                updateMovieDetails(newIndex);
            } else if (e.key === 'ArrowRight') {
                let newIndex = (currentIndex - 1 + latestTextData.length) % latestTextData.length;
                $('.latestMovieContSingle').eq(newIndex).addClass('active');
                updateMovieDetails(newIndex);
            } else if (e.key === 'ArrowUp') {
                $('.latestMovieTxtLeftShow').addClass('active');
                prevCur = currentIndex;
            }
        } else if ($current.hasClass('latestMovieTxtLeftShow')) {
            if (e.key === 'ArrowRight' && genreCount > 0) {
                genInd = 0;
                $genres.eq(genInd).addClass('active');
            } else if (e.key === 'ArrowLeft') {
                $('.latestMovieTxtLeftShow').addClass('active');
            } else if (e.key === 'ArrowDown') {
                $('.latestMovieContSingle').eq(prevCur).addClass('active');
            } else if (e.key === 'ArrowUp') {
                headInd = 0;
                $('.bottomContHeader .MIBTN').eq(headInd).addClass('active');
            }
        } else if ($current.hasClass('latestMovieTxtGenereSingle')) {
            if (e.key === 'ArrowLeft' && genreCount > 0) {
                if (genInd === genreCount - 1) {
                    $('.latestMovieTxtLeftShow').addClass('active');
                    genInd = 0; // Reset genInd when moving to latestMovieTxtLeftShow
                } else {
                    genInd = normalizeIndex(genInd + 1, genreCount);
                    $genres.eq(genInd).addClass('active');
                }
            } else if (e.key === 'ArrowRight') {
                genInd = normalizeIndex(genInd - 1, genreCount);
                $genres.eq(genInd).addClass('active');
            } else if (e.key === 'ArrowDown') {
                actInd = 0;
                $actors.eq(actInd).addClass('active');
            } else if (e.key === 'ArrowUp') {
                headInd = 0;
                $('.bottomContHeader .MIBTN').eq(headInd).addClass('active');
            }
        } else if ($current.hasClass('latestMovieTxtArtistSingle')) {
            if (e.key === 'ArrowLeft' && actorCount > 0) {
                if (actInd === actorCount - 1 || actInd === actorCount - 2) {
                    $('.latestMovieTxtLeftShow').addClass('active');
                    actInd = 0; // Reset genInd when moving to latestMovieTxtLeftShow
                } else {
                    actInd = normalizeIndex(actInd + 1, actorCount);
                    $actors.eq(actInd).addClass('active');
                }
            } else if (e.key === 'ArrowRight') {
                actInd = normalizeIndex(actInd - 1, actorCount);
                $actors.eq(actInd).addClass('active');
            } else if (e.key === 'ArrowDown') {
                actInd = actorCount - 1;
                $actors.eq(actInd).addClass('active');
            } else if (e.key === 'ArrowUp') {
                if(actInd == actorCount - 1){
                    actInd = 0;
                    $actors.eq(actInd).addClass('active');
                } else {
                    genInd = 0;
                    $genres.eq(genInd).addClass('active');
                }
            }
        } else {
            $headerBtns.removeClass("active")
            if (e.key === 'ArrowLeft' && headerCount > 0) {
                if (headInd === headerCount - 1) {
                    $('.latestMovieTxtLeftShow').addClass('active');
                    actInd = 0; // Reset genInd when moving to latestMovieTxtLeftShow
                } else if (headInd === headerCount - 2){
                    headInd = normalizeIndex(headInd + 1, headerCount);
                    $headerBtns.eq(headInd).addClass('active');
                }
                else {
                    headInd = normalizeIndex(headInd + 1, headerCount);
                    $headerBtns.eq(headInd).addClass('active');
                }
            } else if (e.key === 'ArrowRight') {
                if (headInd === 0) {
                    $('.latestMovieContSingle').eq(prevCur).addClass('active');
                } else {
                    headInd = normalizeIndex(headInd - 1, headerCount);
                    $headerBtns.eq(headInd).addClass('active');
                }
            } else if (e.key === 'ArrowDown') {
                headInd = 0;
                $('.latestMovieTxtLeftShow').addClass('active');
            } else if (e.key === 'ArrowUp') {
                $headerBtns.eq(headInd).addClass('active');
            }
        }
    });

    // Initialize
    initializeMovieButtons();
});