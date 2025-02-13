import express from "express";
import cors from "cors";
import { createServer } from "http";

const app = express();
const server = createServer(app);

// CORS 사용
app.use(cors());

// API로 요청한 경우 hello 메시지를 보내는 콜백 함수
app.get("/api", (req, res) => {
  res.send({ message: "hello" });
});

// 서버가 잘 동작하고 있는지 확인
server.listen(8080, () => {
  console.log("server is running on 8080");
});
