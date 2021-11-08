"use strict";

// !КОРИСНІ ПРИЙОМИ
// console.log(Object.keys(`ім'я масиву`).length); //Отримати к-ть елементів масиву

//arr.sort(compareNum)                            //сортування чисел в масиві
// function compareNum(a, b) {
//   return a - b;
// } 

// function copy(mainObj) {                       //Поверхове копіювання об'єктів, масивів
//   let objCopy = {};

//   for (let key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }

//   return objCopy;
// }

// const clone = Object.assign({}, add); //поверхове Копіювання/склеювання об'єктів - в пустий об додається об add

//const newArray = oldArray.slice();              //копіювання Масивів

// const arr1 = ['youtube', 'vimeo', 'tube'],        //об'єднання масивів, об'єктів через спред оператор ...
//       arr2 = ['a', 'b', 'c'];
//       arrNewSum = [...arr1, ...arr2, 'свої дані 1', 'cdj] lfys 2']

// const newArr = [...oldArr];        //копіювання масивів, об'єктів через спред оператор ...
// const newObj = {...oldObj};

//Object.setPrototypeOf(o, proto); //Втановлення прототипу для об'єкта о - для існуючих об'єктів

//const o = Object.create(proto);    //Створення нового об'єкту о з властивостями прототипу proto




//let number = 5;
// const result = confirm('Are you here?');
// console.log(result);

// const answer = prompt('Xb dbgjdybkjcm dfv 18?', '18');
// console.log(answer);

// const answers = [];
// answers[0] = prompt('Як вас звати?', '');
// answers[1] = prompt('Як прізвище?', '');
// answers[2] = prompt('Років?', '');

// document.write(answers);

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

//ПРАКТИЧНЕ 3 - мій розв'язок
// function showMyDB() {
//   if (personalMovieDB.privat === false) console.log(personalMovieDB);
// }