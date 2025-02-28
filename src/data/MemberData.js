import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// 이미지를 동적으로 가져오기 위한 URL 생성 함수
export const getImageUrl = (name) => {
  return new URL(`../assets/img/${name}`, import.meta.url).href;
};

// SNS 아이콘 매핑
export const snsIcons = {
  github: faGithub,
  linkedin: faLinkedin,
  instagram: faInstagram,
};
