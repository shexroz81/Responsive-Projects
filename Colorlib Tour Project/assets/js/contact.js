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

// contact name and email input

// Elementlarni faqat bir marta yaratib olamiz

const forms = document.getElementById("form-contacter");
const result = document.getElementById("result-container");
const sarlavha1 = document.createElement("h2");
const sarlavhaEmail = document.createElement("h2");

forms.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if ((name === "" && email !== "") || (email === "" && name !== "")) {
    alert("Email yoki Ismni kiriting");
  } else {
    sarlavha1.textContent = "Kiritilgan Ism : " + name;
    sarlavhaEmail.textContent = "Kiritilgan Email : " + email;
  }

  result.append(sarlavha1, sarlavhaEmail);

  forms.reset();
});

const form = document.getElementById("firstForm"); // Oldingi formangiz ID'si

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputs = form.querySelectorAll("input");
  const city = inputs[0].value;
  const departure = inputs[1].value;
  const arrival = inputs[2].value;
  const budget = inputs[3].value;

  const sarlavhaCity = document.createElement("h2");
  const sarlavhaDeparture = document.createElement("h2");
  const sarlavhaArrival = document.createElement("h2");
  const sarlavhaBudget = document.createElement("h2");

  if (!city && !departure && !arrival && !budget) {
    alert("Iltimos, bo`sh joyni to'ldiring");
  } else {
    sarlavhaCity.textContent = "  va    City: " + city;
    sarlavhaDeparture.textContent = "Departure: " + departure;
    sarlavhaArrival.textContent = "Arrival: " + arrival;
    sarlavhaBudget.textContent = "Budget: " + budget;

    result.append(
      sarlavhaCity,
      sarlavhaDeparture,
      sarlavhaArrival,
      sarlavhaBudget
    );
  }

  form.reset();
});

const footerContainer = document.querySelector(".contact-footer-container");

const secondResultContainer = document.createElement("div");
secondResultContainer.id = "second-result-container";

const formm = document.querySelector(".form-side form");

formm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("FormName").value;
  const email = document.getElementById("EmailName").value;
  const subject = document.getElementById("SubjectName").value;
  const message = document.getElementById("Message").value;

  const sarlavhaName = document.createElement("h2");
  const sarlavhaEmail = document.createElement("h2");
  const sarlavhaSubject = document.createElement("h2");
  const sarlavhaMessage = document.createElement("h2");

  sarlavhaName.textContent = "Your Name: " + name;
  sarlavhaEmail.textContent = "Your E-mail: " + email;
  sarlavhaSubject.textContent = "Subject: " + subject;
  sarlavhaMessage.textContent = "Message: " + message;

  secondResultContainer.append(
    sarlavhaName,
    sarlavhaEmail,
    sarlavhaSubject,
    sarlavhaMessage
  );

  formm.reset();
});

footerContainer.appendChild(secondResultContainer);
