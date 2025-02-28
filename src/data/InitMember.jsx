import { fireStore } from "../Firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const InitMember = () => {
  // Firebase에 데이터 저장하는 함수
  const saveMemberToFirebase = async (member) => {
    try {
      // Firestore에 맞게 데이터 구조 변환
      const memberForFirestore = {
        ...member,
        // 아이콘 배열을 문자열로 변환
        snsIcons: member.snsIcons.map((icon) => icon.iconName).join(","),
        // bulletList 배열을 문자열로 변환
        bulletList: member.bulletList.join(","),
        // 이미지 경로는 문자열로 저장
        image: member.image.toString(),
      };

      const memberRef = doc(fireStore, "members", member.id.toString());
      const memberSnap = await getDoc(memberRef);

      if (!memberSnap.exists()) {
        await setDoc(memberRef, memberForFirestore);
        console.log(`${member.name} 저장 완료!`);
      } else {
        console.log(`${member.name}는 이미 존재합니다.`);
      }
    } catch (error) {
      console.error(`오류 발생: ${error.message}`);
    }
  };

  return null; // 화면에 아무것도 표시하지 않음
};

export default InitMember;
