"use strict";

const numberOfFilms = +prompt("Скільки фільмів ви переглянули?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


//ПРАКТИЧНЕ 1
// const lastFilms = prompt("Останній переглянутий фільм?", ""),
//       ratingFilms = prompt("Яку йому оцінку поставите?", ""),
//       lastFilms2 = prompt("Останній переглянутий фільм?", ""),
//       ratingFilms2 = prompt("Яку йому оцінку поставите?", "");

// personalMovieDB.movies = {
//   [lastFilms]: ratingFilms,
//   [lastFilms2]: ratingFilms2
// };

// personalMovieDB.movies[lastFilms] = ratingFilms;
// personalMovieDB.movies[lastFilms2] = ratingFilms2;

//console.log(movies);

//ПРАКТИЧНЕ 2 - мій розв'язок
// let i = 1;
// while (i <= 2) {
//   let lastFilms = '',
//       ratingFilms = '';
//   do {
//     lastFilms = prompt("Останній переглянутий фільм?", ""),
//     ratingFilms = prompt("Яку йому оцінку поставите?", "");
//   }
//   while (lastFilms === null || lastFilms.length === 0 || lastFilms.length > 50);
//   personalMovieDB.movies[lastFilms] = ratingFilms;
//   i++;
// }

for (let i = 0; i < 2; i++) {
  const lastFilms = prompt("Останній переглянутий фільм?", ""),
        ratingFilms = prompt("Яку йому оцінку поставите?", "");
  if (lastFilms != null && ratingFilms != null && lastFilms != '' && ratingFilms != '' && lastFilms.length < 50) {
    personalMovieDB.movies[lastFilms] = ratingFilms;
  } else {
    i--;
  }
}


if (personalMovieDB.count < 10) {console.log('Переглянуто мало фільмів');}
else if (personalMovieDB.count > 30) {console.log('Ви кіноман');}
else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log('Ви класичний глядач');
} else {console.log('Відбулася помилка');}

console.log(personalMovieDB);