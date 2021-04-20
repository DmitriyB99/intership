/////////////////////////////////////////////////////// 4 nummer starts with 2 / 4

let arr = ['123123', '23232323', '4232', '555555', '2121544665456', '224097', '4156879'];

arr.forEach((number) => {
  if (number.startsWith('2') || number.startsWith('4')) {
    console.log(number);
  }
})

//////////////////////////////// prime numbers

const primeNumber = (n) => {
  for (let i = 2; i <= n; i++) {
      let isPrime = true;
      for (let j = 2; j < i; j++) {
          if (i % j === 0) {
            isPrime = false;
            break; 
          }
      }
      if (isPrime) {
        console.log(i + ` делители этого числа: 1 и ${i}`);
      }
  }
}
primeNumber(100);
