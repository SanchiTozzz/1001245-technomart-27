var services1 = document.querySelector(".services__1");
var services2 = document.querySelector(".services__2");
var services3 = document.querySelector(".services__3");
var services = document.querySelectorAll(".my__services");
var dotsServices = document.querySelectorAll(".services__btn");
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