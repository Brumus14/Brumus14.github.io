function imgEnlarge(element) {
  element.setAttribute("id", "enlarged");

  window.addEventListener("click", function (e) {
    if (element.contains(e.target)) {
    } else {
      element.removeAttribute("id");
    }
  });
}
