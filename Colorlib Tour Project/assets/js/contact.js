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

const forms = document.getElementById("form-contacter");
const result = document.getElementById("third-result");

forms.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if ((name === "" && email !== "") || (email === "" && name !== "")) {
    alert("Email yoki Ismni kiriting");
  } else {
    result.innerHTML = ` <h4>Your Name : ${name} </h4>
            <h4>Your Email : ${email} </h4>`;
  }

  forms.reset();
});

const form = document.getElementById("firstForm");
const resultSecond = document.getElementById("first-result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputs = form.querySelectorAll("input");
  const city = inputs[0].value;
  const departure = inputs[1].value;
  const arrival = inputs[2].value;
  const budget = inputs[3].value;

  if (!city || !departure || !arrival || !budget) {
    alert("Iltimos, bo`sh joyni to'ldiring");
  } else {
    resultSecond.innerHTML = `   <h4>City : ${city} </h4>
            <h4>Departue : ${departure} </h4>
            <h4>Arrival : ${arrival} </h4>
            <h4>Budget : ${budget} </h4>`;
  }

  form.reset();
});

const thirdResult = document.getElementById("second-result");
const formm = document.getElementById("forum");

formm.addEventListener("submit", function (e) {
  e.preventDefault();

  const names = document.getElementById("FormName").value;
  const emails = document.getElementById("EmailName").value;
  const subjects = document.getElementById("SubjectName").value;
  const messages = document.getElementById("Message").value;

  if (!names || !emails || !subjects || !messages) {
    alert("Iltimos, bo`sh joyni to'ldiring");
  } else {
    thirdResult.innerHTML = `<h4>Your Name : ${names} </h4>
            <h4>Your Email : ${emails} </h4>
            <h4>Your Subject : ${subjects} </h4>
            <h4>Your Messages :${messages} </h4>`;
  }

  formm.reset();
});
