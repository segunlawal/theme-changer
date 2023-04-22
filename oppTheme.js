(function () {
  const html = document.querySelector("html");
  html.style.filter = "invert(0) hue-rotate(0deg)";

  const multimedia = document.querySelectorAll("img, picture, video");
  multimedia.forEach((item) => {
    item.style.filter = "invert(0) hue-rotate(0deg)";
  });
})();
