import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase 설정
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// 환경 변수 확인을 위한 디버깅
const missingVars = Object.entries(firebaseConfig)
  .filter(([key, value]) => !value)
  .map(([key]) => key);

if (missingVars.length > 0) {
  console.error("Missing Firebase configuration variables:", missingVars);
  throw new Error(
    `Firebase configuration is incomplete. Missing: ${missingVars.join(", ")}`,
  );
}

console.log("Firebase Config:", {
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  projectId: firebaseConfig.projectId,
  storageBucket: firebaseConfig.storageBucket,
  messagingSenderId: firebaseConfig.messagingSenderId,
  appId: firebaseConfig.appId,
  measurementId: firebaseConfig.measurementId,
});

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Firestore 인스턴스 생성
const fireStore = getFirestore(app);

export { fireStore };
