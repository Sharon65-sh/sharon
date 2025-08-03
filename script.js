// Theme toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.documentElement.toggleAttribute("data-theme", "dark");
});

// Scroll animation (optional enhancement)
document.querySelectorAll(".section").forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(40px)";
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
      entry.target.style.transition = "all 0.6s ease";
    }
  });
}, {
  threshold: 0.1,
});

document.querySelectorAll(".section").forEach(section => {
  observer.observe(section);
});
