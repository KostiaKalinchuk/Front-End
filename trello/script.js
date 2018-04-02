var list = document.querySelector('ul');
var todos;

function toLocal() {
    todos = list.innerHTML;
    localStorage.setItem('todos', todos);
}

list.addEventListener('click', function (ev) {
    if (ev.target.tagName === "SPAN") {
        var div = ev.target.parentNode;
        div.remove();
        toLocal();
    }
}, false);

function newElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('toDoEl').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue == "") {
        alert("Введіть назву для цієї картки");
    } else {
        document.getElementById('list').appendChild(li);
    }
    document.getElementById('toDoEl').value = "";
    var span = document.createElement('SPAN');
    var txt = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    toLocal();
}

if (localStorage.getItem('todos')) {
    list.innerHTML = localStorage.getItem('todos');
}

// Drag and Drop

