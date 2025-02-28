import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// GitHub Pages 배포 시 사용할 레포지토리 이름
const repositoryName = "vite-test";

// 개발 환경에서는 '/', 프로덕션 환경에서는 '/vite-test/'
const base =
  process.env.NODE_ENV === "production" ? `/${repositoryName}/` : "/";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  // 환경 변수 디버깅
  console.log("=== Vite Config 환경 변수 ===");
  Object.keys(env).forEach((key) => {
    if (key.startsWith("VITE_")) {
      console.log(`${key}: ${env[key] ? "설정됨" : "설정되지 않음"}`);
    }
  });

  return {
    plugins: [react()],
    base: mode === "production" ? "/vite-test/" : "/",
    define: {
      // 전역 변수로 환경 변수 주입
      "process.env.VITE_API_KEY": JSON.stringify(env.VITE_API_KEY),
      "process.env.VITE_AUTH_DOMAIN": JSON.stringify(env.VITE_AUTH_DOMAIN),
      "process.env.VITE_PROJECT_ID": JSON.stringify(env.VITE_PROJECT_ID),
      "process.env.VITE_STORAGE_BUCKET": JSON.stringify(
        env.VITE_STORAGE_BUCKET,
      ),
      "process.env.VITE_MESSAGING_SENDER_ID": JSON.stringify(
        env.VITE_MESSAGING_SENDER_ID,
      ),
      "process.env.VITE_APP_ID": JSON.stringify(env.VITE_APP_ID),
      "process.env.VITE_MEASUREMENT_ID": JSON.stringify(
        env.VITE_MEASUREMENT_ID,
      ),
    },
  };
});
