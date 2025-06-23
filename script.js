particlesJS("particles-js", {
  particles: {
    number: {
      value: 150,
      density: { enable: true, value_area: 800 }
    },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" }
    },
    opacity: {
      value: 0.3,
      random: true,
      anim: { enable: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      out_mode: "out",
      attract: { enable: false }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      repulse: { distance: 150, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});
