
/////////////////////////////////////////////////////// 5

let week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

const innerDays = document.querySelector('.days');
let today = new Date();

const allDays = () => {
  week.forEach((day, i) => {
    let div = document.createElement('div');
    if (i === today.getDay()) {
      div.classList.add('today');
      div.textContent = week[i]; 
    }

    if (day === 'сб' || day === 'вс') {
      div.classList.add('italic');
      div.textContent = week[i];
    } else {
      div.textContent = week[i];
    }

    innerDays.append(div);

  })
}

allDays();
