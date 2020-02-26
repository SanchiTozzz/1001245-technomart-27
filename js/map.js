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