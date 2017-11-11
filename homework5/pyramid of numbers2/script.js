/*Создать пирамиду в виде чисел (1-1, 2-12, 3-123 и т.д.). Пользователь вводит число*/

var num = prompt("Ведіть число:");
num1 = parseInt(num);
for (var i = 1; i <= num1; i++) {
    for (var j = 1; j <= i; j++) {
        document.write(' ' + j + ' ');
    }
    document.write("<br>");
}