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
  apiKey: process.env.VITE_API_KEY,
  authDomain: process.env.VITE_AUTH_DOMAIN,
  projectId: process.env.VITE_PROJECT_ID,
  storageBucket: process.env.VITE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_APP_ID,
  measurementId: process.env.VITE_MEASUREMENT_ID,
};

// 환경 변수 확인을 위한 디버깅
console.log("Current Environment:", process.env.NODE_ENV);
console.log("Environment Variables Check:");
Object.entries(firebaseConfig).forEach(([key, value]) => {
  console.log(`${key}: ${value ? "설정됨" : "설정되지 않음"}`);
});

// Firebase 초기화 시도
console.log("Firebase 초기화 시작...");
const app = initializeApp(firebaseConfig);
console.log("Firebase 앱 초기화 완료");

// Firestore 초기화 시도
console.log("Firestore 초기화 시작...");
const fireStore = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentSingleTabManager(),
  }),
});
console.log("Firestore 초기화 완료");

const auth = getAuth(app);

export { fireStore, auth };
