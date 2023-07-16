'use strict';

const $numberOfFilms = +prompt("Скільки фільмів ви переглянули?", "");

const personalMovieDB = {
    count: $numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

for (let i = 0; i < 2; i++) {
    const $lastFilm = prompt("Один з останніх переглянутих фільмів?", ""),
          $reviewFilm = prompt("Як поставите йому оцінку?", "");

    personalMovieDB.movies[$lastFilm] = $reviewFilm;
}

console.log (personalMovieDB);