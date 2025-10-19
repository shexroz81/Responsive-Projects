const btn = document.getElementById("toggleMenu");
const btn2 = document.getElementById("navLinks");

btn.addEventListener("click", () => {
    btn2.classList.toggle("active");
});