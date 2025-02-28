import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages 배포 시 사용할 레포지토리 이름
const repositoryName = "vite-test";

// 개발 환경에서는 '/', 프로덕션 환경에서는 '/vite-test/'
const base =
  process.env.NODE_ENV === "production" ? `/${repositoryName}/` : "/";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === "production" ? "/vite-test/" : "/",
  define: {
    "process.env.VITE_API_KEY": JSON.stringify(process.env.VITE_API_KEY),
    "process.env.VITE_AUTH_DOMAIN": JSON.stringify(
      process.env.VITE_AUTH_DOMAIN,
    ),
    "process.env.VITE_PROJECT_ID": JSON.stringify(process.env.VITE_PROJECT_ID),
    "process.env.VITE_STORAGE_BUCKET": JSON.stringify(
      process.env.VITE_STORAGE_BUCKET,
    ),
    "process.env.VITE_MESSAGING_SENDER_ID": JSON.stringify(
      process.env.VITE_MESSAGING_SENDER_ID,
    ),
    "process.env.VITE_APP_ID": JSON.stringify(process.env.VITE_APP_ID),
    "process.env.VITE_MEASUREMENT_ID": JSON.stringify(
      process.env.VITE_MEASUREMENT_ID,
    ),
  },
});
