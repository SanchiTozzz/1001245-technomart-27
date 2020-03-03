var buy = document.querySelectorAll(".buy");
var notification = document.querySelector(".notification");
var close = notification.querySelector(".notification__btn");
var resume = notification.querySelector(".white__link");

for (i = 0; i < buy.length; i++) {
  buy[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    notification.classList.add("modal__show");
  })  
}

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  notification.classList.remove("modal__show");
})

resume.addEventListener("click", function (evt) {
  evt.preventDefault();
  notification.classList.remove("modal__show");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
  evt.preventDefault();
    if (notification.classList.contains("modal__show")) {
    notification.classList.remove("modal__show");
    }
  }
});