"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var modal = document.getElementById("feedback-modal");
var button = document.getElementById("feedback__button");
var cross = document.getElementById("feedback-modal__form__cross");
var mainScreenButton = document.getElementById("main-screen__button");
button.addEventListener("click", function () {
  modal.classList.add("feedback-modal__active");
});
mainScreenButton.addEventListener("click", function () {
  modal.classList.add("feedback-modal__active");
});
cross.addEventListener("click", function () {
  modal.classList.remove("feedback-modal__active");
});
modal.addEventListener("click", function (e) {
  var path = e.composedPath();
  if (!path.find(function (node) {
    return node.id === "feedback-modal__form";
  })) modal.classList.remove("feedback-modal__active");
}); //----------------------------------------

var form = document.getElementById("feedback-modal__form");
var nameField = document.getElementById("feedback-modal__name-field");
var phoneField = document.getElementById("feedback-modal__phone-field");
var errorMessageNode = document.getElementById("feedback-modal__error-message");
var PHONE_NUMBER_REGEXP = new RegExp("^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$");

var clearForm = function clearForm() {
  errorMessageNode.innerHTML = "";
  nameField.value = "";
  phoneField.value = "";
  nameField.classList.remove("error");
  phoneField.classList.remove("error");
};

form.addEventListener("submit", function (e) {
  if (!nameField.value || !phoneField.value) {
    if (!nameField.value) nameField.classList.add("error");else nameField.classList.remove("error");
    if (!phoneField.value) phoneField.classList.add("error");else phoneField.classList.remove("error");
    errorMessageNode.innerHTML = "Поля не могут быть пустыми";
    e.preventDefault();
    return;
  }

  if (!PHONE_NUMBER_REGEXP.test(phoneField.value)) {
    errorMessageNode.innerHTML = "Неверный формат номера телефона";
    phoneField.classList.add("error");
    e.preventDefault();
    return;
  }

  clearForm();
  modal.classList.remove("feedback-modal__active");
});
var header = document.getElementById("header-bottom");
document.addEventListener("scroll", function () {
  if (window.pageYOffset > 0) header.classList.add("is-scrolled");else header.classList.remove("is-scrolled");
}); //--------------------------------------------------

var burgerButton = document.getElementById("menu-icon");
var headerMobileMenu = document.getElementById("header__mobile");
var burgerIconUrl = "./images/header/burger-icon.svg";
var crossIconUrl = "./images/header/cross-icon.svg";
burgerButton.addEventListener("click", function () {
  if (headerMobileMenu.classList.contains("is-opened-menu")) {
    headerMobileMenu.classList.remove("is-opened-menu");
    burgerButton.src = burgerIconUrl;
  } else {
    headerMobileMenu.classList.add("is-opened-menu");
    burgerButton.src = crossIconUrl;
  }
});
document.addEventListener("click", function (e) {
  var path = e.composedPath();

  if (!path.find(function (node) {
    return node.id === "header";
  })) {
    headerMobileMenu.classList.remove("is-opened-menu");
    burgerButton.src = burgerIconUrl;
  }
});
var navItemsHTMLCollection = document.getElementsByClassName("nav__item");

var navItems = _toConsumableArray(navItemsHTMLCollection);

navItems.forEach(function (item) {
  item.addEventListener("click", function () {
    headerMobileMenu.classList.remove("is-opened-menu");
    burgerButton.src = burgerIconUrl;
  });
}); //--------------------------------------------------

var services = document.getElementById("services__title");
var workCost = document.getElementById("work-cost__title");
var stocks = document.getElementById("stocks__title");
var works = document.getElementById("works_title");
var contacts = document.getElementById("footer");

var visible = function visible(target) {
  var targetPosition = {
    top: window.pageYOffset + target.getBoundingClientRect().top,
    bottom: window.pageYOffset + target.getBoundingClientRect().bottom
  },
      windowPosition = {
    top: window.pageYOffset,
    bottom: window.pageYOffset + document.documentElement.clientHeight
  };
  return targetPosition.bottom > windowPosition.top && targetPosition.top < windowPosition.bottom;
};

var setActiveNavItem = function setActiveNavItem(href) {
  navItems.forEach(function (item) {
    if (item.dataset.anchor == href) item.classList.add("active-nav-item");else item.classList.remove("active-nav-item");
  });
};

var removeAllActive = function removeAllActive() {
  navItems.forEach(function (item) {
    item.classList.remove("active-nav-item");
  });
};

var ticking = false;
var delay = 100;
window.addEventListener("scroll", function () {
  if (ticking) return;

  if (visible(services)) {
    setActiveNavItem("#services");
  } else if (visible(workCost)) {
    setActiveNavItem("#work-cost");
  } else if (visible(stocks)) {
    setActiveNavItem("#stocks");
  } else if (visible(works)) {
    setActiveNavItem("#works");
  } else if (visible(contacts)) {
    setActiveNavItem("#footer");
  } else {
    removeAllActive();
  }

  ticking = true;
  setTimeout(function () {
    ticking = false;
  }, delay);
});
var itemsHTMLCollection = document.getElementsByClassName("work-cost__item-wrapper");
var modalsHTMLCollection = document.getElementsByClassName("prices-modal");

var items = _toConsumableArray(itemsHTMLCollection);

var modals = _toConsumableArray(modalsHTMLCollection);

var lg = 1199;
items.forEach(function (item, index) {
  item.addEventListener("mouseover", function () {
    if (window.innerWidth > lg) modals[index].classList.add("active");
  });
});
items.forEach(function (item, index) {
  item.addEventListener("mouseout", function () {
    if (window.innerWidth > lg) modals[index].classList.remove("active");
  });
}); // Mobile

items.forEach(function (item, index) {
  item.addEventListener("click", function () {
    if (window.innerWidth <= lg) {
      if (item.classList.contains("active-card")) item.classList.remove("active-card");else item.classList.add("active-card");
      if (modals[index].classList.contains("active")) modals[index].classList.remove("active");else modals[index].classList.add("active");
    }
  });
});
var slider = tns({
  container: ".stocks__slider",
  mode: "carousel",
  controls: false,
  nav: false,
  loop: false,
  autoplayButtonOutput: false,
  speed: 300,
  slideBy: 2,
  preventScrollOnTouch: true,
  preventActionWhenRunning: true,
  autoplayResetOnVisibility: false,
  mouseDrag: true,
  rewind: true,
  gutter: 30,
  responsive: {
    0: {
      items: 1,
      gutter: 20
    },
    768: {
      items: 2,
      gutter: 30
    }
  }
});

var buildTNSMainSlider = function buildTNSMainSlider() {
  return {
    container: ".works__main-slider",
    items: 1,
    autoplay: false,
    controls: false,
    nav: false,
    swipeAngle: false,
    loop: true,
    autoHeight: true,
    speed: 400,
    mode: "gallery",
    slideBy: 1,
    mouseDrag: false,
    touch: false
  };
};

var worksMainSlider = tns(buildTNSMainSlider());

var buildTNSSlider = function buildTNSSlider() {
  return {
    container: "#works__slider",
    items: 5,
    autoplay: false,
    controls: false,
    nav: false,
    swipeAngle: false,
    loop: true,
    // rewind: true,
    // autoHeight: true,
    // autoWidth: true,
    speed: 400,
    mode: "carousel",
    axis: window.innerWidth > 991 ? "vertical" : "horizontal",
    slideBy: 1,
    // gutter: 12,
    // viewportMax: 5,
    mouseDrag: false,
    center: true,
    touch: false,
    responsive: {
      0: {
        gutter: 4 // axis: "horizontal",

      },
      992: {
        gutter: 12
      }
    }
  };
};

var worksSlider = tns(buildTNSSlider());
var mainSlider = document.getElementById("works__main-slider");
var button_1 = document.getElementById("works__slider__button-1");
var button_2 = document.getElementById("works__slider__button-2");
button_1.addEventListener("click", function () {
  worksMainSlider.goTo("prev");
  worksSlider.goTo("prev");
});
button_2.addEventListener("click", function () {
  worksMainSlider.goTo("next");
  worksSlider.goTo("next");
});
mainSlider.addEventListener("click", function () {
  worksMainSlider.goTo("next");
  worksSlider.goTo("next");
});
var isBelowMd = window.innerWidth <= 991;
window.addEventListener("resize", function () {
  if (window.innerWidth <= 991 && !isBelowMd) {
    worksSlider.destroy();
    worksSlider = tns(buildTNSSlider());
    worksMainSlider.goTo("first");
    isBelowMd = !isBelowMd;
  }

  if (window.innerWidth > 991 && isBelowMd) {
    worksSlider.destroy();
    worksSlider = tns(buildTNSSlider());
    worksMainSlider.goTo("first");
    isBelowMd = !isBelowMd;
  }
});
var loupeButton = document.getElementById("works__loupe");
var imageModal = document.getElementById("big-image-modal");
loupeButton.addEventListener("click", function () {
  var info = worksMainSlider.getInfo();
  imageModal.innerHTML = "";
  imageModal.classList.add("big-image-modal__active");
  var img = info.slideItems[info.index].children[0].cloneNode();
  img.id = "big-image";
  imageModal.append(img);
});
imageModal.addEventListener("click", function (e) {
  var path = e.composedPath();

  if (!path.find(function (node) {
    return node.id === "big-image";
  })) {
    imageModal.classList.remove("big-image-modal__active"); // imageModal.innerHTML = "";
  }
});