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


 // JavaScript to toggle sidebar on mobile
 const hamburgerMenu = document.getElementById('hamburger-menu');
 const sidebar = document.getElementById('sidebar');

 hamburgerMenu.addEventListener('click', () => {
// Toggle sidebar visibility
sidebar.classList.toggle('hidden'); // Mobilnézetben rejtett vagy látható
});

document.addEventListener("DOMContentLoaded", () => {
document.addEventListener("click", (event) => {
 // Csak a dropdown gombokra reagáljon
 const target = event.target.closest("[data-dropdown-toggle]");
 if (target) {
     const menuId = target.dataset.dropdown-toggle;
     const arrowId = target.dataset.arrow-toggle;
     const submenu = document.getElementById(menuId);
     const arrow = document.getElementById(arrowId);

     if (submenu) submenu.classList.toggle("hidden");
     if (arrow) arrow.classList.toggle("rotate-0");

     // Eseménybuborékolás megállítása
     event.stopPropagation();
    }
    
});
});

// Function to toggle the dropdown menu
function toggleDropdown() {
     document.getElementById("myDropdown").classList.toggle("hidden");
 }

 // Close the dropdown if the user clicks outside of it
 window.onclick = function(event) {
if (!event.target.closest('.text-white')) {
 var dropdowns = document.getElementsByClassName("dropdown-content");
 for (var i = 0; i < dropdowns.length; i++) {
     var openDropdown = dropdowns[i];
     if (!openDropdown.classList.contains('hidden')) {
         openDropdown.classList.add('hidden');
     }
 }
}
};



