var skills = [

    {name: "HTML5", level: 8},

    {name: "CSS3", level: 5},

    {name: "JavaScript", level: 10},

    {name: "ReactJS", level: 8},

    {name: "AngularJS", level: 8}

];


function createSkillsBlock(skills) {

    var ul = document.createElement('ul');

    skills.forEach(function (item) {

        li = document.createElement('li');

        li.innerHTML = "<p><strong>" + item.name + "</strong>" + ", " + item.level + "</p>";

        ul.appendChild(li);

    });

    document.getElementsByClassName('skills')[0].appendChild(ul);

}


createSkillsBlock(skills);