import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// GitHub Pages 배포 시 사용할 레포지토리 이름
const repositoryName = "vite-test";

// 개발 환경에서는 '/', 프로덕션 환경에서는 '/vite-test/'
const base =
  process.env.NODE_ENV === "production" ? `/${repositoryName}/` : "/";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 환경 변수 로드 (빈 문자열은 VITE_ 접두사가 없는 변수도 로드)
  const env = loadEnv(mode, process.cwd(), "");

  console.log("=== Vite 빌드 환경 변수 확인 ===");
  console.log("현재 모드:", mode);
  console.log("환경 변수 목록:");
  Object.keys(env).forEach((key) => {
    if (key.startsWith("VITE_")) {
      const value = env[key];
      console.log(
        `${key}: ${value ? `설정됨 (길이: ${value.length})` : "설정되지 않음"}`,
      );
    }
  });

  return {
    plugins: [react()],
    base: mode === "production" ? "/vite-test/" : "/",
    define: {
      // 환경 변수를 클라이언트에서 사용할 수 있도록 정의
      "import.meta.env.VITE_API_KEY": JSON.stringify(env.VITE_API_KEY || ""),
      "import.meta.env.VITE_AUTH_DOMAIN": JSON.stringify(
        env.VITE_AUTH_DOMAIN || "",
      ),
      "import.meta.env.VITE_PROJECT_ID": JSON.stringify(
        env.VITE_PROJECT_ID || "",
      ),
      "import.meta.env.VITE_STORAGE_BUCKET": JSON.stringify(
        env.VITE_STORAGE_BUCKET || "",
      ),
      "import.meta.env.VITE_MESSAGING_SENDER_ID": JSON.stringify(
        env.VITE_MESSAGING_SENDER_ID || "",
      ),
      "import.meta.env.VITE_APP_ID": JSON.stringify(env.VITE_APP_ID || ""),
      "import.meta.env.VITE_MEASUREMENT_ID": JSON.stringify(
        env.VITE_MEASUREMENT_ID || "",
      ),
    },
  };
});
