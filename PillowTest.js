const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const sections = document.querySelectorAll(".section");
sections.forEach((el) => observer.observe(el));

const subSections = document.querySelectorAll(".sub-section");
subSections.forEach((el) => observer.observe(el));
