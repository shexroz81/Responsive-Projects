const main = document.getElementById("none-sub");
const btn = document.getElementById("btn-x");

btn.addEventListener("click", function () {
  main.classList.toggle("none-active");
});

// Menu

const hideMenu = document.getElementById("menu");
const closeMenu = document.getElementById("closed-menu");
const btnMenu = document.getElementById("btn-menu");

btnMenu.addEventListener("click", function () {
  hideMenu.classList.toggle("opened-menu");
  closeMenu.classList.toggle("active-menu");
  closeMenu.classList.toggle("forClose");
});

// Carousel

const container = document.querySelector(".hero-container");

const slides = [
  { p: "FOR WEBSITE AND VIDEO EDITING", h1: "VIDEOGRAPHER PORTFOLIO" },
  { p: "CREATIVE WORKS", h1: "PHOTO & VIDEO ART" },
  { p: "PROFESSIONAL TEAM", h1: "FILMMAKING STUDIO" },
];

let indexx = 0;

function rotate() {
  container.classList.remove("animate");

  setTimeout(() => {
    container.querySelector(".hero-text").textContent = slides[indexx].p;
    container.querySelector(".hero-title").textContent = slides[indexx].h1;

    container.classList.add("animate");
    indexx = (indexx + 1) % slides.length;
  }, 200);
}

setInterval(rotate, 2000);
rotate();

// Icon js

class serviceItem {
  constructor(icon, title, text) {
    this.icon = icon;
    this.title = title;
    this.text = text;
  }

  render() {
    const mainItem = document.createElement("div");
    mainItem.className = "right-part-item";

    const iconEl = document.createElement("i");
    iconEl.className = this.icon;
    const titleEl = document.createElement("h2");
    titleEl.textContent = this.title;

    const textEl = document.createElement("p");
    textEl.textContent = this.text;

    mainItem.appendChild(iconEl);
    mainItem.appendChild(titleEl);
    mainItem.appendChild(textEl);

    return mainItem;
  }
}

const services = [
  new serviceItem(
    "fa-solid fa-film",
    "Video distribution",
    "Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches."
  ),
  new serviceItem(
    "fa-solid fa-wave-square",
    "Motion graphics",
    "Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches."
  ),
  new serviceItem(
    "fa-solid fa-compact-disc",
    "Video hosting",
    "Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches."
  ),
  new serviceItem(
    "fa-solid fa-file-lines",
    "Scriptwriting",
    "Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches."
  ),
];

const right = document.querySelector(".rightPart");

services.forEach((service) => right.appendChild(service.render()));

// Carousel Main

let track = document.querySelector(".carousel-track");
let cards = document.querySelectorAll(".carousel-item");

let index = 0;

function moveCarousel() {
  index++;
  let cardWidth = cards[0].offsetWidth + 20; // 20px gap

  if (index > cards.length - 3) {
    index = 0;
  }

  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

setInterval(moveCarousel, 2500);
