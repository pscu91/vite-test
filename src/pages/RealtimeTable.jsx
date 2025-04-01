import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../Firebase";
import PageTitle from "../assets/PageTitle";

function RealtimeTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [viewMode, setViewMode] = useState("list"); // 'list' 또는 'gallery'

  // Type별 스타일 정의
  const typeStyles = {
    Develop: "bg-blue-100 text-blue-800",
    UX: "bg-purple-100 text-purple-800",
    Cloud: "bg-green-100 text-green-800",
    IoT: "bg-yellow-100 text-yellow-800",
    SaaS: "bg-pink-100 text-pink-800",
    Ideation: "bg-orange-100 text-orange-800",
  };

  useEffect(() => {
    // console.log("데이터베이스 연결 시도...");
    const dataRef = ref(database, "data"); // 'data' 경로 지정
    // console.log("데이터베이스 참조:", dataRef);

    const unsubscribe = onValue(dataRef, (snapshot) => {
      try {
        const rawData = snapshot.val();
        // console.log("받아온 원본 데이터:", rawData);

        if (rawData) {
          // 객체를 배열로 변환
          const dataArray = Object.entries(rawData).map(([id, value]) => ({
            id,
            ...value,
          }));
          //   console.log("변환된 데이터 배열:", dataArray);
          setData(dataArray);
        } else {
          //   console.log("데이터가 없습니다");
          setData([]);
        }
        setLoading(false);
      } catch (err) {
        // console.error("데이터 로딩 중 오류 발생:", err);
        setError(err.message);
        setLoading(false);
      }
    });

    // 컴포넌트 언마운트 시 구독 해제
    return () => unsubscribe();
  }, []);

  // 날짜 포맷팅 함수
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;
  };

  // Type 태그 렌더링 함수
  const renderTypeTag = (type) => {
    const baseStyle = "px-2 py-1 rounded-full text-xs font-medium";
    const colorStyle = typeStyles[type] || "bg-gray-100 text-gray-800";

    return <span className={`${baseStyle} ${colorStyle}`}>{type}</span>;
  };

  // 이미지 모달 컴포넌트
  const ImageModal = ({ url, onClose }) => {
    if (!url) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
        <div className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-lg bg-white p-2">
          <button
            onClick={onClose}
            className="absolute right-6 top-4 rounded-full bg-white p-2 text-gray-600 shadow-md hover:bg-gray-100"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <img
            src={url}
            alt="확대된 이미지"
            className="max-h-[85vh] max-w-[85vw] object-contain"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/800?text=No+Image";
            }}
          />
        </div>
      </div>
    );
  };

  // 이미지 썸네일 렌더링 함수
  const renderImage = (url, size = "small") => {
    if (!url) return "-";
    const imageSize = size === "small" ? "h-12 w-12" : "h-48 w-full";
    return (
      <div className="flex items-center justify-center">
        <img
          src={url}
          alt="thumbnail"
          className={`${imageSize} cursor-pointer rounded-lg object-cover shadow-sm transition-transform hover:scale-105`}
          loading="lazy"
          onClick={() => setSelectedImage(url)}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/64?text=No+Image";
          }}
        />
      </div>
    );
  };

  // 뷰 모드 토글 버튼
  const ViewToggle = () => (
    <div className="mb-4 flex justify-center">
      <div className="inline-flex gap-2 rounded-lg p-1">
        <button
          className={`rounded-lg px-4 py-2 ${
            viewMode === "list"
              ? "bg-white text-gray-800 shadow"
              : "text-gray-600"
          }`}
          onClick={() => setViewMode("list")}
        >
          <div className="flex items-center space-x-2">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
            <span>리스트 뷰</span>
          </div>
        </button>
        <button
          className={`rounded-lg px-4 py-2 ${
            viewMode === "gallery"
              ? "bg-white text-gray-800 shadow"
              : "text-gray-600"
          }`}
          onClick={() => setViewMode("gallery")}
        >
          <div className="flex items-center space-x-2">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
            <span>갤러리 뷰</span>
          </div>
        </button>
      </div>
    </div>
  );

  // 갤러리 뷰 컴포넌트
  const GalleryView = ({ data }) => (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:shadow-xl"
        >
          {renderImage(item.ImgURL, "large")}
          <div className="p-4">
            <h3 className="mb-2 text-lg font-semibold text-gray-800">
              {item.Activity}
            </h3>
            <div className="mb-2">{renderTypeTag(item.Type)}</div>
            <p className="mb-2 text-sm text-gray-600">
              {formatDate(item.Start)}
            </p>
            <p className="mb-2 text-sm text-gray-600">{item.Location}</p>
            <p className="text-sm text-gray-500">{item.Owner}</p>
            <p className="mt-2 line-clamp-2 text-sm text-gray-600">
              {item.Contents}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  if (loading) {
    return (
      <div>
        <PageTitle>Seminar</PageTitle>
        <div className="mt-8 text-center">로딩 중...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <PageTitle>Seminar</PageTitle>
        <div className="mt-8 text-center text-red-500">에러: {error}</div>
      </div>
    );
  }

  // 데이터가 없으면 빈 테이블 표시
  if (data.length === 0) {
    return (
      <div>
        <PageTitle>Seminar</PageTitle>
        <div className="mt-8 text-center">데이터가 없습니다.</div>
      </div>
    );
  }

  //   console.log("렌더링할 데이터:", data);

  // 데이터 속성 정의
  const properties = [
    "ImgURL",
    "Activity",
    "Type",
    "Start",
    "Location",
    "Owner",
    "Contents",
  ];

  // Confirm이 true인 데이터만 필터링
  const filteredData = data
    .filter((item) => item.Confirm === true)
    .sort((a, b) => new Date(b.Start) - new Date(a.Start)); // Start 기준 내림차순 정렬

  return (
    <div>
      <PageTitle>Seminar</PageTitle>
      <ViewToggle />
      <div className="mt-8 px-4">
        <div className="flex justify-center">
          {viewMode === "list" ? (
            <div className="max-w-xs overflow-x-auto rounded-xl bg-white shadow-lg sm:max-w-screen-ss md:max-w-screen-sm xl:max-w-screen-md xxl:max-w-screen-xl xxxl:max-w-fit">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {properties.map((prop) => (
                      <th
                        key={prop}
                        className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                      >
                        {prop}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {filteredData.map((item) => (
                    <tr key={item.id}>
                      {properties.map((prop) => (
                        <td
                          key={`${item.id}-${prop}`}
                          className="whitespace-nowrap px-6 py-4 text-left text-sm text-gray-500"
                        >
                          {prop === "Start"
                            ? formatDate(item[prop])
                            : prop === "Type"
                              ? renderTypeTag(item[prop])
                              : prop === "ImgURL"
                                ? renderImage(item[prop])
                                : item[prop] || "-"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="w-full max-w-7xl">
              <GalleryView data={filteredData} />
            </div>
          )}
        </div>
      </div>
      {selectedImage && (
        <ImageModal
          url={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}

export default RealtimeTable;
