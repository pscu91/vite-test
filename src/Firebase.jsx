import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {
  initializeFirestore,
  persistentLocalCache,
  persistentSingleTabManager,
} from "firebase/firestore";

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
console.log("=== Firebase 설정 확인 ===");
console.log("import.meta.env 확인:", import.meta.env);
Object.entries(firebaseConfig).forEach(([key, value]) => {
  console.log(`${key}: ${value ? "설정됨" : "설정되지 않음"} (${value})`);
});

// Firebase 초기화 시도
console.log("Firebase 초기화 시작...");
let app;
try {
  app = initializeApp(firebaseConfig);
  console.log("Firebase 앱 초기화 완료:", app.name);
} catch (error) {
  console.error("Firebase 초기화 실패:", error);
  throw error;
}

// Firestore 초기화 시도
console.log("Firestore 초기화 시작...");
let fireStore;
try {
  fireStore = initializeFirestore(app, {
    localCache: persistentLocalCache({
      tabManager: persistentSingleTabManager(),
    }),
  });
  console.log("Firestore 초기화 완료");
} catch (error) {
  console.error("Firestore 초기화 실패:", error);
  throw error;
}

// Auth 초기화 시도
console.log("Auth 초기화 시작...");
let auth;
try {
  auth = getAuth(app);
  console.log("Auth 초기화 완료");
} catch (error) {
  console.error("Auth 초기화 실패:", error);
  throw error;
}

export { fireStore, auth };
