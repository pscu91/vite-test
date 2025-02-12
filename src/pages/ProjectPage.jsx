import { motion } from "framer-motion";
import ReportCard from "../assets/ReportCard.jsx";
import ProjectCard from "../assets/ProjectCard.jsx";
import TeamFace1 from "../assets/img/TeamFace1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function ProjectList() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <div className="bg-thumbnail bg-cover bg-center">
          <div className="space-y-4 bg-black/50 py-24 text-center backdrop-blur-sm transition-all ease-in hover:backdrop-blur-0">
            <p className="text-8xl text-white">Main Title</p>
            <p className="text-3xl text-white/80">Sub Title</p>
            <div className="flex justify-center space-x-2 text-white/70">
              <p className="text-xl">Author</p>
              <p>|</p>
              <p className="text-xl">date</p>
            </div>
          </div>
        </div>
        <div className="m-auto w-4/5 divide-y py-8 text-left lg:w-2/3">
          <div>
            <p className="py-8 text-6xl">Neque porro quisquam</p>
            <p className="pb-4 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum rhoncus ultricies maximus. Morbi commodo sed lectus id
              lobortis. Sed est metus, egestas at ante vel, tempus feugiat
              lectus. Sed ornare luctus nulla non bibendum. Vestibulum pulvinar
              ante augue, eget finibus orci pulvinar non. Donec suscipit, nisl a
              hendrerit tristique, magna nulla convallis odio, id tincidunt
              felis odio non dui. Curabitur varius erat quis finibus convallis.
              Morbi ullamcorper iaculis dui, quis dictum risus congue eu.
              Quisque pretium quam eget mauris congue volutpat. Morbi tortor
              nisl, lacinia sit amet luctus vitae, bibendum non dui. Nam
              facilisis varius lectus vitae pretium. Vivamus gravida posuere
              metus, vel convallis nisl laoreet vel.
            </p>
            <p className="pb-4 text-xl">
              Aliquam erat volutpat. Nulla facilisi. Curabitur tempus velit quis
              est gravida molestie. Donec eget lectus leo. Integer sit amet
              mauris iaculis, maximus orci ut, vestibulum justo. In eget velit
              augue. Cras finibus lacus ut elementum pulvinar. Phasellus mollis
              suscipit urna, eu convallis nisl fermentum in. Nam sagittis erat
              ac elit suscipit, eu rutrum nunc sagittis. Phasellus id viverra
              libero, porta pretium nulla. Praesent sed diam at urna rutrum
              commodo eu id lorem. Praesent molestie at leo ut iaculis. Proin
              interdum aliquam consequat.
            </p>
            <p className="pb-4 text-xl">
              Integer ultrices ante et sem varius faucibus. Donec in velit urna.
              Mauris mattis vel nisl at ultrices. In ipsum nisi, pulvinar non
              ligula vitae, porta porttitor mi. Nunc sed purus commodo, maximus
              eros eget, dignissim leo. Ut pellentesque, risus ultricies varius
              tristique, diam libero interdum tellus, vitae gravida sapien
              ligula in leo. Aenean ultrices sapien id lobortis iaculis. Quisque
              lacinia nec sem euismod bibendum. Cras ex orci, volutpat vitae
              congue vel, laoreet a elit. Aliquam lobortis est purus, et
              imperdiet lectus rhoncus nec. Aenean augue tellus, imperdiet in
              dolor sit amet, ultricies euismod justo. Suspendisse pretium
              euismod ante, tempus lobortis purus rhoncus et. Sed at efficitur
              dui.
            </p>
            <p className="pb-4 text-xl">
              Fusce at ultrices arcu, at placerat purus. Fusce tempus nulla eget
              semper posuere. Sed quis nulla neque. Nunc at lacus ullamcorper,
              vulputate felis in, molestie ligula. Aenean sit amet purus massa.
              In luctus id nisi sit amet facilisis. Donec porttitor dapibus
              neque eget condimentum. Sed eu nulla vel urna condimentum vehicula
              nec nec diam.
            </p>
            <p className="pb-4 text-xl">
              Etiam et bibendum nunc, at tincidunt purus. Nulla malesuada mauris
              augue, sed varius nulla condimentum a. Maecenas eu fermentum
              velit. Mauris feugiat diam id enim lacinia eleifend. Vivamus quis
              ultrices neque, tristique ultricies urna. Sed fringilla a ante
              quis commodo. Vestibulum pellentesque neque sit amet fermentum
              placerat. Phasellus blandit libero vel urna lacinia, eu varius
              arcu convallis. Morbi elementum sem vitae risus interdum, sit amet
              efficitur magna ullamcorper. In tincidunt facilisis erat, non
              auctor orci vulputate id. Nulla rutrum nisl ac arcu fringilla, ac
              dictum felis vulputate. Morbi luctus tristique diam ut pharetra.
            </p>
            <p className="py-8 text-6xl">Neque porro quisquam</p>
            <p className="pb-4 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum rhoncus ultricies maximus. Morbi commodo sed lectus id
              lobortis. Sed est metus, egestas at ante vel, tempus feugiat
              lectus. Sed ornare luctus nulla non bibendum. Vestibulum pulvinar
              ante augue, eget finibus orci pulvinar non. Donec suscipit, nisl a
              hendrerit tristique, magna nulla convallis odio, id tincidunt
              felis odio non dui. Curabitur varius erat quis finibus convallis.
              Morbi ullamcorper iaculis dui, quis dictum risus congue eu.
              Quisque pretium quam eget mauris congue volutpat. Morbi tortor
              nisl, lacinia sit amet luctus vitae, bibendum non dui. Nam
              facilisis varius lectus vitae pretium. Vivamus gravida posuere
              metus, vel convallis nisl laoreet vel.
            </p>
            <p className="pb-4 text-xl">
              Aliquam erat volutpat. Nulla facilisi. Curabitur tempus velit quis
              est gravida molestie. Donec eget lectus leo. Integer sit amet
              mauris iaculis, maximus orci ut, vestibulum justo. In eget velit
              augue. Cras finibus lacus ut elementum pulvinar. Phasellus mollis
              suscipit urna, eu convallis nisl fermentum in. Nam sagittis erat
              ac elit suscipit, eu rutrum nunc sagittis. Phasellus id viverra
              libero, porta pretium nulla. Praesent sed diam at urna rutrum
              commodo eu id lorem. Praesent molestie at leo ut iaculis. Proin
              interdum aliquam consequat.
            </p>
          </div>
          <div className="mt-12">
            <p className="py-8 text-4xl">Reference</p>
            <ReportCard />
            <ReportCard />
          </div>

          <div className="mt-12 flex flex-col items-center space-y-4 py-16">
            <img src={TeamFace1} className="h-20 w-20 rounded-full" />
            <div className="space-y-2">
              <p className="text-2xl font-semibold">Hoyeon Lee</p>
              <p className="text-lg font-semibold text-purple-600">CEO</p>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="text-xl text-slate-600 transition-colors hover:text-purple-600"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="#"
                  className="text-xl text-slate-600 transition-colors hover:text-purple-600"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
            <button className="bg-purple-600 text-white">Subscription</button>
          </div>
          <div className="py-4 xxl:flex">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectList;
