const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Abrir y cerrar el menú en pantallas pequeñas.
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("show");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  menuToggle.textContent = isOpen ? "×" : "☰";
});

// Cerrar el menú después de seleccionar una sección.
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    menuToggle.textContent = "☰";
  });
});

// Mostrar automáticamente el año actual en el pie de página.
document.getElementById("year").textContent = new Date().getFullYear();
