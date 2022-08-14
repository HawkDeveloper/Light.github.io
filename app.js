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

// Modals
let mainBtn = document.querySelectorAll(".btn");
let wrapper = document.querySelector(".wrapper");
let close = document.querySelectorAll(".close");
let signInbtn = document.querySelectorAll(".form-btn");
let addBtn = document.querySelectorAll(".adding-card__form-btn");


function re() {
  mainBtn.forEach((elem) => {
    elem.addEventListener("click", () => {
      let dataN = elem.dataset.btn;
      mod(dataN);
    });
  });
}
re();
function mod(dataN) {
  let modal = document.querySelector('.js-modal[data-btn="' + `${dataN}` + '"]');
  modal.classList.add("modal-window_active");
  wrapper.classList.add("wrapper-active");
  closs(modal);
}

function closs(modal) {
  window.addEventListener("click", (e) => {
    if (e.target == wrapper) {
      modal.classList.remove("modal-window_active");
      wrapper.classList.remove("wrapper-active");
    }
  });
  close.forEach((item) => {
    item.addEventListener("click", () => {
      modal.classList.remove("modal-window_active");
      wrapper.classList.remove("wrapper-active");
    });
  });

  addBtn.forEach((item) => {
      item.addEventListener("click", () => {
        modal.classList.remove("modal-window_active");
        wrapper.classList.remove("wrapper-active");
      });
    });

   signInbtn.forEach((item) => {
      item.addEventListener("click", () => {
        modal.classList.remove("modal-window_active");
        wrapper.classList.remove("wrapper-active");
      });
    });
  
  document.getElementById('submit').onclick = myClick;

  function myClick(){
      let formEmail = document.querySelector('.form-email').value;
      console.log(formEmail);
      let formPassword = document.querySelector('.form-password').value;
      console.log(formPassword);
      let avatar = document.querySelector('.dropbtn');
      let btnSign = document.getElementById("btnSign");


      avatar.style.display = "block";
      btnSign.style.display = "none";
  } 
}
// modals

document.getElementById('add').onclick = cardName;

function cardName(){
    let cardName = document.querySelector('.adding-card__form-input').value;
    console.log(cardName);
    modalSign2.style.display = "none";
} 


let exp = document.getElementById('exp')

exp.onclick = function(){
    console.log('click')
};

let getIt = document.getElementById('getIt')

getIt.onclick = function(){
    console.log('click')
};

let star = document.getElementById('btn')

btn.onclick = function(){
    console.log('click')
};


document.getElementById('email').onclick = email;

function email(){
    let formInput = document.querySelector('.input').value;
    console.log(formInput);
} 


// Drop Down Avatar 
document.getElementById('dropbtn').onclick = myFunction;
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content__av");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//   Функція виходу з профіля
  let logOut = document.getElementById('logOut');

  logOut.onclick = function(){
    dropbtn.style.display = "none";
    btnSign.style.display = "block"; 
  }





 