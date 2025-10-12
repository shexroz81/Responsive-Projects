const toggleBtn = document.getElementById('toggleSidebar');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hide-text");
    sidebar.classList.toggle("collapsed");
})

