import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
const PORT = 8080;

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(cors());
app.use(express.json());

app.get("/rooms", async (req, res) => {
  try {
    const rooms = [
      { id: 1, title: "Room 1" },
      { id: 2, title: "Room 2" },
      { id: 3, title: "Room 3" },
    ];
    res.json(rooms);
  } catch (error) {
    console.error("Error fetching:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post('/rooms', async (req, res) => {
  
});

io.on("connection", (socket) => {
  console.log("Started socket server");
});

server.listen(PORT, () =>
  console.info(`Listening on http://localhost:${PORT}/`)
);
