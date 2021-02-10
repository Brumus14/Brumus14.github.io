// Variables
let imgEnlarged = false;
let photosRendered = 0;
let photosNum = document.querySelectorAll(".photo").length;
let photosLoaded = false;

// Element Variables
let loadingPage = document.querySelector(".loading-page");
let navBurgerElement = document.querySelector(".nav-burger");
let burgerNavCloseElement = document.querySelector(".burger-nav-close");
let navItemsElement = document.querySelector(".nav-items");
let bodyElement = document.querySelector("body");

// Eventlisteners
navBurgerElement.addEventListener("click", openBurgerNavigation);
burgerNavCloseElement.addEventListener("click", closeBurgerNavigation);

//Functions
function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

function imgEnlarge(element) {
  var clonedImg = element.cloneNode(true);
  document.querySelector(".photos").appendChild(clonedImg);
  clonedImg.setAttribute("id", "enlarged");

  window.addEventListener("click", function (click) {
    if (clonedImg.contains(click.target) || element.contains(click.target)) {
    } else {
      clonedImg.remove();
    }
  });
}

function rendered() {
  photosRendered += 1;

  if (photosRendered == photosNum) {
    photosLoaded = true;
    wait(800);
    loadingPage.style.display = "none";
  }
}

function startRender() {
  requestAnimationFrame(rendered);
}

function loaded() {
  requestAnimationFrame(startRender);
}

function openBurgerNavigation() {
  navItemsElement.style.cssText =
    "width: 100vw; height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: space-evenly; background-color: white; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 99;";
  bodyElement.style.overflow = "hidden";
  burgerNavCloseElement.style.display = "block";
}

function closeBurgerNavigation() {
  navItemsElement.style.top = "-100%";
  bodyElement.style.overflow = "visible";
  setTimeout(function () {
    burgerNavCloseElement.style.display = "none";
    navItemsElement.removeAttribute("style");
  }, 600);
}
