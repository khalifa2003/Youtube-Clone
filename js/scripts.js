document.getElementById("menu-bar").addEventListener("click", function () {
  document.querySelector("aside").classList.toggle("hidden");
  document.querySelector("main").classList.toggle("full-width");
});
document.getElementById("menu-bar").addEventListener("click", function() {
  document.getElementById("sidebar").classList.toggle("active");
});