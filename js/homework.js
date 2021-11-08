"use strict";


const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    personalMovieDB.count = +prompt("Скільки фільмів ви переглянули?", "");
  
    while (personalMovieDB.count == null || personalMovieDB.count == '' || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt("Скільки фільмів ви переглянули?", "");
    }
  },
  rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
      const lastFilms = prompt("Останній переглянутий фільм?", ""),
            ratingFilms = prompt("Яку йому оцінку поставите?", "");
      if (lastFilms != null && ratingFilms != null && lastFilms != '' && ratingFilms != '' && lastFilms.length < 50) {
        personalMovieDB.movies[lastFilms] = ratingFilms;
      } else {
        i--;
      }
    }  
  },
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {console.log('Переглянуто мало фільмів');}
    else if (personalMovieDB.count > 30) {console.log('Ви кіноман');}
    else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log('Ви класичний глядач');
    } else {console.log('Відбулася помилка');}  
  },
  showMyDB: function(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function() {
    for (let i = 1; i <= 3; i++) {
      personalMovieDB.genres[i-1] = prompt(`Ваш улюблений жанр під номером ${i}?`, "").toLowerCase();
      if (personalMovieDB.genres[i-1] === null || personalMovieDB.genres[i-1] === '') {
        i--;
        console.log('Ви ввели некоректні дані');
      }
    }
    // personalMovieDB.genres.forEach(function(item, i) {
    //   console.log(`Улюблений жанр ${i+1} - це ${item}`);
    // });
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Улюблений жанр ${i+1} - це ${item}`);
    });
  },
  toggleVisibleMyDB: function() {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  }
};

//personalMovieDB.start();
//personalMovieDB.rememberMyFilms();
//personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB(personalMovieDB.privat);

//start();
//rememberMyFilms();
//detectPersonalLevel();
//showMyDB(personalMovieDB.privat); //Показати БД, якщо значення приватності каталогу не falce
//showMyDB();
//writeYourGenres;

console.log(personalMovieDB);
