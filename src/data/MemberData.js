import TeamFace1 from "../assets/img/TeamFace1.png";
import TeamFace2 from "../assets/img/TeamFace2.png";
import TeamFace3 from "../assets/img/TeamFace3.png";
import TeamFace4 from "../assets/img/TeamFace4.png";
import TeamFace5 from "../assets/img/TeamFace5.png";
import TeamFace6 from "../assets/img/TeamFace6.png";

import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const memberData = [
  {
    id: 1,
    name: "Hoyeon Lee",
    email: "hoyeon.lee@supernova.com",
    position: "CEO",
    image: TeamFace1,
    bulletList: ["consectetur", "maximus", "lacus", "amet nunc"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis luctus lacus, maximus consectetur nunc aliquam congue. Morbi interdum massa at sollicitudin lobortis. Morbi ultrices nisi et nulla aliquam blandit.",
    snsIcons: [faLinkedin, faInstagram],
  },
  {
    id: 2,
    name: "Seoyeon Park",
    email: "seoyeon.park@supernova.com",
    position: "CTO",
    image: TeamFace2,
    bulletList: ["consectetur", "ipsum", "interdum"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis luctus lacus, maximus consectetur nunc aliquam congue. Morbi interdum massa at sollicitudin lobortis. Morbi ultrices nisi et nulla aliquam blandit.",
    snsIcons: [faLinkedin, faInstagram, faGithub],
  },
  {
    id: 3,
    name: "Dowoom Kim",
    email: "dowoom.kim@supernova.com",
    position: "DevOps Engineer",
    image: TeamFace3,
    bulletList: ["consectetur", "adipiscing"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis luctus lacus, maximus consectetur nunc aliquam congue. Morbi interdum massa at sollicitudin lobortis. Morbi ultrices nisi et nulla aliquam blandit.",
    snsIcons: [faLinkedin, faGithub],
  },
  {
    id: 4,
    name: "Yeondoo Hwang",
    email: "yeondoo.hwang@supernova.com",
    position: "Product Engineer",
    image: TeamFace4,
    bulletList: ["consectetur", "elit"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis luctus lacus, maximus consectetur nunc aliquam congue. Morbi interdum massa at sollicitudin lobortis. Morbi ultrices nisi et nulla aliquam blandit.",
    snsIcons: [faLinkedin, faGithub],
  },
  {
    id: 5,
    name: "Shinwoo Ji",
    email: "shinwoo.ji@supernova.com",
    position: "Product Designer",
    image: TeamFace5,
    bulletList: ["aliquam", "interdum", "mollis"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis luctus lacus, maximus consectetur nunc aliquam congue. Morbi interdum massa at sollicitudin lobortis. Morbi ultrices nisi et nulla aliquam blandit.",
    snsIcons: [faLinkedin, faInstagram],
  },
  {
    id: 6,
    name: "Dayae Han",
    email: "dayae.han@supernova.com",
    position: "Product Marketer",
    image: TeamFace6,
    bulletList: ["interdum", "mollis"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis luctus lacus, maximus consectetur nunc aliquam congue. Morbi interdum massa at sollicitudin lobortis. Morbi ultrices nisi et nulla aliquam blandit.",
    snsIcons: [faInstagram],
  },
];
