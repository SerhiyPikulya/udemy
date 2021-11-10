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

//Number.isInteger(Number(object.length)) && Number(object.length) >= 0
//typeof object.length === 'number' && Number(object.length) >= 0 // це псевдомасив

// //// Преобразуем псевдомассив в массив
// var object = {0: 1, 1: 2, 2: 3, length: 3}
// var array = Array.from(object);
// console.log( array ); // [1, 2, 3]

// var object = {0: 1, 1: 2, 2: 3, length: 3}
// var array = Array.prototype.slice.call(object); // Или сокращённая форма: [].slice.call(object);
// console.log( array ); // [1, 2, 3]

// // /// Дополнительная функция .call(), которая даёт возможность работать с псевдомассивами.
// var object = {0: 'a', 1: 'b', 2: 'c', length: 3}
// // Создаём массив из значений псевдомассива
// object = Array.prototype.map.call(object, v => 'Буква: ' + v); // Или сокращённо: [].map.call(object, v => 'Буква: ' + v)

// console.log(object); // ['Буква: a', 'Буква: b', 'Буква: c']


// // ВЗАЄМОДІЯ З СТОРіНКОЮ

const box = document.getElementById('box'), // отримати елемент в змінну по id
      btns = document.getElementsByTagName('button'), // отримати елементИ по тегу
      circles = document.getElementsByClassName('circle'), // по класу
      wrapper = document.querySelector('.wrapper'), // перший елемент по селектору
      hearts = wrapper.querySelectorAll('.heart'), // !ВИНЯТОК! всі елементИ по css селектору: https://learn.javascript.ru/css-selectors, є метод forEach
      oneHeart = wrapper.querySelector('.heart'); // можна звертатись до змінної, якщо вона завантажена

box.style.backgroundColor = 'blue'; // зміна інлайн стилів
btns[1].style.borderRadius = '100%';

// box.style.cssText = `backgroundColor: green; width: ${num}px`; // багато інлайн стилів в форматі css

hearts.forEach(item => {                                  //перебір елементів для querySelectorAll (можна ще циклом або for of)
  item.style.backgroundColor = 'blue';
});

const div2 = document.createElement('div'); // створити тег
const text2 = document.createTextNode('текст');// створити текстовий вузол, без тега

div2.classList.add('black'); // додати клас до тегу

document.body.append(div2); // вивести елемент в HTML кінець тегу  body
document.querySelector('.wrapper').append(div2); //отримати і одразу виконати дію, без проміжної змінної

wrapper.prepend(div2); // вивести елемент на початку тегу 

hearts[0].before(div2); // вивести перед елементом
hearts[0].after(div2); // вивести після елементу

circles[2].remove(); //видалення елемента

hearts[1].replaceWith(circles[0]); //замінити один елемент іншим

// wrapper.insertBefore(div2, hearts[0]); // вставка перед елементом, стара команда
// wrapper.removeChild(hearts[1]); // видалення, стара
// wrapper.replaceChild(hearts[1], circles[0]); // заміна елементів. стара

div2.innerHTML = '<h1>Вставка HTML</h1>'; // Вставка HTML
// div2.textContent = 'Вставка тексту, без HTML';

div2.insertAdjacentHTML("afterend", '<h2>beforebegin, beforeend, afterbegin</h2>'); // Вставка HTML перед, після, в початок, в кінець елемента


//ЗАВДАННЯ НА РОЗУМІННЯ ПРИНЦИПІВ РОБОТИ JS
//let x = 5; alert( x++ ); // 5
// console.log([] + false - null + true); // NaN - рядок false мінус null
// //let y = 1; let x = y = 2; alert(x); // 2
// console.log([] + 1 + 2); // 12
// //alert( '1'[0] ); // 1; просто [0] виводить 0, або масив в консоль. Пустий масив перетворюється в пусту стрічку під час динамічної типізації
// console.log(2 && 1 && null && 0 && undefined); //null; && виводить перше false у виразі (0, null, undefined)
// console.log(!!( 1 && 2 ) === (1 && 2)); //не рівні; !! - перетворєють вирез в булевий, && - виводить останню правдиву частину виразу
// console.log( null || 2 && 3 || 4 ); //3; АБО виводить першу ПРАВДУ, а 2І3 виведе 3.
// const a = [1, 2, 3], b = [1, 2, 3]; console.log ( a == b); //Неправда, бо це стрілки на різні масиви, хоча елементи масивів однакові 
// console.log( +"Infinity" ); // Число Infinity
// console.log( 'Ёжик' > 'яблоко' ); //НЕПРАВАДА, бо код я більше за код Е
// console.log( 0 || '' || 2 || undefined || true || falsе ); //АБО виводить першу ПРАВДУ, або останню НЕПРАВДУ якщо у виразі все НЕПРАВДА




// при мат. операциях(и не только) массивы преобразуются в строку из элементов, разделенных запятыми:

// [1,2,3] -> '1,2,3'

// [] -> ""

// соотвественно, при сложении(конкатенации) строки и числа, число преобразуется в строку:

// [] + 1 -> '' +  '1' -> '1'

// если другие математические операторы (вычитание, умножение, деление) участвуют, то уже оба операнда приводятся к числу. 

// пустой массив сначала преобразуется в пустую строку, а потом пустая строка преобразуется в число, то есть  0

// [ ] - 1 + 2 ->  "" - 1 +2 -> 0 -1 +2

// принципы преобразования примитивов в число:

// undefined -> NaN

// null -> 0

// true / false -> 1 / 0

// stringПробельные символы по краям обрезаются. Далее, если остаётся пустая строка, то получаем 0, иначе из непустой строки «считывается» число. При ошибке результат NaN.


// если быть точнее оператор || возвращает первое истинное значение или последнее (если все значения ложны):

// 0 || 2 || false -> вернет 2 как первое истинное значение

// 0 || null || undefined -> вернет undefined как последнее значение среди всех ложных

// в нашем примере:

// null ||  3 || 4 вернет 3 как первое истинное значение, и 3 с 4 даже не сравниваются






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