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
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(resizePhoto, 600);
  imageEnlargeToggler();
});

//Functions
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

  clonedImg.children[0].removeAttribute("style");
}

function rendered() {
  photosRendered += 1;

  if (photosRendered == photosNum) {
    photosLoaded = true;
    setTimeout(() => {
      loadingPage.style.display = "none";
      document.querySelector("body").style.overflow = "visible";
    }, 800);
  } else {
    document.querySelector("body").style.overflow = "hidden";
  }
}

function startRender() {
  requestAnimationFrame(rendered);
}

function loaded() {
  requestAnimationFrame(startRender);
}

function resizePhoto() {
  photoElements = document.querySelectorAll(".photo");
  photoElements.forEach((photo) => {
    let photoWidth = 0;
    photoWidth = photo.clientWidth;
    let photoHeight = 0;
    photoHeight = photo.clientHeight;
    if (photoWidth > photoHeight) {
      photo.style.height = "100%";
    } else if (photoWidth < photoHeight) {
      photo.style.width = "100%";
    }

    if (Math.floor(photoWidth / 100) * 100 == Math.floor(photoHeight / 100) * 100) {
      photo.style.transform = "scale(1.2)";
    }
  });
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

function imageEnlargeToggler() {
  if (screen.width <= 1260) {
    photoButtonElements = document.querySelectorAll(".photo-btn");
    photoButtonElements.forEach((photoButton) => {
      photoButton.removeAttribute("onclick");
    });
  }
}
