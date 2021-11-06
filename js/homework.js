"use strict";

const numberOfFilms = +prompt("Скільки фільмів ви переглянули?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const lastFilms = prompt("Останній переглянутий фільм?", ""),
      ratingFilms = prompt("Яку йому оцінку поставите?", ""),
      lastFilms2 = prompt("Останній переглянутий фільм?", ""),
      ratingFilms2 = prompt("Яку йому оцінку поставите?", "");

personalMovieDB.movies = {
  [lastFilms]: ratingFilms,
  [lastFilms2]: ratingFilms2
};

// personalMovieDB.movies[lastFilms] = ratingFilms;
// personalMovieDB.movies[lastFilms2] = ratingFilms2;

//console.log(movies);
console.log(personalMovieDB);