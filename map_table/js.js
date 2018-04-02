window.onload = function () {

    var users = [
        {
            name: 'dima',
            age: 24,
            surname: 'ivchenko'
        },
        {
            name: 'kate',
            age: 23,
            surname: 'sparrow'
        },
        {
            name: 'kostia',
            age: 28,
            surname: 'kalinchuk'
        },
        {
            name: 'kate',
            age: 27,
            surname: 'stupak'
        },
        {
            name: 'alex',
            age: 26,
            surname: 'mikhaylenko'
        },
        {
            name: 'andy',
            age: 28,
            surname: 'meged'
        },
        {
            name: 'maxim',
            age: 29,
            surname: 'vodopyn'
        },
        {
            name: 'maria',
            age: 23,
            surname: 'panasyk'
        },
        {
            name: 'oksana',
            age: 30,
            surname: 'semotyk'
        },
        {
            name: 'viktoria',
            age: 25,
            surname: 'moroz'
        }
    ];

    var table = document.createElement('table');
    table.classList.add('table');
    var head = '<tr><td>Name</td><td>Age</td><td>Surname</td></tr>';
    table.innerHTML = head;

    var maping = function (x) {
        var tr = document.createElement('tr');
        for (var a in x) {
            var td = document.createElement('td');
            td.innerText = x[a];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    };

    users.map(maping);

    document.body.appendChild(table);

    main.onkeyup = function (e) {
        var arr = users.filter(function (x) {
            var temp = x.name.split(e.target.value.toLowerCase());
            if (temp.length - 1) {
                return true;
            }
            temp = x.age.toString().split(e.target.value.toLowerCase());
            if (temp.length - 1) {
                return true;
            }
            temp = x.surname.split(e.target.value.toLowerCase());
            return temp.length - 1;
        });
        table.innerHTML = head;
        arr.map(maping);
    }
};





