import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { fireStore } from "../Firebase";
import { snsIcons } from "../data/SocialIcons";

// 배포 환경에 따른 기본 경로 설정
const BASE_PATH = import.meta.env.MODE === "production" ? "/vite-test" : "";

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
            image: data.image,
            snsIcons: Array.isArray(data.snsIcons)
              ? data.snsIcons.map((icon) => ({
                  iconName: icon.iconName || "",
                  icon: snsIcons[icon.iconName || ""] || snsIcons.github,
                }))
              : typeof data.snsIcons === "string" && data.snsIcons
                ? data.snsIcons.split(",").map((iconName) => ({
                    iconName: iconName.trim(),
                    icon: snsIcons[iconName.trim()] || snsIcons.github,
                  }))
                : [],
            bulletList: Array.isArray(data.bulletList)
              ? data.bulletList
              : typeof data.bulletList === "string" && data.bulletList
                ? data.bulletList.split(",").map((item) => item.trim())
                : [],
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
