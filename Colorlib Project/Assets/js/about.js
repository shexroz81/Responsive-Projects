// Js For About

const hideMenu = document.getElementById("menu");
const closeMenu = document.getElementById("closed-menu");
const btnMenu = document.getElementById("btn-menu");

btnMenu.addEventListener("click", function () {
  hideMenu.classList.toggle("opened-menu");
  closeMenu.classList.toggle("active-menu");
  closeMenu.classList.toggle("forClose");
});

// x-menu

const main = document.getElementById("none-sub");
const btn = document.getElementById("btn-x");

btn.addEventListener("click", function () {
  main.classList.toggle("none-active");
});

// Second Carousel and Itemlari

class secondItems {
  constructor(text, src, text1, text2) {
    this.text = text;
    this.src = src;
    this.text1 = text1;
    this.text2 = text2;
  }

  create() {
    const aboutItem = document.createElement("div");
    aboutItem.classList.add("carousel-item-about");

    const p = document.createElement("p");
    p.textContent = this.text;

    const imgAbout = document.createElement("div");
    imgAbout.classList.add("img-about");

    const image = document.createElement("img");
    image.src = this.src;

    const inner = document.createElement("div");
    inner.classList.add("inner-text");

    const h4 = document.createElement("h4");
    h4.textContent = this.text1;

    const h5 = document.createElement("h5");
    h5.textContent = this.text2;

    inner.appendChild(h4);
    inner.appendChild(h5);

    imgAbout.appendChild(image);
    imgAbout.appendChild(inner);

    aboutItem.appendChild(p);
    aboutItem.appendChild(imgAbout);

    return aboutItem;
  }
}

const carouselItems = [
  new secondItems(
    " We recently launched a new website for a Vital Client and wanted to share some",
    "../Images/klent2.jpg",
    "Krista Attorn",
    "Web Designer"
  ),
  new secondItems(
    " We recently launched a new website for a Vital Client and wanted to share some",
    "../Images/ta-1.jpg.webp",
    "Krista Attorn",
    "Web Designer"
  ),
  new secondItems(
    " We recently launched a new website for a Vital Client and wanted to share some",
    "../Images/ta-1.jpg.webp",
    "Krista Attorn",
    "Web Designer"
  ),
  new secondItems(
    " We recently launched a new website for a Vital Client and wanted to share some",
    "../Images/ta-1.jpg.webp",
    "Krista Attorn",
    "Web Designer"
  ),
  new secondItems(
    " We recently launched a new website for a Vital Client and wanted to share some",
    "../Images/ta-1.jpg.webp",
    "Krista Attorn",
    "Web Designer"
  ),
  new secondItems(
    " We recently launched a new website for a Vital Client and wanted to share some",
    "../Images/ta-1.jpg.webp",
    "Krista Attorn",
    "Web Designer"
  ),
  new secondItems(
    " We recently launched a new website for a Vital Client and wanted to share some",
    "../Images/ta-1.jpg.webp",
    "Krista Attorn",
    "Web Designer"
  ),
  new secondItems(
    " We recently launched a new website for a Vital Client and wanted to share some",
    "../Images/ta-1.jpg.webp",
    "Krista Attorn",
    "Web Designer"
  ),
  new secondItems(
    " We recently launched a new website for a Vital Client and wanted to share some",
    "../Images/ta-1.jpg.webp",
    "Krista Attorn",
    "Web Designer"
  ),
];

const trackMain = document.querySelector(".carousel-track-about");

carouselItems.forEach((carousel) => trackMain.appendChild(carousel.create()));

let trackMainAbout = document.querySelector(".carousel-track-about");
let cardss = document.querySelectorAll(".carousel-item-about");

let index = 0;

function moveCarousel() {
  index++;
  let cardWidth = cardss[0].offsetWidth + 20; // 20px gap

  if (index > cardss.length - 3) {
    index = 0;
  }

  trackMainAbout.style.transform = `translateX(-${index * cardWidth}px)`;
}

setInterval(moveCarousel, 2500);
