// Sub Header

const sub = document.getElementById("sub");
const btn = document
  .getElementById("btn-x")
  .addEventListener("click", function () {
    sub.classList.toggle("none-sub");
  });

// Navbar

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 80) {
    navbar.classList.add("active-navbar");
  } else {
    navbar.classList.remove("active-navbar");
  }
});

// hidden menu

const hiddenBtn = document.getElementById("hidden-btn");
const menu = document.getElementById("hidden-menu");
const button = document.getElementById("button");

hiddenBtn.addEventListener("click", function () {
  menu.classList.toggle("active-menu");
});

button.addEventListener("click", function () {
  menu.classList.toggle("active-menu");
});

// Home Pageda Elementlar qo`shish uchun

const main = document.querySelector(".destination-container");

console.log(main);

class DestinationsText {
  constructor(subTitle, mainTitle) {
    this.subTitle = subTitle;
    this.mainTitle = mainTitle;
  }

  render() {
    const textContainer = document.createElement("div");
    textContainer.className = "destination-text";

    textContainer.innerHTML = `<h4>${this.subTitle}</h4> <h1>${this.mainTitle}</h1>`;

    return textContainer;
  }
}

const textlari = [
  new DestinationsText("SIMPLY AMAZING PLACES", "Popular Destinations"),
];

main.appendChild(textlari[0].render());

// Rasm

const imgBox = document.querySelector(".destination-img");

class ImagesContainer {
  constructor(src, text1, text2, text3) {
    this.src = src;
    this.text1 = text1;
    this.text2 = text2;
    this.text3 = text3;
  }

  render() {
    const imgItem = document.createElement("div");
    imgItem.className = "images-item";

    imgItem.innerHTML = `
           <div class="img-box">
                <img
                  src="${this.src}"
                  alt=""
                />
              </div>
              <div class="text-box">
                <h2>${this.text1}</h2>
                <p>${this.text2}</p>
                <br />
                <h5>${this.text3}</h5>
              </div> `;

    return imgItem;
  }
}

const rasmlar = [
  new ImagesContainer(
    "/Colorlib Tour Project/assets/Images/destination_1.jpg",
    "Bali",
    "Nulla pretium tincidunt felis, nec.",
    "From 679$"
  ),
  new ImagesContainer(
    "/Colorlib Tour Project/assets/Images/destination_2.jpg",
    "Indonesia",
    "Nulla pretium tincidunt felis, nec.",
    "From 679$"
  ),
  new ImagesContainer(
    "/Colorlib Tour Project/assets/Images/destination_3.jpg",
    "San Fransisco",
    "Nulla pretium tincidunt felis, nec.",
    "From 679$"
  ),
  new ImagesContainer(
    "/Colorlib Tour Project/assets/Images/destination_4.jpg",
    "Paris",
    "Nulla pretium tincidunt felis, nec.",
    "From 679$"
  ),
  new ImagesContainer(
    "/Colorlib Tour Project/assets/Images/destination_5.jpg",
    "Phi Phi Island",
    "Nulla pretium tincidunt felis, nec.",
    "From 679$"
  ),
  new ImagesContainer(
    "/Colorlib Tour Project/assets/Images/destination_6.jpg",
    "Mykonos",
    "Nulla pretium tincidunt felis, nec.",
    "From 679$"
  ),
];

rasmlar.forEach((rasm) => {
  imgBox.appendChild(rasm.render());
});

// Konteynerni tashqarida tanlab olamiz
const testimonialsContainer = document.querySelector(".testimonials-container");

class Testimonial {
  constructor(subTitle, mainTitle, text, clientNomi) {
    this.subTitle = subTitle;
    this.mainTitle = mainTitle;
    this.text = text;
    this.clientNomi = clientNomi;
  }

  render() {
    const mainTextDiv = document.createElement("div");
    mainTextDiv.className = "main-text";

    mainTextDiv.innerHTML = `
        <div class="header-top">
            <h4>${this.subTitle}</h4>
            <h1>${this.mainTitle}</h1>
        </div>
        <div class="header-mid">
          <h2>${this.text}</h2>
        </div>
        <div class="header-end">
          <p>${this.clientNomi}, Client</p>
        </div>
    `;

    return mainTextDiv;
  }
}

const testimonialItem = [
  new Testimonial(
    "SIMPLY AMAZING PLACES",
    "Testimonials",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lobortis dolor. Cras placerat lectus a posuere aliquet. Curabitur quis vehicula odio.",
    "John Turner"
  ),
];

testimonialsContainer.appendChild(testimonialItem[0].render());

// pictur container uchun

const pictureContainer = document.querySelector(".picture-container");

const mainPictureContainer = document.createElement("div");
mainPictureContainer.className = "main-picture-container";

// Chap tomon
class LeftItem {
  constructor(date, month, title, category, description, src) {
    this.date = date;
    this.month = month;
    this.title = title;
    this.category = category;
    this.description = description;
    this.src = src;
  }

  render() {
    const itemDiv = document.createElement("div");
    itemDiv.className = "left-side-items";
    itemDiv.innerHTML = `
            <div class="picture-box" style="background-image: url('${this.src}');"></div>
            <div class="inner-content">
                <div class="date">${this.date}<span>${this.month}</span></div>
                <h3>${this.title}</h3>
                <p>${this.category}</p>
                <p class="info-box">${this.description}</p>
            </div>
        `;
    return itemDiv;
  }
}

// O`ng tomon
class RightItem {
  constructor(title, subtitle, src) {
    this.title = title;
    this.subtitle = subtitle;
    this.src = src;
  }

  render() {
    const rightPictureDiv = document.createElement("div");
    rightPictureDiv.className = "right-picture";
    rightPictureDiv.innerHTML = `
            <div class="sale-box">
                <div class="background-image" style="background-image: url('${this.src}');"></div>
                <div class="sale-text">
                    <h2>${this.title}</h2>
                    <p>${this.subtitle}</p>
                </div>
            </div>
        `;
    return rightPictureDiv;
  }
}

const leftItemsData = [
  new LeftItem(
    "02",
    "JUNE",
    "Best tips to travel light",
    "LIFESTYLE & TRAVEL",
    "Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa. Tempor massa et laoreet.",
    "/Colorlib Tour Project/assets/Images/news_1.jpg"
  ),
  new LeftItem(
    "01",
    "JUNE",
    "Best tips to travel light",
    "LIFESTYLE & TRAVEL",
    "Tempor massa et laoreet malesuada. Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo.",
    "/Colorlib Tour Project/assets/Images/news_2.jpg"
  ),
  new LeftItem(
    "29",
    "MAY",
    "Best tips to travel light",
    "LIFESTYLE & TRAVEL",
    "Vivamus massa. Tempor massa et laoreet malesuada. Aliquam nulla nisl, accumsan sit amet mattis.",
    "/Colorlib Tour Project/assets/Images/news_3.jpg"
  ),
];

const rightItemData = new RightItem(
  "Get a 20% Discount",
  "Buy Your Vacation Online Now",
  "/Colorlib Tour Project/assets/Images/travello.jpg"
);

const leftPictureDiv = document.createElement("div");
leftPictureDiv.className = "left-picture";

leftItemsData.forEach((item) => {
  leftPictureDiv.appendChild(item.render());
});

const rightPictureDiv = rightItemData.render();

mainPictureContainer.appendChild(leftPictureDiv);
mainPictureContainer.appendChild(rightPictureDiv);

pictureContainer.appendChild(mainPictureContainer);
