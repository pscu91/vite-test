import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {
  initializeFirestore,
  persistentLocalCache,
  persistentSingleTabManager,
} from "firebase/firestore";

// Firebase 설정
console.log("=== Firebase 초기화 전 설정 확인 ===");
console.log("Firebase 설정 값:", __FIREBASE_CONFIG__);

const firebaseConfig = __FIREBASE_CONFIG__;

// Firebase 설정 값 확인
console.log("=== Firebase Config 확인 ===");
console.log("API Key 길이:", firebaseConfig.apiKey?.length || 0);
console.log("Project ID:", firebaseConfig.projectId);

// Firebase 초기화 시도
console.log("Firebase 초기화 시작...");
let app;
try {
  if (!firebaseConfig.apiKey) {
    throw new Error("API Key가 설정되지 않았습니다.");
  }
  app = initializeApp(firebaseConfig);
  console.log("Firebase 앱 초기화 완료:", app.name);
} catch (error) {
  console.error("Firebase 초기화 실패:", error);
  console.error("설정 값 확인:", {
    apiKeyExists: !!firebaseConfig.apiKey,
    projectIdExists: !!firebaseConfig.projectId,
    authDomainExists: !!firebaseConfig.authDomain,
  });
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
