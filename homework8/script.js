// Максимальне значення масива:
var maxNum = [10, 52, 35, 40, 5, 6, 0];

for (var i = 0; i < maxNum.length; i++) {
    if (maxNum[i] > maxNum[0]) {
        maxNum[0] = maxNum[i];
    }

}
document.write('Максимальне значення масива: ' + maxNum[0] + '<br>');

// Мінімальне значення масива:
var minNum = [10, 52, 35, 40, 58, 6, -10];

for (var i = 0; i < minNum.length; i++) {
    if (minNum[i] < minNum[0]) {
        minNum[0] = minNum[i];
    }

}
document.write('Мінімальне значення масива: ' + minNum[0] + '<br>');

//Загальна сума елементів масиву
var arr = [10, 52, 35, 40, 58, 6, -10];

function arraySum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    document.write(sum);
}

document.write('Загальна сума елементів масиву: ');
arraySum(arr);
document.write('<br>');

//Непарні
var arr2 = [12, 52, 35, 40, 58, 7];

function arrayAr(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
        arithmetic = sum / array.length;
    }
    document.write(arithmetic);
}

document.write('Cереднє арифметичне: ');
arrayAr(arr2);
document.write('<br>');










var arr = [1, 3, 4, 12, 4, 7];
var f_oddeven = function(arr) {
    var arr1 = []; // массив для нечетных

    for (var i in arr) {

            /* проверка на четность */
            if (arr[i] % 2 == 0) {
                continue;
            } else {
                arr1.push(arr[i]);
            }
        }

    return [arr1];
}
document.write(f_oddeven(arr));