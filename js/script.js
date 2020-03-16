// СЛАЙДЕР

var right = document.querySelector(".right__btn");
var left = document.querySelector(".left__btn");
var dot1 = document.querySelector(".dot__1");
var dot2 = document.querySelector(".dot__2");
var slides = document.querySelectorAll(".my__slider");
var dots = document.querySelectorAll(".dot");
var slider = document.querySelector(".slider__list")
var slideIndex = 1;

right.addEventListener("click", function() {
  plusSlides(-1);
})

left.addEventListener("click", function() {
  plusSlides(1);
})

dot1.addEventListener("click", function() {
  currentSlide(1);
})

dot2.addEventListener("click", function() {
  currentSlide(2);
})

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  slider.classList.remove("slider__list-nojs");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("slider__block");  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
  }
  slides[slideIndex-1].classList.add("slider__block"); 
  dots[slideIndex-1].classList.add("active");
}

// СЛАЙДЕР СЕРВИСОВ

var services1 = document.querySelector(".services__1");
var services2 = document.querySelector(".services__2");
var services3 = document.querySelector(".services__3");
var services = document.querySelectorAll(".my__services");
var dotsServices = document.querySelectorAll(".services__btn");
var servicesDescription = document.querySelector(".services__description");
var slideServices = 1;

services1.addEventListener("click", function() {
  currentServices(1);
})

services2.addEventListener("click", function() {
  currentServices(2);
})

services3.addEventListener("click", function() {
  currentServices(3);
})

showServices(slideServices);

function currentServices(n) {
  showServices(slideServices = n);
}

function showServices(n) {
  servicesDescription.classList.remove("slider__list-nojs");
  if (n > services.length) {slideServices = 1}    
  if (n < 1) {slideServices = services.length}
  for (a = 0; a < services.length; a++) {
      services[a].classList.remove("slider__block");  
  }
  for (a = 0; a < dotsServices.length; a++) {
      dotsServices[a].classList.remove("active__btn");
  }
  services[slideServices-1].classList.add("slider__block");  
  dotsServices[slideServices-1].classList.add("active__btn");
}

// ПОПАП ФОРМА

var btn = document.querySelector(".btn__2");
var application = document.querySelector(".application");
var close = application.querySelector(".close__btn");
var form = application.querySelector("form");
var login = application.querySelector("[name=name]");
var email = application.querySelector("[name=email]");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  application.classList.add("modal__show");
  
  if (storage) {
    login.value = storage;
  } else {
    login.focus();
  }
})

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  application.classList.remove("modal__show");
  application.classList.remove("modal__error");
})

form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value) {
  evt.preventDefault();
  application.classList.remove("modal__error");
  application.offsetWidth = application.offsetWidth;
  application.classList.add("modal__error");
  console.log("Нужно вести Имя и Почту!");
  } else {
    if (isStorageSupport)
    localStorage.setItem("login", login.value);
    }
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
  evt.preventDefault();
    if (application.classList.contains("modal__show")) {
    application.classList.remove("modal__show");
    application.classList.remove("modal__error");
    }
  }
});

// ПОПАП КАРТА

var link = document.querySelector(".company__map");
var map = document.querySelector(".big__map");
var close = map.querySelector(".close__btn");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.add("modal__show");
})

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.remove("modal__show");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
  evt.preventDefault();
    if (map.classList.contains("modal__show")) {
    map.classList.remove("modal__show");
    }
  }
});