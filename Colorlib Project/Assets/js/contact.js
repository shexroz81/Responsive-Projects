// Js For Contact

let users = [];

const form = document.getElementById("Form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const website = document.getElementById("website").value;
  const message = document.getElementById("message").value;

  const userData = {
    name: name,
    email: email,
    website: website,
    message: message,
  };

  users.push(userData);

  console.log(users);

  form.reset();
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
