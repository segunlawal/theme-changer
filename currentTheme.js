(function () {
  document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";

  let multimedia = document.querySelectorAll("img, picture, video");

  multimedia.forEach((eachItem) => {
    eachItem.style.filter = "invert(1) hue-rotate(180deg)";
  });
})();
