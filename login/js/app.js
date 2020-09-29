particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: { enable: true, value_area: 1187.488619900726 }
    },
    color: { value: "#666666" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 1,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 2,
      random: false,
      anim: { enable: true, speed: 0, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 110.83227119073442,
      color: "#ffffff",
      opacity: 0.4,
      width: 0.4749954479602903
    },
    move: {
      enable: true,
      speed: 3.344957059113751,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "bounce",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 6104.546632882596,
        rotateY: 7609.777309483784
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "repulse" },
      resize: true
    },
    modes: {
      grab: {
        distance: 156.33392927292704,
        line_linked: { opacity: 0.406008932196508 }
      },
      bubble: {
        distance: 216.4623636086682,
        size: 4.0085622890494115,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: { distance: 128.27399324958117, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: false
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
