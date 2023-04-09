document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".togglebutton");
  const sidebar = document.querySelector(".sidebar");
  const closeBtn = document.querySelector(".closebutton");

  toggleButton.addEventListener("click", function () {
    sidebar.classList.toggle("active");
  });

  closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("active");
  });

  toggleButton.addEventListener("mouseover", function () {
    toggleButton.classList.add("hover");
  });

  toggleButton.addEventListener("mouseout", function () {
    toggleButton.classList.remove("hover");
  });
});
