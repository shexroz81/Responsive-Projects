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
  constructor({ title, sarlavhasi }) {
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

const texts = [
  new aboutItem({
    title: "SIMPLY AMAZING PLACES",
    sarlavhasi: "A few words about us",
  }),
];

heroContainer.appendChild(texts[0].render());

// about content uchun class

class aboutContent {
  constructor({ matn, matn2, btnText, src }) {
    this.matn = matn;
    this.matn2 = matn2;
    this.btnText = btnText;
    this.src = src;
  }

  render() {
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
  new aboutContent({
    matn: `Pellentesque sit amet elementum ccumsan sit amet mattis eget,
                tristique at leo. Vivamus massa.Tempor massa et laoreet .Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.`,
    matn2: `Pellentesque sit amet elementum ccumsan sit amet mattis eget,
                tristique at leo. Vivamus massa.Tempor massa et laoreet .Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                laoreet ante, sollicitudin volutpat quam. Vestibulum posuere
                malesuada ultrices. In pulvinar rhoncus lacus at aliquet. Nunc
                vitae lacus varius, auctor nisi sit amet, consectetur mauris.
                Curabitur sodales semper est, vel faucibus urna laoreet vel. Ut
                justo diam, sodales non pulvinar at, vulputate quis neque. Etiam
                aliquam purus vel ultricies consequat.`,
    btnText: `Read More`,
    src: "/Colorlib Tour Project/assets/Images/about_1.jpg",
  }),
];

heroContainer.appendChild(items[0].render());

// info items

const aboutinfo = document.querySelector(".info-about");

class infoItems {
  constructor({ icon, itemNomi, itemNomi2 }) {
    this.icon = icon;
    this.itemNomi = itemNomi;
    this.itemNomi2 = itemNomi2;
  }

  rendered() {
    const infoItem = document.createElement("div");
    infoItem.className = "info-item";

    infoItem.innerHTML = `
      <i class="${this.icon}"></i>
      <h1>${this.itemNomi}</h1>
      <h4>${this.itemNomi2}</h4>
    `;

    aboutinfo.appendChild(infoItem);
    return infoItem;
  }
}

const itmelar = [
  new infoItems({
    icon: "fa-solid fa-mountain-city",
    itemNomi: "17",
    itemNomi2: "Online Courses",
  }),
  new infoItems({
    icon: "fa-solid fa-umbrella-beach",
    itemNomi: "213",
    itemNomi2: "Students",
  }),
  new infoItems({
    icon: "fa-regular fa-camera",
    itemNomi: "11923",
    itemNomi2: "Teachers",
  }),
  new infoItems({
    icon: "fa-solid fa-ship",
    itemNomi: "15",
    itemNomi2: "Countries",
  }),
];

itmelar.forEach((item) => {
  item.rendered();
});

// why nomli sectionim uchun

const whyContainer = document.querySelector(".why-container");

class whyTexts {
  constructor({ titlesi, sarlavhasiWhy }) {
    this.titlesi = titlesi;
    this.sarlavhasiWhy = sarlavhasiWhy;
  }

  renderer() {
    const whyBox = document.createElement("div");
    whyBox.className = "why-text";

    whyBox.innerHTML = `
      <h4>${this.titlesi}</h4>
      <h1>${this.sarlavhasiWhy}</h1>
    `;

    return whyBox;
  }
}

const whyText = [
  new whyTexts({
    titlesi: "SIMPLY AMAZING PLACES",
    sarlavhasiWhy: "WHY CHOOSE US?",
  }),
];

whyContainer.appendChild(whyText[0].renderer());

// image container

const imageBox = document.querySelector(".image-container");

class TourImage {
  constructor({ src, title, description, iconClass }) {
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
  new TourImage({
    src: "./assets/Images/why_1.jpg",
    title: "Fast Services",
    description:
      "Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo.",
    iconClass: "fa-solid fa-plane-up",
  }),
  new TourImage({
    src: "./assets/Images/why_2.jpg",
    title: "Great Team",
    description:
      "Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo.",
    iconClass: "fa-solid fa-utensils",
  }),
  new TourImage({
    src: "./assets/Images/why_3.jpg",
    title: "Best Deals",
    description:
      "Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo.",
    iconClass: "fa-solid fa-person-walking-luggage",
  }),
];

itemlar.forEach((item) => {
  imageBox.appendChild(item.render());
});

// team section uchun

const teamContainer = document.querySelector(".team-container");

class TeamMember {
  constructor({ img, name, infosi }) {
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

// Rasmlar konteyneri

const teamImage = document.createElement("div");
teamImage.className = "team-image";
teamContainer.appendChild(teamImage);

const members = [
  new TeamMember({
    img: "./assets/Images/team_1.jpg",
    name: "Margaret Smith",
    infosi:
      "Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.",
  }),
  new TeamMember({
    img: "./assets/Images/team_2.jpg",
    name: "James Williams",
    infosi:
      "Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.",
  }),
  new TeamMember({
    img: "./assets/Images/team_3.jpg",
    name: "Michael James",
    infosi:
      "Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.",
  }),
  new TeamMember({
    img: "./assets/Images/team_4.jpg",
    name: "Noah Smith",
    infosi:
      "Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.",
  }),
];

members.forEach((member) => {
  teamImage.appendChild(member.render());
});
