// Создать таблицу умножения от числа которое введет пользователь.

var multTable = prompt("Ведіть число:");
multTableNum = parseInt(multTable);

for (var i = multTableNum; i <= multTableNum; i++) {
    for (var j = 1; j < 10; j++) {
        if (multTableNum > 0 && multTableNum < 10) {
            document.write(i + " x " + j + " = " + (i * j) + "<br \/>");
        } else {
            alert('Undefined')
        }
    }
}





