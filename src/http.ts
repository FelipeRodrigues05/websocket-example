import express from "express";
import http from "http";
import { Server } from "socket.io";
import path from "path"

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));

// CRIA UM SERVIDOR HTTP
const serverHttp = http.createServer(app);

// CRIA UM SERVIDOR USANDO SOCKET.IO
const io = new Server(serverHttp);

export { serverHttp, io };