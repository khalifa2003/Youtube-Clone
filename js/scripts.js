// Function to check screen width and toggle sidebar visibility
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");

  // Check if the screen width is less than 768px (mobile view)
  if (window.innerWidth < 768) {
    sidebar.classList.toggle("active");
  }
}

// Event listener for menu button
document.getElementById("menu-bar").addEventListener("click", toggleSidebar);

window.addEventListener("resize", function () {
  const sidebar = document.getElementById("sidebar");
  
  // Automatically show sidebar if screen is resized to larger than 768px
  if (window.innerWidth >= 768) {
    sidebar.classList.remove("active");
  }
});