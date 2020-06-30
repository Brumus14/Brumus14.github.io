var imgEnlarged = false;
let photosRendered = 0;
let photosNum = document.querySelectorAll(".photo").length;
let photosLoaded = false;
var loadingPage = document.querySelector(".loading-page");

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
  console.log("image rendered");

  photosRendered += 1;

  if (photosRendered == photosNum) {
    photosLoaded = true;
    wait(1000);
    loadingPage.style.display = "none";
  }
}

function startRender() {
  requestAnimationFrame(rendered);
}

function loaded() {
  requestAnimationFrame(startRender);
}
