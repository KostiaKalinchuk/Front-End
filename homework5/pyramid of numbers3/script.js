/*Создать пирамиду в виде чисел в обратном порядке. Пользователь вводит число.
К примеру введено 5, первый ряд 5, второй ряд 5 4, третий - 5 4 3 и т.д. */

var num = prompt("Ведіть число:");
num1 = parseInt(num);
for (var i = num1; i >= 1; i--) {
    for (var j = num1; j >= i; j--) {
        document.write(j);
    }
    document.write("<br>");
}
