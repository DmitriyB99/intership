
let num = 266219;
let result = 1;

let splitNum = num.toString().split('');

splitNum.forEach(function (elem) {
  result *= elem;
})

console.log(result); // произведение чисел

console.log(result**3); // 3 степень

console.log(String(result**3).slice(0,2)); // 2 числа
