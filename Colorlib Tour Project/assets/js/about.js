// sub header

const sub = document.getElementById("sub");
const btn = document.getElementById("btn-x");
btn.addEventListener("click", function () {
  sub.classList.toggle("none-sub");
});

//   navbar

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 80) {
    navbar.classList.add("active-navbar");
  } else {
    navbar.classList.remove("active-navbar");
  }
});

// Hidden Menu

const hiddenBtn = document.getElementById("hidden-btn");
const menu = document.getElementById("hidden-menu");
const button = document.getElementById("button");

hiddenBtn.addEventListener("click", function () {
  menu.classList.toggle("active-menu");
});

button.addEventListener("click", function () {
  menu.classList.toggle("active-menu");
});

// Elemet qo`shish About Page uchun

const heroContainer = document.querySelector(".hero-container");

class aboutItem {
  constructor(title, sarlavhasi) {
    this.title = title;
    this.sarlavhasi = sarlavhasi;
  }

  render() {
    const firstContainer = document.createElement("div");
    firstContainer.className = "about-container";

    const h4 = document.createElement("h4");
    h4.textContent = this.title;

    const h2 = document.createElement("h2");
    h2.textContent = this.sarlavhasi;

    firstContainer.appendChild(h4);
    firstContainer.appendChild(h2);

    return firstContainer;
  }
}

const texts = [new aboutItem("SIMPLY AMAZING PLACES", "A few words about us")];

heroContainer.appendChild(texts[0].render());

// about content uchun class

class aboutContent {
  constructor(matn, matn2, btnText, src) {
    this.matn = matn;
    this.matn2 = matn2;
    this.btnText = btnText;
    this.src = src;
  }

  created() {
    const content = document.createElement("div");
    content.className = "about-content";

    const rightContent = document.createElement("div");
    rightContent.className = "right-content";

    const left = document.createElement("div");
    left.className = "left-content";

    const h3 = document.createElement("h3");
    h3.textContent = this.matn;

    const p = document.createElement("p");
    p.textContent = this.matn2;

    const button = document.createElement("button");
    button.textContent = this.btnText;

    const image = document.createElement("img");
    image.src = this.src;

    left.appendChild(h3);
    left.appendChild(p);
    left.appendChild(button);

    rightContent.appendChild(image);

    content.appendChild(left);
    content.appendChild(rightContent);

    return content;
  }
}

const items = [
  new aboutContent(
    `Pellentesque sit amet elementum ccumsan sit amet mattis eget,
                tristique at leo. Vivamus massa.Tempor massa et laoreet .Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.`,
    `Pellentesque sit amet elementum ccumsan sit amet mattis eget,
                tristique at leo. Vivamus massa.Tempor massa et laoreet .Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                laoreet ante, sollicitudin volutpat quam. Vestibulum posuere
                malesuada ultrices. In pulvinar rhoncus lacus at aliquet. Nunc
                vitae lacus varius, auctor nisi sit amet, consectetur mauris.
                Curabitur sodales semper est, vel faucibus urna laoreet vel. Ut
                justo diam, sodales non pulvinar at, vulputate quis neque. Etiam
                aliquam purus vel ultricies consequat.`,
    `Read More`,
    "/Colorlib Tour Project/assets/Images/about_1.jpg"
  ),
];

heroContainer.appendChild(items[0].created());

// info items

const aboutinfo = document.querySelector(".info-about");

class infoItems {
  constructor(icon, itemNomi, itemNomi2) {
    this.icon = icon;
    this.itemNomi = itemNomi;
    this.itemNomi2 = itemNomi2;
  }

  rendered() {
    const infoItem = document.createElement("div");
    infoItem.className = "info-item";

    const icons = document.createElement("i");
    icons.className = this.icon;

    const h1 = document.createElement("h1");
    h1.textContent = this.itemNomi;

    const secondName = document.createElement("h4");
    secondName.textContent = this.itemNomi2;

    infoItem.appendChild(icons);
    infoItem.appendChild(h1);
    infoItem.appendChild(secondName);

    aboutinfo.appendChild(infoItem);

    return aboutinfo;
  }
}

const itmelar = [
  new infoItems(`fa-solid fa-mountain-city`, "17", `Online Courses`),
  new infoItems(`fa-solid fa-umbrella-beach`, "213", `Students`),
  new infoItems(`fa-regular fa-camera`, "11923", `Teachers`),
  new infoItems(`fa-solid fa-ship`, "15", `Countries`),
];

itmelar.forEach((item) => {
  heroContainer.appendChild(item.rendered());
});

// why nomli sectionim uchun

const whyContainer = document.querySelector(".why-container");

class whyTexts {
  constructor(titlesi, sarlavhasiWhy) {
    this.titlesi = titlesi;
    this.sarlavhasiWhy = sarlavhasiWhy;
  }

  renderer() {
    const whyBox = document.createElement("div");
    whyBox.className = "why-text";

    const hh4 = document.createElement("h4");
    hh4.textContent = this.titlesi;

    const hh2 = document.createElement("h1");
    hh2.textContent = this.sarlavhasiWhy;

    whyBox.appendChild(hh4);
    whyBox.appendChild(hh2);

    return whyBox;
  }
}

const whyText = [new whyTexts("SIMPLY AMAZING PLACES", "WHY CHOOSE US?")];

whyContainer.appendChild(whyText[0].renderer());

// image container

// 1. Element borligini tekshirish
const imageBox = document.querySelector(".image-container");

class TourImage {
  constructor(src, title, description, iconClass) {
    this.src = src;
    this.title = title;
    this.description = description;
    this.iconClass = iconClass;
  }

  render() {
    const imgItem = document.createElement("div");
    imgItem.className = "img-item";

    imgItem.innerHTML = `
      <div class="img-block">
        <img src="${this.src}" alt="${this.title}">
      </div>
      <div class="text-block">
        <h3>${this.title}</h3>
        <p>${this.description}</p>
      </div>
      <div class="img-icon">
        <i class="${this.iconClass}"></i>
      </div>
    `;

    return imgItem;
  }
}

const itemlar = [
  new TourImage(
    "./assets/Images/why_1.jpg",
    "Fast Services",
    "Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo.",
    "fa-solid fa-plane-up"
  ),
  new TourImage(
    "./assets/Images/why_2.jpg",
    "Great Team",
    "Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo.",
    "fa-solid fa-utensils"
  ),
  new TourImage(
    "./assets/Images/why_3.jpg",
    "Best Deals",
    "Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo.",
    "fa-solid fa-person-walking-luggage"
  ),
];

itemlar.forEach((item) => {
  imageBox.appendChild(item.render());
});

// team section uchun

const teamContainer = document.querySelector(".team-container");

class TeamMember {
  constructor(img, name, infosi) {
    this.img = img;
    this.name = name;
    this.infosi = infosi;
  }

  render() {
    const teamItem = document.createElement("div");
    teamItem.className = "team-item";

    teamItem.innerHTML = `
        <div class="member-img">
            <img src="${this.img}" alt="${this.name}" />
            <h2>${this.name}</h2>
        </div>
        <div class="member-info">
            <p>${this.infosi}</p>
        </div>
    `;
    return teamItem;
  }
}

const teamText = document.createElement("div");
teamText.className = "team-text";
teamText.innerHTML = `
    <p>SIMPLY AMAZING PLACES</p>
    <h1>Meet the Team</h1>
`;
teamContainer.appendChild(teamText);

const teamImage = document.createElement("div");
teamImage.className = "team-image";
teamContainer.appendChild(teamImage);

const members = [
  new TeamMember(
    "./assets/Images/team_1.jpg",
    "Margaret Smith",
    "Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa."
  ),
  new TeamMember(
    "./assets/Images/team_2.jpg",
    "James Williams",
    "Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa."
  ),
  new TeamMember(
    "./assets/Images/team_3.jpg",
    "Michael James",
    "Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa."
  ),
  new TeamMember(
    "./assets/Images/team_4.jpg",
    "Noah Smith",
    "Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa."
  ),
];

members.forEach((member) => {
  teamImage.appendChild(member.render());
});
