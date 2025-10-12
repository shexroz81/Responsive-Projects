const toggleBtn = document.getElementById('toggleSidebar');
const sidebar = document.querySelector('.sidebar');
const items = sidebar.querySelectorAll("li");
click = 0;

toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hide-text");
    sidebar.classList.toggle("collapsed");
})

