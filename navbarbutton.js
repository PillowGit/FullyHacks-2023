function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".openbutton");
  const sidebar = document.querySelector(".sidebar");
  const closeBtn = document.querySelector(".closebutton");
  const backBtn = document.querySelector(".backbutton");

  toggleButton.addEventListener("click", function () {
    sidebar.classList.toggle("active");
  });

  closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("active");
  });

  backBtn.addEventListener("click", function () {
    const url = new URL(window.location.href);
    url.searchParams.set("activateSidebar", "true");
    window.location.href = url.toString();
  });

  toggleButton.addEventListener("mouseover", function () {
    toggleButton.classList.add("hover");
  });

  toggleButton.addEventListener("mouseout", function () {
    toggleButton.classList.remove("hover");
  });

  if (getQueryParam("activateSidebar") === "true") {
    sidebar.classList.add("active");
  }
});
