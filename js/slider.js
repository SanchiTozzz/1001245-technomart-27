var right = document.querySelector(".right__btn");
var left = document.querySelector(".left__btn");
var dot1 = document.querySelector(".dot__1");
var dot2 = document.querySelector(".dot__2");
var slides = document.querySelectorAll(".my__slider");
var dots = document.querySelectorAll(".dot");
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