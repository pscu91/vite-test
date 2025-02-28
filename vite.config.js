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

  return {
    plugins: [react()],
    base: mode === "production" ? "/vite-test/" : "/",
    define: {
      __VITE_API_KEY__: `"${env.VITE_API_KEY}"`,
      __VITE_AUTH_DOMAIN__: `"${env.VITE_AUTH_DOMAIN}"`,
      __VITE_PROJECT_ID__: `"${env.VITE_PROJECT_ID}"`,
      __VITE_STORAGE_BUCKET__: `"${env.VITE_STORAGE_BUCKET}"`,
      __VITE_MESSAGING_SENDER_ID__: `"${env.VITE_MESSAGING_SENDER_ID}"`,
      __VITE_APP_ID__: `"${env.VITE_APP_ID}"`,
      __VITE_MEASUREMENT_ID__: `"${env.VITE_MEASUREMENT_ID}"`,
    },
  };
});
