import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { fireStore } from "../Firebase";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

// SNS 아이콘 매핑 객체
const iconMapping = {
  github: faGithub,
  instagram: faInstagram,
  linkedin: faLinkedin,
};

const UseMembers = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const querySnapshot = await getDocs(collection(fireStore, "members"));
        const membersData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            ...data,
            id: doc.id,
            // 이미지 경로 처리
            image: `./memberimg/${data.image.split("/").pop()}`,
            // 문자열로 저장된 데이터를 다시 배열로 변환하고 FontAwesome 아이콘 매핑
            snsIcons: data.snsIcons.split(",").map((iconName) => ({
              iconName,
              icon: iconMapping[iconName.toLowerCase()] || iconMapping.github, // 기본값으로 github 아이콘 사용
            })),
            bulletList: data.bulletList.split(","),
          };
        });
        setMembers(membersData);
        setLoading(false);
      } catch (err) {
        console.error("멤버 데이터 로딩 중 오류 발생:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return { members, loading, error };
};

export default UseMembers;
