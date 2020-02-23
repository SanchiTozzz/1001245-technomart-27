// Слайдер

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Слайдер преимуществ

var slideServices = 1;
showServices(slideServices);

function currentServices(n) {
  showServices(slideServices = n);
}

function showServices(n) {
  var a;
  var services = document.getElementsByClassName("myServices");
  var dotsServices = document.getElementsByClassName("dotServices");
  if (n > services.length) {slideServices = 1}    
  if (n < 1) {slideServices = services.length}
  for (a = 0; a < services.length; a++) {
      services[a].style.display = "none";  
  }
  for (a = 0; a < dotsServices.length; a++) {
      dotsServices[a].className = dotsServices[a].className.replace(" active__btn", "");
  }
  services[slideServices-1].style.display = "block";  
  dotsServices[slideServices-1].className += " active__btn";
}

// Карта

var modalMap = document.getElementById("myModalMap");

var btnMap = document.getElementById("myBtnMap");

var closeMap = document.getElementById("closeMap");

btnMap.onclick = function() {
  modalMap.style.display = "block";
}

closeMap.onclick = function() {
  modalMap.style.display = "none";
}

// Форма заявки

var modalApplication = document.getElementById("myApplication");

var btn = document.getElementById("myBtnAppl");

var closeAppl = document.getElementById("closeAppl");

btn.onclick = function() {
  modalApplication.style.display = "block";
}

closeAppl.onclick = function() {
  modalApplication.style.display = "none";
}

// function openForm() {
//   document.getElementsByClassName("application").style.display = "block";
// }

// function closeSection() {
//   document.getElementById("application").style.display = "none";
// }