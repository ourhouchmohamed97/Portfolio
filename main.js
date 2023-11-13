// intro code
$(function () {
  var welcomeSection = $(".welcome-section"),
    enterButton = welcomeSection.find(".enter-text");

  setTimeout(function () {
    welcomeSection.removeClass("content-hidden");
  }, 1000);

  enterButton.on("click", function (e) {
    e.preventDefault();
    welcomeSection.addClass("content-hidden").fadeOut();
  });
});

// particles code
particlesJS("box1", {
  particles: {
    number: {
      value: 25,
      density: {
        enable: true,
        value_area: 400,
      },
    },
    color: {
      value: "#d9d6d6",
    },
    shape: {
      type: "triangle",
    },
    opacity: {
      value: 0.8,
      random: true,
      anum: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 5,
      random: true,
      anime: {
        enable: true,
        speed: 4,
        size_min: 0.3,
        sync: false,
      },
    },
    // connecting lines
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    // particle movement
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "bounce",
      bounce: false,
    },
  },
  // Interactivity settings
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse,",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
  },
  // Detect retina displays
  retina_detect: true,
});


// scroll reveal
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});

ScrollReveal().reveal(
  ".about-title, .skills-title, .projects-title, .contact-title",
  { delay: 200, origin: "left" }
);
ScrollReveal().reveal(".contact-title, .description", {
  delay: 500,
  origin: "right",
});
ScrollReveal().reveal(".line1, .line3, .image", { delay: 300, origin: "top" });
ScrollReveal().reveal(".line2", { delay: 300, origin: "bottom" });
ScrollReveal().reveal(".cv, .wtsp4 i", { delay: 300, origin: "bottom" });
ScrollReveal().reveal(".social-media i", {
  delay: 300,
  origin: "bottom",
  interval: 200,
});
ScrollReveal().reveal(".project1, .email", { delay: 300, origin: "left" });
ScrollReveal().reveal(".project2, .phone", { delay: 500, origin: "right" });

