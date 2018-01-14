// Реализуйте функцию factorial(), которая возвращает факториал переданного ей числа.

var num = prompt("Ведіть число:");

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

alert(factorial(num));