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
  apiKey: __VITE_API_KEY__,
  authDomain: __VITE_AUTH_DOMAIN__,
  projectId: __VITE_PROJECT_ID__,
  storageBucket: __VITE_STORAGE_BUCKET__,
  messagingSenderId: __VITE_MESSAGING_SENDER_ID__,
  appId: __VITE_APP_ID__,
  measurementId: __VITE_MEASUREMENT_ID__,
};

// 환경 변수 확인을 위한 디버깅
console.log("Firebase 설정 확인:");
Object.entries(firebaseConfig).forEach(([key, value]) => {
  console.log(`${key}:`, value || "설정되지 않음");
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
