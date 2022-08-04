const iconMenu  = document.querySelector('.menu__icon');
if (iconMenu) {
    const navBoddy = document.querySelector('.nav');
    iconMenu.addEventListener("click", function (e) {
        iconMenu.classList.toggle('_active');
        navBoddy.classList.toggle('_active');
    });
}

const start = document.getElementById('start');
if (start) {
    start.addEventListener("click", function (e) {
        start.classList.toggle('_start');
    });
}


let modalSign = document.getElementById('signModal');
let btnSign = document.getElementById("signIn");
let close = document.getElementsByClassName("close")[0 ];

btnSign.onclick = function (){
    modalSign.style.display = "block";
}

close.onclick = function () {
    modalSign.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modalSign) {
        modalSign.style.display = "none";
    }
}