import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const ICON_MAP = {
  github: faGithub,
  linkedin: faLinkedin,
  instagram: faInstagram,
};

export const snsIcons = new Proxy(ICON_MAP, {
  get: (target, prop) => target[prop.toLowerCase()] || target[prop],
});
