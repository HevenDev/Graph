document.addEventListener("DOMContentLoaded", () => {
  // Function to open popup
  function openPopup() {
    document.getElementById("popupOverlay").classList.add("active");
    document.getElementById("popupForm").classList.add("active");
  }

  // Function to close popup
  function closePopup() {
    document.getElementById("popupForm").classList.remove("active");
    setTimeout(() => {
      document.getElementById("popupOverlay").classList.remove("active");
    }, 300); // Matches transition duration
  }

  // Attach event listeners to all buttons with class 'open-popup-btn'
  document.querySelectorAll(".open-popup-btn").forEach((button) => {
    button.addEventListener("click", openPopup);
  });
  document.querySelector(".close-btn").addEventListener("click", closePopup);

  // Close when clicking outside the form
  document
    .getElementById("popupOverlay")
    .addEventListener("click", function (event) {
      if (event.target === this) {
        closePopup();
      }
    });
});
