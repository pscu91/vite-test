import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// GitHub Pages 배포 시 사용할 레포지토리 이름
const repositoryName = "vite-test";

// 개발 환경에서는 '/', 프로덕션 환경에서는 '/vite-test/'
const base =
  process.env.NODE_ENV === "production" ? `/${repositoryName}/` : "/";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 환경 변수 로드
  const env = loadEnv(mode, process.cwd(), "");

  // 환경 변수 디버깅
  console.log("=== Vite 빌드 시 환경 변수 확인 ===");
  console.log("현재 모드:", mode);
  console.log(
    "process.env.VITE_API_KEY 존재 여부:",
    !!process.env.VITE_API_KEY,
  );
  console.log("env.VITE_API_KEY 존재 여부:", !!env.VITE_API_KEY);

  // 환경 변수 값 설정
  const envValues = {
    VITE_API_KEY: process.env.VITE_API_KEY || env.VITE_API_KEY || "",
    VITE_AUTH_DOMAIN:
      process.env.VITE_AUTH_DOMAIN || env.VITE_AUTH_DOMAIN || "",
    VITE_PROJECT_ID: process.env.VITE_PROJECT_ID || env.VITE_PROJECT_ID || "",
    VITE_STORAGE_BUCKET:
      process.env.VITE_STORAGE_BUCKET || env.VITE_STORAGE_BUCKET || "",
    VITE_MESSAGING_SENDER_ID:
      process.env.VITE_MESSAGING_SENDER_ID ||
      env.VITE_MESSAGING_SENDER_ID ||
      "",
    VITE_APP_ID: process.env.VITE_APP_ID || env.VITE_APP_ID || "",
    VITE_MEASUREMENT_ID:
      process.env.VITE_MEASUREMENT_ID || env.VITE_MEASUREMENT_ID || "",
    VITE_FIREBASE_DATABASE_URL:
      process.env.VITE_FIREBASE_DATABASE_URL ||
      env.VITE_FIREBASE_DATABASE_URL ||
      "",
  };

  return {
    plugins: [react()],
    base: mode === "production" ? "/vite-test/" : "/",
    define: {
      // 환경 변수를 전역으로 정의
      __FIREBASE_CONFIG__: JSON.stringify({
        apiKey: envValues.VITE_API_KEY,
        authDomain: envValues.VITE_AUTH_DOMAIN,
        projectId: envValues.VITE_PROJECT_ID,
        storageBucket: envValues.VITE_STORAGE_BUCKET,
        messagingSenderId: envValues.VITE_MESSAGING_SENDER_ID,
        appId: envValues.VITE_APP_ID,
        measurementId: envValues.VITE_MEASUREMENT_ID,
        databaseURL: envValues.VITE_FIREBASE_DATABASE_URL,
      }),
    },
    server: {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Cross-Origin-Resource-Policy": "cross-origin",
        "Cross-Origin-Embedder-Policy": "credentialless",
        "Cross-Origin-Opener-Policy": "same-origin",
      },
      proxy: {
        "/storage.googleapis.com": {
          target: "https://storage.googleapis.com",
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/storage.googleapis.com/, ""),
        },
      },
    },
  };
});
