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

// var next = document.querySelector(".next");
// var prev = document.querySelector(".prev");
// var dot1 = document.querySelector(".dot__1");
// var dot2 = document.querySelector(".dot__2");

// next.addEventListener ("click", function() {
//   plusSlides(1);
// })
// prev.addEventListener ("click", function() {
//   plusSlides(-1);
// })
// dot1.addEventListener ("click", function() {
//   currentSlide(1);
// })
// dot2.addEventListener ("click", function() {
//   currentSlide(2);
// })

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

// ПОПАПЧИКИ