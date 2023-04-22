(function () {
  const html = document.querySelector("html");
  html.style.filter = "invert(1) hue-rotate(180deg)";

  const multimedia = document.querySelectorAll("img, picture, video");
  multimedia.forEach((item) => {
    item.style.filter = "invert(1) hue-rotate(180deg)";
  });
})();
