
// Задание 1.
let arr = [15, 3, 25, null, 7, 33, 21, 26, 0, 99];
function getArraysOddAndEvenCount(arr) {
    let zerocount = 0;
    let numbercount = 0;
    let evencount = 0;
    let oddcount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" ||!isNaN(arr[i])) {
            numbercount += 1;
            if (arr[i] === 0) {
                zerocount += 1;
            } else if (arr[i] % 2 === 0) {
                evencount += 1;
            } else {
                oddcount += 1;
            }
        }
    }


//Задание 2
function isPrime(num) {
    if (!Number.isInteger(num) || num < 2 && num > 1000) return "данные неверны";
    let k = Math.sqrt(num);
    for (let i = 2; i <= k; i++)
        if (num % i === 0) return "непростое число";
    return "простое число";
}
console.log(isPrime(8));

//Задание 3
function sum(x) {
    return function(y) {
        return x + y;
    };
}

let f = sum(5);
console.log( f(0), f(1), f(2) );

console.log( sum(1)(2), sum(2)(2), sum(30)(2) );

//Задание 4
function printNumbers(from, to) {
  let current = from;

  let timerId = setInterval(function() {
    alert(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

printNumbers(5, 10);




