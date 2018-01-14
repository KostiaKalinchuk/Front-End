var obj = [
    {name: "HTML5", level: 8},
    {name: "CSS3", level: 5},
    {name: "JavaScript", level: 10},
    {name: "ReactJS", level: 8},
    {name: "AngularJS", level: 8}
];

function skills() {
    for (key in obj) {
        if (item = 'name') {
            document.write(obj[key][item] + '<br>')
        }
    }
}

function level() {
    for (key in obj) {
        if (item = 'level') {
            document.write(': ' + obj[key][item] + '<br>')
        }
    }
}