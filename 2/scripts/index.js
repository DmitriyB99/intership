/////////////////////////////////////////////////////// 2  if 

let lang = 'ru';
let ruDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let engDays = ['mn', 'tues', 'wd', 'th', 'fr', 'st', 'sn'];
let days = '';

if (lang === 'ru') {
  days = ruDays;
} 
else if (lang === 'en') {
  days = engDays;
}

console.log(days);


////////////////////////////// switch-case
/*
let lang = 'ru';
let ruDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let engDays = ['mn', 'tues', 'wd', 'th', 'fr', 'st', 'sn'];
let days = '';

switch (lang) {
  case 'ru':
    days = ruDays;
    console.log(days);
    break;
  case 'en':
    days = engDays;
    console.log(days);
    break;
}
*/

////////////////////////////// array
/*
let lang = 'en';

let days = {
  'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
  'en': ['mn', 'tues', 'wd', 'th', 'fr', 'st', 'sn'],
}

console.log(days[lang]);
*/

////////////////////////////// ternary
/*
let namePerson = prompt ('Введите имя', 'Максим');

let position = (namePerson === 'Артем') ? 'директор' :
  (namePerson === 'Максим') ? 'преподаватель' : 'студент';

console.log(position);
*/
