import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: false,
          zIndex: 0
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 1200
            }
          },
          color: {
            value: ["#0077B6", "#00B4D8", "#48CAE4", "#90E0EF", "#ADE8F4"]
          },
          shape: {
            type: ["circle", "triangle", "polygon", "star"],
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 6
            },
            image: {
              src: "",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.25,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 4,
            random: true,
            anim: {
              enable: true,
              speed: 3,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#48CAE4",
            opacity: 0.2,
            width: 1
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          },
          life: {
            duration: {
              value: 3000
            },
            count: 0,
            delay: {
              value: 0,
              random: false
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: ["grab", "bubble", "repulse"]
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 0.4
              }
            },
            bubble: {
              distance: 250,
              size: 6,
              duration: 2,
              opacity: 0.6,
              speed: 3
            },
            repulse: {
              distance: 150,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true,
        background: {
          color: "transparent",
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover"
        },
        fpsLimit: 60,
        backgroundMask: {
          enable: false,
          cover: {
            color: {
              value: "#ffffff"
            }
          }
        },
        themes: [
          {
            name: "blue-theme",
            default: {
              value: true,
              mode: "light"
            },
            options: {
              particles: {
                color: {
                  value: ["#0077B6", "#00B4D8", "#48CAE4"]
                },
                links: {
                  color: "#48CAE4"
                }
              }
            }
          }
        ]
      }}
    />
  );
}

export default Particle; 