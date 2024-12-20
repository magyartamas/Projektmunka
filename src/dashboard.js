document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-dropdown-toggle]");
    if (target) {
      const menuId = target.dataset.dropdownToggle;
      const arrowId = target.dataset.arrowToggle;
      const submenu = document.getElementById(menuId);
      const arrow = document.getElementById(arrowId);
      if (submenu) submenu.classList.toggle("hidden");
      if (arrow) arrow.classList.toggle("rotate-0");
    }
  });
});

// Oldalsáv megnyitása/zárása
function Openbar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("-translate-x-full");
}

// Oldalsáv alapértelmezett állapota (rejtett mobilon)
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  if (window.innerWidth < 1024) {
    sidebar.classList.add("-translate-x-full");
  }
});
