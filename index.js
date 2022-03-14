let header = document.querySelector("#page-header");
header.style.textAlign = "left";

let dogImages = document.querySelectorAll(".dog-image");
for (let i = 0; i < dogImages.length; i++) {
  dogImages[i].style.borderRadius = "50px";
  dogImages[i].style.transform = "rotateX(180deg)";
}

let names = document.querySelectorAll(".dog-name");
for (let i = 0; i < names.length; i++) {
  names[i].style.textAlign = "left";
}

let footerText = document.querySelectorAll(".dog-description");
for (let i = 0; i < footerText.length; i++) {
  footerText[i].style.color = "Purple";
}
