import { motion } from "framer-motion";
import MemberCard from "../assets/MemberCard";
import TeamFace1 from "../assets/img/TeamFace1.png";
import TeamFace2 from "../assets/img/TeamFace2.png";
import TeamFace3 from "../assets/img/TeamFace3.png";
import TeamFace4 from "../assets/img/TeamFace4.png";
import TeamFace5 from "../assets/img/TeamFace5.png";

export const teamMembers = [
  {
    id: 1,
    name: "Hoyeon Lee",
    position: "CEO",
    image: TeamFace1,
    bulletList: ["consectetur", "maximus", "lacus", "amet nunc"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis luctus lacus, maximus consectetur nunc aliquam congue. Morbi interdum massa at sollicitudin lobortis. Morbi ultrices nisi et nulla aliquam blandit.",
  },
  {
    id: 2,
    name: "Seoyeon Park",
    position: "CTO",
    image: TeamFace2,
    bulletList: ["consectetur", "ipsum", "interdum"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis luctus lacus, maximus consectetur nunc aliquam congue. Morbi interdum massa at sollicitudin lobortis. Morbi ultrices nisi et nulla aliquam blandit.",
  },
  {
    id: 3,
    name: "Dowoom Kim",
    position: "DevOps Engineer",
    image: TeamFace3,
    bulletList: ["consectetur", "adipiscing"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis luctus lacus, maximus consectetur nunc aliquam congue. Morbi interdum massa at sollicitudin lobortis. Morbi ultrices nisi et nulla aliquam blandit.",
  },
  {
    id: 4,
    name: "Yeondoo Hwang",
    position: "Product Engineer",
    image: TeamFace4,
    bulletList: ["consectetur", "elit"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis luctus lacus, maximus consectetur nunc aliquam congue. Morbi interdum massa at sollicitudin lobortis. Morbi ultrices nisi et nulla aliquam blandit.",
  },
  {
    id: 5,
    name: "Shinwoo Ji",
    position: "Product Designer",
    image: TeamFace5,
    bulletList: ["aliquam", "interdum", "mollis"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis luctus lacus, maximus consectetur nunc aliquam congue. Morbi interdum massa at sollicitudin lobortis. Morbi ultrices nisi et nulla aliquam blandit.",
  },
];

function Team() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mt-8 flex flex-col items-center justify-center">
        <div className="mb-8 text-6xl font-extrabold tracking-tight">
          <span className="select-none bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
            Who we are
          </span>
        </div>
        <div className="flex w-full flex-wrap justify-center gap-12 p-4">
          {teamMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Team;
