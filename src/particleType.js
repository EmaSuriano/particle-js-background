import defaultsDeep from './utils/defaultsDeep';

const DEFAULT_PARTICLES = {
  number: {
    value: 50,
    density: {
      enable: true,
      value_area: 800,
    },
  },
  color: {
    value: '#ffffff',
  },
  opacity: {
    value: 1,
    random: true,
    anim: {
      enable: true,
      speed: 1,
      opacity_min: 0.1,
      sync: false,
    },
  },
  size: {
    value: 5,
    random: true,
    anim: {
      enable: true,
      speed: 2,
      size_min: 3,
      sync: false,
    },
  },
  line_linked: {
    enable_auto: true,
    distance: 100,
    color: '#fff',
    opacity: 1,
    width: 1,
    condensed_mode: {
      enable: false,
      rotateX: 600,
      rotateY: 600,
    },
  },
  move: {
    enable: true,
    speed: 1,
    direction: 'none',
    random: false,
    straight: false,
    out_mode: 'out',
    bounce: false,
    attract: {
      enable: false,
      rotateX: 600,
      rotateY: 1200,
    },
  },
};

const particleType = {
  decode: particlesEncode => {
    if (!particlesEncode) return DEFAULT_PARTICLES;
    const particlesObj = JSON.parse(particlesEncode);
    return defaultsDeep(particlesObj, DEFAULT_PARTICLES);
  },
};

export default particleType;
