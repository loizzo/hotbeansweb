// Waits for the page to load
document.addEventListener("DOMContentLoaded", function () {
  
  // Collecting The Goods
    const modal = document.getElementById("jobModal");
    const openBtn = document.getElementById("applyNowBtn");
    const closeBtn = document.getElementById("jobModalClose");

    // Open Form
    openBtn.addEventListener("click", function () {
      modal.style.display = "block";
    });

    // Close Button
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });

    // Close Form When Outside Clicked
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });