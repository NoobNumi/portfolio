function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        if (c === "" || x[i].className.indexOf(c) > -1) {
            $(x[i]).show();
            addClass(x[i], "animate__animated animate__fadeInUp");
        } else {
            $(x[i]).hide();
            removeClass(x[i], "animate__animated animate__fadeInUp");
        }
    }
    swiper.update();
}


function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

window.onload = function () {
    var tabs = document.getElementsByClassName("tab");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function () {
            var current = document.getElementsByClassName('filter-active');
            current[0].className = current[0].className.replace(' filter-active', '');
            this.className += ' filter-active';
        });
    }
}
