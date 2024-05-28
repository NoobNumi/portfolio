var ul = document.querySelector('#dynamicList');
var data = [
    { icon: 'fa-brands fa-html5', color: '#ff5722', text: 'HTML5' },
    { icon: 'fa-brands fa-css3-alt', color: '#2965f1', text: 'CSS3' },
    { icon: 'fa-brands fa-js', color: '#f7df1e', text: 'Javascript' },
    { icon: 'lni lni-mysql', color: '#00546b', text: 'MySQL' },
    { icon: 'fa-brands fa-bootstrap', color: '#563d7d', text: 'Bootstrap' },
    { icon: 'lni lni-tailwindcss', color: '#0ea5e9', text: 'Tailwind' },
    { icon: 'fa-brands fa-git-alt', color: '#f05033', text: 'Git' },
    { icon: 'lni lni-php', color: '#617cbe', text: 'PHP' },
    { icon: 'lni lni-vuejs', color: '#3FB27F', text: 'Vue JS' },
];
data.forEach(function (item) {
    var li = document.createElement('li');
    li.className = 'd-flex flex-column align-items-center justify-content-center';

    var icon;
    if (item.isImage) {
        icon = document.createElement('img');
        icon.src = item.icon;
        icon.height = 30;
    } else {
        icon = document.createElement('i');
        icon.className = item.icon + ' fs-1';
    }
    icon.style.color = item.color;

    // Create the text element
    var p = document.createElement('p');
    p.className = 'text-primary text-center';
    p.textContent = item.text;

    li.appendChild(icon);
    li.appendChild(p);

    // Append the li to the ul
    ul.appendChild(li);
});