const btn = document.getElementById("toggleMenu");
const btn2 = document.getElementById("navLinks");

btn.addEventListener("click", () => {
    btn2.classList.toggle("active");
});

// Dark va Light Mode uchun

const body = document.body;
const toggleBtn = document.getElementById("modeToggle");

const savedMode = localStorage.getItem("mode");
if (savedMode === "dark") {
    body.classList.add("dark");
}

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.removeItem("mode");
    }
})