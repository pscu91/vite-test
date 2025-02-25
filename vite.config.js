import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// GitHub Pages 배포 시 사용할 레포지토리 이름
const repositoryName = "vite-test";

// 개발 환경에서는 '/', 프로덕션 환경에서는 '/vite-test/'
const base =
  process.env.NODE_ENV === "production" ? `/${repositoryName}/` : "/";

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
});
