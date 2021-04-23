const adv = document.querySelector('.adv');
const books = document.querySelector('.books');

let arr = document.querySelectorAll('.book');
let link = document.querySelectorAll('a');
let ul = document.querySelectorAll('ul');


link[4].textContent = 'Книга 3. this и Прототипы Объектов';

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

let newArr = [arr[1], arr[0], arr[4], arr[3], arr[5], arr[2]];

newArr.forEach(el => books.appendChild(el))

adv.remove();

arr.forEach((book) => {
    const list = book.querySelector("ul");
    const items = book.querySelectorAll("li");
    let introduction = '';
    let preamble = '';
    let chapters = [];
    let additionals = [];
    items.forEach((el) => {
        const text = el.innerHTML;
        if (text === "Введение") {
            introduction = el;
            return
        }
        if (text === "Предисловие") {
            preamble = el;
            return
        }
        const firstWord = text.split(' ')[0]
        if(firstWord === 'Глава'){
            chapters.push(el) 
            return
        }
        if(firstWord === 'Приложение'){
            additionals.push(el) 
        }
    });
    chapters = chapters.sort((a,b) => a.innerText.localeCompare(b.innerText) )
    additionals = additionals.sort((a,b) => a.innerText.localeCompare(b.innerText) )
    list.append(introduction)
    list.append(preamble)
    chapters.forEach(el => list.append(el))
    additionals.forEach(el => list.append(el))
});

let li1 = document.querySelectorAll('li');
let lastUl = ul[2];

li1[56].remove();
let p = document.createElement('li');
p.append('Глава 8: За пределами ES6')

let p1 = document.createElement('li');
p1.append('Приложение A: Благодарности!')

lastUl.appendChild(p);
lastUl.appendChild(p1);


