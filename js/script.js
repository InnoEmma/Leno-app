document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu
  const ToggleButton = document.querySelector(".mobile-menu-toggle");
  const MobileMenu = document.querySelector(".mobile-menu-item ");

  ToggleButton.addEventListener("click", function () {
    MobileMenu.classList.toggle("active");
  });

  // Video modal
  const Modal = document.getElementById("viewModal");
  const VideoButton = document.querySelector(".class-preview-button");
  const CloseBtn = document.querySelector(".Modal-close-button");
  const VideoPlayer = document.getElementById("VideoPlayer");
  // open modal when clicked
  VideoButton.addEventListener("click", function () {
    Modal.style.display = "block";

    // Replace the source attribute by url
    VideoPlayer.src =
      "https://www.youtube.com/embed/Z_DR1_zhmCU?si=WvbRuM8ox04XcR4-";

    // close modal
    CloseBtn.addEventListener("click", function () {
      Modal.style.display = "none";
      VideoPlayer.scr = "";
    });

    // CloseModal on outer click
    window.addEventListener("click", function (event) {
      if (event.target == Modal) {
        Modal.style.display = "none";
        VideoPlayer.scr = "";
      }
    });
  });
});

// Navigation on scroll

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("navbar--scroll");
  } else {
    window.scrollY < 0;
    navbar.classList.remove("navbar--scroll");
  }
});
