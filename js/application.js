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