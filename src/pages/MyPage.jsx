import UseMembers from "../hooks/UseMembers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import { doc, updateDoc } from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { fireStore, storage } from "../Firebase";

const FormField = ({
  label,
  id,
  type,
  placeholder,
  value,
  onChange,
  options,
  className = "",
  readOnly,
}) => {
  const baseInputClass =
    "block w-full appearance-none rounded border border-purple-200 bg-purple-50 px-4 py-3 leading-tight text-slate-800 focus:border-purple-500 focus:bg-white focus:outline-none mb-3";

  return (
    <div className={`w-full px-3 ${className}`}>
      <label
        className="mb-2 block pl-1 text-xs font-bold uppercase tracking-wide text-slate-800"
        htmlFor={id}
      >
        {label}
      </label>
      {type === "select" ? (
        <div className="relative">
          <FontAwesomeIcon
            icon={faChevronDown}
            className="pointer-events-none absolute right-3 top-3 z-10 transform pt-0.5 text-purple-600"
          />
          <select
            className={`${baseInputClass} pr-8`}
            id={id}
            value={value}
            onChange={onChange}
          >
            {options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      ) : type === "textarea" ? (
        <textarea
          className={`${baseInputClass} min-h-[100px]`}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          className={baseInputClass}
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
        />
      )}
    </div>
  );
};

function MyPage() {
  const { members, loading, error } = UseMembers();
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    email: "",
    description: "",
  });
  const [updateStatus, setUpdateStatus] = useState({
    loading: false,
    error: null,
  });
  const fileInputRef = useRef(null);
  const [imageUploadStatus, setImageUploadStatus] = useState({
    loading: false,
    error: null,
  });

  const positions = [
    "CEO",
    "CTO",
    "Product Engineer",
    "Product Designer",
    "Product Marketer",
  ];

  useEffect(() => {
    if (members.length > 0) {
      const userData = members.find((member) => member.id === "1");
      if (userData) {
        setFormData({
          name: userData.name,
          position: userData.position,
          email: userData.email,
          description: userData.description,
        });
      }
    }
  }, [members]);

  if (loading) {
    return <div className="pt-20 text-center">로딩 중...</div>;
  }

  if (error) {
    return <div className="pt-20 text-center text-red-500">에러: {error}</div>;
  }

  const userData = members.find((member) => member.id === "1");

  if (!userData) {
    return <div className="pt-20 text-center">사용자를 찾을 수 없습니다.</div>;
  }

  const handleChange = (field) => (e) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdateStatus({ loading: true, error: null });

    try {
      const memberRef = doc(fireStore, "members", "1");

      // Firestore에 맞게 데이터 구조 변환
      const updateData = {
        name: formData.name,
        position: formData.position,
        email: formData.email,
        description: formData.description,
        // Firebase에는 파일명만 저장
        image: userData.image.split("/").pop(),
        snsIcons: userData.snsIcons || [],
        bulletList: userData.bulletList || [],
      };

      await updateDoc(memberRef, updateData);
      setUpdateStatus({ loading: false, error: null });
      alert("프로필이 성공적으로 업데이트되었습니다!");
    } catch (err) {
      console.error("프로필 업데이트 중 오류 발생:", err);
      setUpdateStatus({ loading: false, error: err.message });
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 파일 크기 체크 (1MB)
    if (file.size > 1024 * 1024) {
      alert("파일 크기는 1MB를 초과할 수 없습니다.");
      return;
    }

    // 이미지 파일 타입 체크
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      alert(
        "허용된 이미지 형식이 아닙니다.\n(.jpg, .jpeg, .png, .webp 파일만 업로드 가능)",
      );
      return;
    }

    setImageUploadStatus({ loading: true, error: null });

    try {
      // 기존 이미지 URL에서 파일 경로 추출
      const oldImageUrl = userData.image;
      if (
        oldImageUrl &&
        oldImageUrl.includes("firebasestorage.googleapis.com")
      ) {
        try {
          // Storage의 파일 경로 추출
          const oldImagePath = oldImageUrl.split("/o/")[1].split("?")[0];
          const decodedPath = decodeURIComponent(oldImagePath);
          const oldImageRef = ref(storage, decodedPath);

          // 기존 이미지 삭제
          await deleteObject(oldImageRef);
          console.log("기존 이미지가 삭제되었습니다.");
        } catch (deleteErr) {
          console.error("기존 이미지 삭제 중 오류 발생:", deleteErr);
          // 기존 이미지 삭제 실패해도 새 이미지 업로드는 계속 진행
        }
      }

      // 새 이미지 업로드
      const storageRef = ref(storage, `img/${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);

      // Firestore 문서 업데이트
      const memberRef = doc(fireStore, "members", "1");
      await updateDoc(memberRef, {
        image: downloadURL,
      });

      // 성공 메시지
      alert("프로필 이미지가 성공적으로 업데이트되었습니다.");
      window.location.reload(); // 페이지 새로고침
    } catch (err) {
      console.error("이미지 업로드 중 오류 발생:", err);
      setImageUploadStatus({ loading: false, error: err.message });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="m-auto max-w-lg pt-20 text-left">
        <div className="mb-6 flex flex-col items-center gap-2">
          <p className="block text-xs font-bold uppercase tracking-wide text-slate-800">
            Profile Pic
          </p>
          <img
            className="h-auto w-20 rounded-full"
            src={userData.image}
            alt={userData.name}
          />
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleImageUpload}
          />
          <button
            type="button"
            onClick={handleImageClick}
            disabled={imageUploadStatus.loading}
            className="text-sm text-purple-600 hover:text-purple-700"
          >
            {imageUploadStatus.loading ? "업로드 중..." : "Change"}
          </button>
          {imageUploadStatus.error && (
            <p className="text-sm text-red-500">{imageUploadStatus.error}</p>
          )}
        </div>

        <div className="mb-6 flex flex-wrap">
          <FormField
            label="Name"
            id="grid-name"
            type="text"
            placeholder="Jane"
            value={formData.name}
            onChange={handleChange("name")}
            className="md:w-1/2"
          />
          <FormField
            label="Position"
            id="grid-position"
            type="select"
            value={formData.position}
            onChange={handleChange("position")}
            options={positions}
            className="md:w-1/2"
          />
        </div>

        <FormField
          label="Password"
          id="grid-password"
          type="password"
          placeholder="******************"
          readOnly
        />

        <FormField
          label="Email"
          id="grid-email"
          type="email"
          placeholder="*****@***.com"
          value={formData.email}
          onChange={handleChange("email")}
        />

        <FormField
          label="Introduce"
          id="grid-introduce"
          type="textarea"
          placeholder="Write an introductory sentence..."
          value={formData.description}
          onChange={handleChange("description")}
        />

        <div className="flex flex-col items-center">
          <button
            type="submit"
            disabled={updateStatus.loading}
            className="mt-8 rounded bg-purple-600 px-12 py-2 text-white transition-colors hover:bg-purple-700 disabled:bg-purple-300"
          >
            {updateStatus.loading ? "저장 중..." : "Save"}
          </button>
          {updateStatus.error && (
            <p className="mt-2 text-red-500">{updateStatus.error}</p>
          )}
        </div>
      </form>
    </div>
  );
}

export default MyPage;
