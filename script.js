const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  links.classList.toggle("is-open");

  const open = links.classList.contains("is-open");
  toggle.setAttribute("aria-expanded", open ? "true" : "false");
});