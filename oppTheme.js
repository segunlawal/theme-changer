(function () {
  document.querySelector("html").style.filter = "invert(0) hue-rotate(0deg)";

  let multimedia = document.querySelectorAll("img, picture, video");

  multimedia.forEach((eachItem) => {
    eachItem.style.filter = "invert(0) hue-rotate(0deg)";
  });
})();
